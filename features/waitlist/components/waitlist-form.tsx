"use client";

import { ecosystemProducts } from "@/content/products";
import { Button } from "@/shared/components/ui/button";
import { Turnstile } from "@/shared/components/ui/turnstile";
import { useWaitlistForm } from "../hooks/use-waitlist-form";

const fieldClassName =
  "mt-3 w-full border-b border-primary/25 bg-transparent py-3 text-base text-primary outline-hidden placeholder:text-copy-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

export function WaitlistForm({
  onCompleteAction,
}: {
  onCompleteAction: () => void;
}) {
  const form = useWaitlistForm(onCompleteAction);
  return (
    <form
      onSubmit={form.submitWaitlist}
      className="space-y-8"
      aria-busy={form.isSubmitting}
    >
      <fieldset disabled={form.isSubmitting} className="min-w-0 space-y-8">
        <label className="block text-sm font-medium">
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={320}
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </label>
        <fieldset>
          <legend className="text-sm font-medium">
            Which products interest you?
          </legend>
          <p className="mt-2 text-sm text-copy-muted">Choose one or more.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {ecosystemProducts.map((product) => (
              <label
                key={product.slug}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-primary/20 px-4 py-3 text-sm has-checked:border-primary has-checked:bg-sage"
              >
                <input
                  type="checkbox"
                  name="productInterests"
                  value={product.slug}
                  className="size-4 accent-primary"
                />
                {product.name}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block text-sm font-medium">
          What would you use TekGlove for?{" "}
          <span className="font-normal text-copy-muted">(optional)</span>
          <textarea
            name="useCase"
            rows={3}
            maxLength={1000}
            placeholder="Your sport, work or idea."
            className={fieldClassName + " resize-y"}
          />
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-copy-secondary">
          <input
            name="marketingConsent"
            type="checkbox"
            required
            className="mt-1 size-4 shrink-0 accent-primary"
          />
          <span>
            I agree to receive TekGlove updates and early access invitations.
            Unsubscribe anytime.
          </span>
        </label>
      </fieldset>
      <Turnstile
        key={form.turnstileResetKey}
        onVerifyAction={form.setTurnstileToken}
        onExpireAction={() => form.setTurnstileToken("")}
        onErrorAction={() => form.setTurnstileToken("")}
      />
      {form.submissionError && (
        <p role="alert" className="text-sm text-red-700">
          {form.submissionError}
        </p>
      )}
      <Button
        type="submit"
        disabled={form.isSubmitting || !form.turnstileToken}
      >
        {form.isSubmitting ? "Joining…" : "Join the waitlist"}
      </Button>
      <p className="border-t border-primary/15 pt-6 text-sm text-copy-muted">
        Product updates. Testing opportunities. Early access.
      </p>
    </form>
  );
}
