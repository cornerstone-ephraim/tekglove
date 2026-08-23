"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { publicEnv } from "@/shared/config/public-env";

type TurnstileRenderOptions = {
  action?: string;
  callback: (token: string) => void;
  "error-callback": () => void;
  "expired-callback": () => void;
  sitekey: string;
  theme: "dark" | "light" | "auto";
};

declare global {
  interface Window {
    turnstile?: {
      remove: (widgetId: string) => void;
      render: (
        container: HTMLElement,
        options: TurnstileRenderOptions,
      ) => string;
    };
  }
}

type TurnstileProps = {
  onErrorAction: () => void;
  onExpireAction: () => void;
  onVerifyAction: (token: string) => void;
};

export function Turnstile({
  onErrorAction,
  onExpireAction,
  onVerifyAction,
}: TurnstileProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const onErrorRef = useRef(onErrorAction);
  const onExpireRef = useRef(onExpireAction);
  const onVerifyRef = useRef(onVerifyAction);

  onErrorRef.current = onErrorAction;
  onExpireRef.current = onExpireAction;
  onVerifyRef.current = onVerifyAction;

  useEffect(() => {
    const container = containerRef.current;
    const turnstile = window.turnstile;

    if (!scriptReady || !container || !turnstile) return;

    const widgetId = turnstile.render(container, {
      action: "waitlist_submit",
      callback: (token) => onVerifyRef.current(token),
      "error-callback": () => onErrorRef.current(),
      "expired-callback": () => onExpireRef.current(),
      sitekey: publicEnv.turnstileSiteKey,
      theme: "dark",
    });

    return () => turnstile.remove(widgetId);
  }, [scriptReady]);

  if (!publicEnv.turnstileSiteKey) {
    return (
      <p role="alert" className="text-sm text-red-100">
        Verification is temporarily unavailable.
      </p>
    );
  }

  return (
    <div>
      <Script
        id="cloudflare-turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} aria-label="Human verification" />
    </div>
  );
}
