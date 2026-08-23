const turnstileTestSiteKey = "1x00000000000000000000AA";

export const publicEnv = {
  turnstileSiteKey:
    process.env.NODE_ENV === "production"
      ? (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "")
      : turnstileTestSiteKey,
};
