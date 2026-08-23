import { z } from "zod";

export const waitlistProductSlugs = [
  "kradle",
  "kinetix",
  "kursor",
  "kovert",
  "kapture",
  "konnect",
] as const;

export const waitlistIntendedUses = [
  "personal_use",
  "healthcare_professional",
  "coach_or_trainer",
  "research_or_education",
  "business_or_organisation",
  "other",
] as const;

export const waitlistDetailsSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Enter your first name.")
    .max(80, "First name must be 80 characters or fewer."),
  lastName: z
    .string()
    .trim()
    .min(1, "Enter your last name.")
    .max(80, "Last name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .max(320, "Email address is too long.")
    .pipe(z.email("Enter a valid email address.")),
  marketingConsent: z.literal(true, {
    error: "Consent is required.",
  }),
});

export const waitlistInterestsSchema = z.object({
  productInterests: z
    .array(z.enum(waitlistProductSlugs))
    .min(1, "Select at least one glove."),
});

export type WaitlistDetailsField = keyof z.infer<typeof waitlistDetailsSchema>;

const optionalText = (maximumLength: number) =>
  z
    .string()
    .trim()
    .max(maximumLength)
    .optional()
    .transform((value) => value || undefined);

export const waitlistSubmissionSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().toLowerCase().pipe(z.email().max(320)),
  marketingConsent: z.literal(true, {
    error: "Consent is required to join the waitlist.",
  }),
  turnstileToken: z.string().min(1).max(2048),
  productInterests: z
    .array(z.enum(waitlistProductSlugs))
    .min(1)
    .max(6)
    .refine((values) => new Set(values).size === values.length, {
      error: "Product interests must be unique.",
    }),
  intendedUse: z.enum(waitlistIntendedUses).optional(),
  countryCode: z
    .union([z.literal(""), z.string().regex(/^[A-Z]{2}$/)])
    .optional()
    .transform((value) => value || undefined),
  organisationName: optionalText(160),
  useCase: optionalText(1000),
});

export type WaitlistSubmission = z.infer<typeof waitlistSubmissionSchema>;
