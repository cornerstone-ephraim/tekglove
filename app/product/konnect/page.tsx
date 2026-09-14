import type { Metadata } from "next";
import ProductPage from "@/features/product/product-page";
import { createPageMetadata } from "@/shared/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Konnect Industrial Workforce Glove",
  description:
    "Discover Konnect, an industrial glove in development connecting workers with digital guidance, barcode and RFID interaction, communication, and workflow insights.",
  path: "/product/konnect",
  keywords: [
    "Konnect glove",
    "Smart Dorsal Sensor",
    "industrial wearable technology",
  ],
});

export default function KonnectPage() {
  return <ProductPage productName="Konnect" />;
}
