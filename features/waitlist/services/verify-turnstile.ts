import "server-only";
import { z } from "zod";
import { serverEnv } from "@/shared/config/server-env";

const turnstileResponseSchema = z.object({
  success: z.boolean(),
  action: z.string().optional(),
});

export async function verifyWaitlistTurnstileToken(token: string) {
  const body = new FormData();
  body.set("secret", serverEnv.turnstileSecretKey);
  body.set("response", token);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body,
      cache: "no-store",
    },
  );

  if (!response.ok) return false;

  const result = turnstileResponseSchema.safeParse(await response.json());

  if (!result.success || !result.data.success) return false;

  if (process.env.NODE_ENV !== "production") return true;

  return result.data.action === "waitlist_submit";
}
