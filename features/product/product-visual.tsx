import Image from "next/image";
import { FloatingGlove } from "@/shared/components/ui/floating-glove";
import type { ProductVisual as ProductVisualConfig } from "./product-detail-types";

type ProductVisualProps = ProductVisualConfig & {
  delay?: number;
  priority?: boolean;
  imageClassName?: string;
};

export function ProductVisual({
  image,
  imageAlt = "",
  presentation = "product",
  icon: Icon,
  delay = 0,
  priority = false,
  imageClassName = "max-w-136",
}: ProductVisualProps) {
  if (image && presentation === "editorial") {
    return (
      <figure className="relative z-10 aspect-4/3 w-full max-w-200 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
      </figure>
    );
  }

  if (image) {
    return (
      <FloatingGlove delay={delay} className="relative z-10 w-full">
        <Image
          src={image}
          alt={imageAlt}
          width={760}
          height={760}
          className={`h-auto w-full object-contain ${imageClassName}`}
          priority={priority}
        />
      </FloatingGlove>
    );
  }

  return (
    <FloatingGlove delay={delay} className="relative z-10">
      <div className="relative grid size-64 place-items-center sm:size-80">
        <div className="absolute inset-0 rounded-full border border-orange/15 bg-orange/5 shadow-[0_0_110px_rgba(249,115,22,0.12)]" />
        <div className="absolute inset-[18%] rounded-full border border-white/10" />
        <div className="absolute inset-[34%] rounded-full border border-orange/25 bg-black/55 backdrop-blur-xl" />
        <Icon className="relative text-orange" size={72} strokeWidth={1.1} />
      </div>
    </FloatingGlove>
  );
}
