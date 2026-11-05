"use client";

import { useRef, useState, type FormEvent } from "react";
import { submitWaitlistAction } from "../actions/submit-waitlist";
import { waitlistSubmissionSchema } from "../schemas/waitlist-submission";

export function useWaitlistForm(onComplete: () => void) {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const submitting = useRef(false);

  async function submitWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const data = new FormData(event.currentTarget);
    const parsed = waitlistSubmissionSchema.safeParse({
      email: data.get("email"),
      productInterests: data.getAll("productInterests"),
      useCase: data.get("useCase"),
      marketingConsent: data.get("marketingConsent") === "on",
      turnstileToken,
    });
    if (!parsed.success) {
      setSubmissionError(
        "Enter a valid email, choose at least one product and agree to receive updates. Complete verification before joining.",
      );
      return;
    }
    submitting.current = true;
    setIsSubmitting(true);
    setSubmissionError("");
    try {
      const result = await submitWaitlistAction(parsed.data);
      if (result.status === "success") {
        onComplete();
        return;
      }
      setSubmissionError(result.message);
    } catch {
      setSubmissionError("We couldn't connect. Please try again.");
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
      setTurnstileToken("");
      setTurnstileResetKey((key) => key + 1);
    }
  }

  return {
    submitWaitlist,
    turnstileToken,
    setTurnstileToken,
    turnstileResetKey,
    isSubmitting,
    submissionError,
  };
}
