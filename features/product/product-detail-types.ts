import type { LucideIcon } from "lucide-react";
import type { ProductAccent } from "@/content/products";

export type PublishedProductName = "Kradle" | "Kinetix" | "Kovert" | "Kursor";

export type ProductVisual = {
  image?: string;
  imageAlt?: string;
  presentation?: "product" | "editorial";
  icon: LucideIcon;
};

export type ProductDetailConfig = {
  name: PublishedProductName;
  accentColor: ProductAccent;
  accentSource: `#${string}`;
  mark: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  introduction: string;
  shader: "sensor" | "intelligence";
  signalLabel: string;
  signalValue: string;
  heroVisual: ProductVisual;
  specifications: Array<{ label: string; value: string }>;
  showcases: Array<
    ProductVisual & {
      kicker: string;
      title: string;
      description: string;
    }
  >;
  intelligence: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    capabilities: Array<{ title: string; description: string }>;
  };
  overview?: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    image: string;
    imageAlt: string;
    technical: {
      kicker: string;
      title: string;
      description: string;
      crossSectionImage: string;
      crossSectionImageAlt: string;
      detailImage: string;
      detailImageAlt: string;
    };
  };
  commandArchitecture?: true;
  useCases: {
    kicker: string;
    title: string;
    titleAccent: string;
    items: string[];
  };
  cta: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
  };
};
