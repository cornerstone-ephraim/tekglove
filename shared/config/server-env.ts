import "server-only";

const turnstileTestSecretKey = "1x0000000000000000000000000000000AA";

function requireServerEnvironmentVariable(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}

function requireServerUrl(name: string) {
  const value = requireServerEnvironmentVariable(name);

  try {
    return new URL(value).toString();
  } catch {
    throw new Error(`Invalid server URL environment variable: ${name}`);
  }
}

export const serverEnv = {
  resendApiKey: requireServerEnvironmentVariable("RESEND_API_KEY"),
  resendFromEmail: requireServerEnvironmentVariable("RESEND_FROM_EMAIL"),
  resendWaitlistSegmentId: requireServerEnvironmentVariable(
    "RESEND_WAITLIST_SEGMENT_ID",
  ),
  resendGloveTopicIds: {
    kradle: requireServerEnvironmentVariable("RESEND_KRADLE_TOPIC_ID"),
    kinetix: requireServerEnvironmentVariable("RESEND_KINETIX_TOPIC_ID"),
    kursor: requireServerEnvironmentVariable("RESEND_KURSOR_TOPIC_ID"),
    kovert: requireServerEnvironmentVariable("RESEND_KOVERT_TOPIC_ID"),
    kapture: requireServerEnvironmentVariable("RESEND_KAPTURE_TOPIC_ID"),
    konnect: requireServerEnvironmentVariable("RESEND_KONNECT_TOPIC_ID"),
  },
  siteUrl: requireServerUrl("SITE_URL"),
  supabaseUrl: requireServerEnvironmentVariable("SUPABASE_URL"),
  supabaseSecretKey: requireServerEnvironmentVariable("SUPABASE_SECRET_KEY"),
  turnstileSecretKey:
    process.env.NODE_ENV === "production"
      ? requireServerEnvironmentVariable("TURNSTILE_SECRET_KEY")
      : turnstileTestSecretKey,
  waitlistNotificationEmail: requireServerEnvironmentVariable(
    "WAITLIST_NOTIFICATION_EMAIL",
  ),
};
