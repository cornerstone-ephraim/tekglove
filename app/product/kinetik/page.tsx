import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Kinetik | Motion, Grip and Gesture",
  description:
    "Explore Kinetik, the robotics direction of TekGlove, focused on motion, grip sensing and gesture interaction.",
  path: "/product/kinetik",
  keywords: [
    "Kinetik",
    "robotics",
    "motion tracking",
    "grip sensing",
    "gesture input",
  ],
});

export default function KinetikPage() {
  return <ProductPage productName="Kinetik" />;
}
