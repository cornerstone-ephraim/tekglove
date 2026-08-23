"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ecosystemProducts } from "@/content/products";
import { Button } from "@/shared/components/ui/button";
import { Turnstile } from "@/shared/components/ui/turnstile";
import {
  waitlistRoles,
  waitlistStepContent,
} from "../data/waitlist-form-options";
import { useWaitlistForm } from "../hooks/use-waitlist-form";
import { CountrySelect } from "./country-select";
import { CustomSelect } from "./custom-select";
import { ProductInterestGrid } from "./product-interest-grid";

const fieldClassName =
  "min-h-13 w-full rounded-xl border border-white/10 bg-white/4 px-4 text-base text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/25 hover:border-white/20 focus:border-orange/70 focus:bg-white/6 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.12)]";

function RequiredMark() {
  return (
    <>
      {" "}
      <span className="text-orange" aria-hidden="true">
        *
      </span>
      <span className="sr-only">Required</span>
    </>
  );
}

function FieldError({ error }: { error?: string }) {
  return error ? (
    <span aria-hidden="true" className="ml-2 font-normal text-red-400">
      ({error})
    </span>
  ) : null;
}

function getFieldClassName(hasError: boolean) {
  return `${fieldClassName} ${
    hasError
      ? "border-red-400/70 hover:border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.12)]"
      : ""
  }`;
}

type WaitlistFormProps = {
  onCompleteAction: () => void;
};

