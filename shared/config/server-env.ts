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
