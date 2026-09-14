import type { Metadata } from "next";
import ProductPage from "@/features/product/product-page";
import { createPageMetadata } from "@/shared/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Kapture Recovery and Rehabilitation Glove",
  description:
    "Discover Kapture, a rehabilitation glove in development combining EMS, TENS, heat, vibration, grip sensing, and AI recovery guidance.",
  path: "/product/kapture",
  keywords: [
    "Kapture glove",
    "Smart Dorsal Sensor",
    "hand rehabilitation wearable",
  ],
});

export default function KapturePage() {
  return <ProductPage productName="Kapture" />;
}
