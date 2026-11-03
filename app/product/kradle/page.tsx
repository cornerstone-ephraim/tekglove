import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Kradle | Health, Fitness and Wellness",
  description:
    "Explore Kradle, the health, fitness and wellness direction of TekGlove and the connected system behind KNK Sports.",
  path: "/product/kradle",
  keywords: ["Kradle", "health wearable", "fitness", "wellness", "KNK Sports"],
});

export default function KradlePage() {
  return <ProductPage productName="Kradle" />;
}
