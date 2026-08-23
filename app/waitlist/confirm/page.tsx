import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { WaitlistConfirmationPage } from "@/features/waitlist/waitlist-confirmation-page";

export const metadata: Metadata = {
  title: "Confirm Your Email | TekGlove",
  description: "Confirm your email address for the TekGlove waitlist.",
  robots: {
    index: false,
    follow: false,
  },
};

type ConfirmationRouteProps = {
  searchParams: Promise<{
    status?: string;
    token?: string;
  }>;
};

export default async function ConfirmationRoute({
  searchParams,
}: ConfirmationRouteProps) {
  const { status, token } = await searchParams;
  const hasResultStatus =
    status === "confirmed" || status === "invalid" || status === "error";

  if (!token && !hasResultStatus) redirect("/waitlist");

  return <WaitlistConfirmationPage status={status} token={token} />;
}
