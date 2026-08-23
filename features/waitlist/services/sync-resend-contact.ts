import "server-only";
import { serverEnv } from "@/shared/config/server-env";
import { resend } from "@/shared/lib/resend/server";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import type { ConfirmedWaitlistEntry } from "./confirm-waitlist";

type GloveSlug = keyof typeof serverEnv.resendGloveTopicIds;

function isGloveSlug(value: string): value is GloveSlug {
  return value in serverEnv.resendGloveTopicIds;
}

function getTopicSubscriptions(productInterests: string[]) {
  const selectedProducts = new Set(productInterests.filter(isGloveSlug));

  return Object.entries(serverEnv.resendGloveTopicIds).map(([product, id]) => ({
    id,
    subscription: selectedProducts.has(product as GloveSlug)
      ? ("opt_in" as const)
      : ("opt_out" as const),
  }));
}

async function syncResendContact(entry: ConfirmedWaitlistEntry) {
  const topics = getTopicSubscriptions(entry.productInterests);
  const existingContact = await resend.contacts.get({ email: entry.email });

  if (existingContact.error?.name === "not_found") {
    const createdContact = await resend.contacts.create({
      email: entry.email,
      firstName: entry.firstName,
      lastName: entry.lastName,
      segments: [{ id: serverEnv.resendWaitlistSegmentId }],
      topics,
      unsubscribed: false,
    });

    if (createdContact.error) throw new Error(createdContact.error.message);
    return;
  }

  if (existingContact.error) throw new Error(existingContact.error.message);

  const updatedContact = await resend.contacts.update({
    email: entry.email,
    firstName: entry.firstName,
    lastName: entry.lastName,
  });
  if (updatedContact.error) throw new Error(updatedContact.error.message);

  const [segmentResult, topicsResult] = await Promise.all([
    resend.contacts.segments.add({
      email: entry.email,
      segmentId: serverEnv.resendWaitlistSegmentId,
    }),
    resend.contacts.topics.update({ email: entry.email, topics }),
  ]);

  if (segmentResult.error) throw new Error(segmentResult.error.message);
  if (topicsResult.error) throw new Error(topicsResult.error.message);
}

async function recordSyncResult(
  entryId: string,
  result: { error: string | null; syncedAt: string | null },
) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("waitlist_entries")
    .update({
      resend_sync_error: result.error,
      resend_synced_at: result.syncedAt,
    })
    .eq("id", entryId);

  if (error) console.error("Could not record Resend sync status", error);
}

export async function syncConfirmedWaitlistContact(
  entry: ConfirmedWaitlistEntry,
) {
  try {
    await syncResendContact(entry);
    await recordSyncResult(entry.id, {
      error: null,
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message.slice(0, 1000)
        : "Unknown Resend synchronization error.";

    await recordSyncResult(entry.id, { error: message, syncedAt: null });
    throw error;
  }
}
