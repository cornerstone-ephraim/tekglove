import { type FormEvent, useState } from "react";
import type { ProductAccent } from "@/content/products";
import { submitWaitlistAction } from "../actions/submit-waitlist";
import { waitlistRoleValues } from "../data/waitlist-form-options";
import {
  waitlistDetailsSchema,
  waitlistInterestsSchema,
  type WaitlistDetailsField,
} from "../schemas/waitlist-submission";

type WaitlistStep = 1 | 2 | 3;
type DetailErrors = Partial<Record<WaitlistDetailsField, string>>;

export function useWaitlistForm(onComplete: () => void) {
  const [step, setStep] = useState<WaitlistStep>(1);
  const [direction, setDirection] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductAccent[]>([]);
  const [detailErrors, setDetailErrors] = useState<DetailErrors>({});
  const [productError, setProductError] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [turnstileToken, setTurnstileToken] = useState("");

  const goToStep = (nextStep: WaitlistStep) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const continueFromDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = waitlistDetailsSchema.safeParse({
      firstName,
      lastName,
      email,
      marketingConsent: consent,
    });

    if (!result.success) {
      const errors: DetailErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as WaitlistDetailsField;
        if (!errors[field]) errors[field] = issue.message;
      });
      setDetailErrors(errors);
      return;
    }

    setDetailErrors({});
    goToStep(2);
  };

  const continueFromInterests = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = waitlistInterestsSchema.safeParse({
      productInterests: selectedProducts,
    });
    if (!result.success) {
      setProductError(result.error.issues[0]?.message ?? "Select a glove.");
      return;
    }
    setProductError("");
    goToStep(3);
  };

  const submitWaitlist = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    const formData = new FormData(event.currentTarget);
    const result = await submitWaitlistAction({
      firstName,
      lastName,
      email,
      marketingConsent: consent,
      turnstileToken,
      productInterests: selectedProducts,
      intendedUse: role ? waitlistRoleValues[role] : undefined,
      countryCode: country || undefined,
      organisationName: formData.get("organisation") || undefined,
      useCase: formData.get("useCase") || undefined,
    });

    setIsSubmitting(false);

    if (result.status === "success") {
      onComplete();
      return;
    }

    setSubmissionError(result.message);
    setTurnstileToken("");
    setTurnstileResetKey((currentKey) => currentKey + 1);
  };

  const updateProductInterests = (products: ProductAccent[]) => {
    setSelectedProducts(products);
    if (products.length > 0) setProductError("");
  };

  const updateDetail = <Field extends WaitlistDetailsField>(
    field: Field,
    value: Field extends "marketingConsent" ? boolean : string,
  ) => {
    if (field === "firstName") setFirstName(value as string);
    if (field === "lastName") setLastName(value as string);
    if (field === "email") setEmail(value as string);
    if (field === "marketingConsent") setConsent(value as boolean);
    setDetailErrors((current) => ({ ...current, [field]: undefined }));
  };

  return {
    consent,
    continueFromDetails,
    continueFromInterests,
    country,
    direction,
    detailErrors,
    email,
    firstName,
    goToStep,
    isSubmitting,
    lastName,
    role,
    selectedProducts,
    setCountry,
    setRole,
    productError,
    step,
    submissionError,
    submitWaitlist,
    turnstileResetKey,
    turnstileToken,
    setTurnstileToken,
    updateDetail,
    updateProductInterests,
  };
}