export function WaitlistForm({ onCompleteAction }: WaitlistFormProps) {
  const form = useWaitlistForm(onCompleteAction);
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0.15 }
    : { type: "spring" as const, bounce: 0, duration: 0.42 };

  const motionState = {
    initial: { opacity: 0, x: reduceMotion ? 0 : form.direction * 12 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: reduceMotion ? 0 : form.direction * -12 },
  };

  return (
    <div>
      <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="font-mono text-[0.7rem] tracking-[0.12em] text-orange">
            {waitlistStepContent[form.step].label}
          </p>
          <p className="mt-2 text-sm text-white/45">
            {waitlistStepContent[form.step].description}
          </p>
        </div>
        <p className="font-mono text-xs text-white/40">{form.step} of 3</p>
      </div>

      <div className="mb-8 grid grid-cols-3 gap-2" aria-hidden="true">
        {[1, 2, 3].map((item) => (
          <span
            key={item}
            className={`h-0.5 rounded-full transition-colors duration-300 ${item <= form.step ? "bg-orange" : "bg-white/10"}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false} custom={form.direction}>
        {form.step === 1 && (
          <motion.form
            key="details"
            {...motionState}
            transition={transition}
            onSubmit={form.continueFromDetails}
            noValidate
            className="space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  First name
                  <RequiredMark />
                  <FieldError error={form.detailErrors.firstName} />
                </span>
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(event) =>
                    form.updateDetail("firstName", event.target.value)
                  }
                  placeholder="Your first name"
                  aria-invalid={Boolean(form.detailErrors.firstName)}
                  aria-describedby={
                    form.detailErrors.firstName ? "first-name-error" : undefined
                  }
                  className={getFieldClassName(
                    Boolean(form.detailErrors.firstName),
                  )}
                />
                {form.detailErrors.firstName ? (
                  <span id="first-name-error" className="sr-only">
                    {form.detailErrors.firstName}
                  </span>
                ) : null}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  Last name
                  <RequiredMark />
                  <FieldError error={form.detailErrors.lastName} />
                </span>
                <input
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(event) =>
                    form.updateDetail("lastName", event.target.value)
                  }
                  placeholder="Your last name"
                  aria-invalid={Boolean(form.detailErrors.lastName)}
                  aria-describedby={
                    form.detailErrors.lastName ? "last-name-error" : undefined
                  }
                  className={getFieldClassName(
                    Boolean(form.detailErrors.lastName),
                  )}
                />
                {form.detailErrors.lastName ? (
                  <span id="last-name-error" className="sr-only">
                    {form.detailErrors.lastName}
                  </span>
                ) : null}
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white">
                Email address
                <RequiredMark />
                <FieldError error={form.detailErrors.email} />
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) =>
                  form.updateDetail("email", event.target.value)
                }
                placeholder="you@example.com"
                aria-invalid={Boolean(form.detailErrors.email)}
                aria-describedby={
                  form.detailErrors.email ? "email-error" : undefined
                }
                className={getFieldClassName(Boolean(form.detailErrors.email))}
              />
              {form.detailErrors.email ? (
                <span id="email-error" className="sr-only">
                  {form.detailErrors.email}
                </span>
              ) : null}
            </label>

            <label
              className={`flex cursor-pointer items-start gap-3 rounded-xl border bg-black/20 p-4 transition-colors ${
                form.detailErrors.marketingConsent
                  ? "border-red-400/70"
                  : "border-white/8"
              }`}
            >
              <input
                type="checkbox"
                name="marketingConsent"
                checked={form.consent}
                onChange={(event) =>
                  form.updateDetail("marketingConsent", event.target.checked)
                }
                aria-invalid={Boolean(form.detailErrors.marketingConsent)}
                aria-describedby={
                  form.detailErrors.marketingConsent
                    ? "marketing-consent-error"
                    : undefined
                }
                className="mt-0.5 h-4 w-4 shrink-0 accent-orange"
              />
              <span className="text-xs leading-relaxed text-white/55">
                I agree to receive TekGlove development updates and early access
                invitations. I can unsubscribe at any time.
                <RequiredMark />
                <FieldError error={form.detailErrors.marketingConsent} />
                {form.detailErrors.marketingConsent ? (
                  <span id="marketing-consent-error" className="sr-only">
                    {form.detailErrors.marketingConsent}
                  </span>
                ) : null}
              </span>
            </label>

            <div className="flex flex-col-reverse items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
              <p className="max-w-[38ch] text-xs leading-relaxed text-white/35">
                Your information will only be used for TekGlove updates and
                product research.
              </p>
              <Button type="submit" icon={<BsArrowRight />}>
                Continue
              </Button>
            </div>
          </motion.form>
        )}

        {form.step === 2 && (
          <motion.form
            key="interests"
            {...motionState}
            transition={transition}
            onSubmit={form.continueFromInterests}
            className="space-y-7"
          >
            <ProductInterestGrid
              selected={form.selectedProducts}
              onChange={form.updateProductInterests}
              error={form.productError}
            />

            <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
              <Button
                type="button"
                variant="secondary"
                arrow="left"
                icon={<BsArrowLeft />}
                onClick={() => form.goToStep(1)}
              >
                Back
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </motion.form>
        )}

        {form.step === 3 && (
          <motion.form
            key="context"
            {...motionState}
            transition={transition}
            onSubmit={form.submitWaitlist}
            className="space-y-7"
          >
            <div>
              <p className="mb-3 text-sm font-medium text-white">
                Selected interests
              </p>
              <div className="flex flex-wrap gap-2">
                {form.selectedProducts.map((slug) => {
                  const product = ecosystemProducts.find(
                    (item) => item.slug === slug,
                  );
                  return (
                    <span
                      key={slug}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/65"
                    >
                      {product?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <CustomSelect
                label="Intended use"
                name="role"
                options={waitlistRoles}
                value={form.role}
                onChangeAction={form.setRole}
              />
              <CountrySelect
                value={form.country}
                onChangeAction={form.setCountry}
              />
            </div>

            {form.role === "Business or organisation" && (
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  Organisation name
                </span>
                <input
                  type="text"
                  name="organisation"
                  autoComplete="organization"
                  placeholder="Company or institution"
                  className={fieldClassName}
                />
              </label>
            )}

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white">
                What would you use TekGlove for?
              </span>
              <textarea
                name="useCase"
                rows={3}
                placeholder="Tell us what you would like the hand to make possible."
                className={`${fieldClassName} resize-none py-3.5 leading-relaxed`}
              />
            </label>

            {form.submissionError ? (
              <p
                role="alert"
                aria-live="polite"
                className="rounded-xl border border-red-400/25 bg-red-400/8 p-4 text-sm leading-relaxed text-red-100"
              >
                {form.submissionError}
              </p>
            ) : null}

            <Turnstile
              key={form.turnstileResetKey}
              onVerifyAction={form.setTurnstileToken}
              onExpireAction={() => form.setTurnstileToken("")}
              onErrorAction={() => form.setTurnstileToken("")}
            />

            <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
              <Button
                type="button"
                variant="secondary"
                arrow="left"
                icon={<BsArrowLeft />}
                disabled={form.isSubmitting}
                onClick={() => form.goToStep(2)}
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={form.isSubmitting || !form.turnstileToken}
              >
                {form.isSubmitting ? "Joining..." : "Join the waitlist"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
