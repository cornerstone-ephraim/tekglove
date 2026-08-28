import type { Metadata } from "next";
import ProductPage from "@/features/product/product-page";
import { createPageMetadata } from "@/shared/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Kovert Tactical Command and Monitoring Glove",
  description:
    "Explore Kovert, the TekGlove tactical command system for live multi-camera monitoring, recording, professional audio, GPS telemetry, and remote device control.",
  path: "/product/kovert",
  keywords: [
    "Kovert glove",
    "tactical wearable technology",
    "wearable camera controller",
    "dorsal smart sensor",
    "GPS telemetry glove",
    "multi-camera command system",
  ],
});

export default function KovertPage() {
  return <ProductPage productName="Kovert" />;
}
