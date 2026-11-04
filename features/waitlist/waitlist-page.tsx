"use client";

import { useState } from "react";
import { WaitlistForm } from "./components/waitlist-form";
import { WaitlistSuccess } from "./components/waitlist-success";

export default function WaitlistPage() {
  const [complete, setComplete] = useState(false);
  return (
    <section className="min-h-svh bg-bg px-6 pt-40 pb-20 md:px-12 lg:px-20 lg:pt-48">
      <div className="mx-auto grid max-w-350 gap-14 lg:grid-cols-2 lg:gap-24">
        <header>
          <p className="section-kicker mb-6">Early access</p>
          <h1 className="display-title max-w-[10ch] text-[clamp(3.25rem,6vw,6rem)] text-primary">
            The next step starts with you.
          </h1>
          <p className="mt-8 max-w-100 text-lg leading-relaxed text-copy-secondary">
            Join the TekGlove waitlist for development updates, testing
            opportunities and early access.
          </p>
          <p className="mt-10 text-sm text-copy-muted">
            The hand is the starting point.
          </p>
        </header>
        <div className="min-w-0 lg:pt-3">
          {complete ? (
            <WaitlistSuccess onResetAction={() => setComplete(false)} />
          ) : (
            <WaitlistForm onCompleteAction={() => setComplete(true)} />
          )}
        </div>
      </div>
    </section>
  );
}
