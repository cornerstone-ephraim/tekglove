import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Kinetik Movement and Performance Glove",
  description:
    "Explore Kinetik, the TekGlove movement and performance wearable for motion tracking, grip sensing, biometrics, connected accessories, and coaching insight.",
  path: "/product/kinetik",
  keywords: [
    "Kinetik glove",
    "performance tracking glove",
    "sports wearable technology",
    "grip force monitoring",
    "motion tracking glove",
  ],
});

export default function KinetikPage() {
  return <ProductPage productName="Kinetik" />;
}
