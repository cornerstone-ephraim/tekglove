# Simplified waitlist rollout

Apply `supabase/migrations/20261104000000_optional_waitlist_names.sql` before deploying this version. It only removes NOT NULL requirements from first_name and last_name; existing values and length checks remain intact. Older clients that still submit names continue to work.

The form collects email, one or more product interests, an optional use-case note, and explicit updates consent. Turnstile and email confirmation remain required. Names are no longer requested; missing names are stored as null. Confirmation emails use “Hi there”, and Resend contact sync omits missing names.

Share cards use the saved 1200 × 630 image at `/og-image.png`. Shared page metadata uses this image for Open Graph and Twitter cards.
