import { ProductFilm } from "@/shared/components/ui/product-film";
import Image, { getImageProps } from "next/image";
import { FloatingGlove } from "@/shared/components/ui/floating-glove";
import type { ProductVisual as ProductVisualConfig } from "./product-detail-types";

type ProductVisualProps = ProductVisualConfig & {
  delay?: number;
  priority?: boolean;
  imageClassName?: string;
};

export function ProductVisual({
  image,
  portraitImage,
  video,
  portraitVideo,
  imageAlt = "",
  presentation = "product",
  icon: Icon,
  delay = 0,
  priority = false,
  imageClassName = "max-w-136",
}: ProductVisualProps) {
  if (image && video) {
    return (
      <ProductFilm
        src={video}
        portraitSrc={portraitVideo}
        poster={image}
        portraitPoster={portraitImage}
        label={imageAlt || "Product concept film"}
        className="relative z-10 aspect-9/16 w-full max-w-200 overflow-hidden rounded-3xl border border-primary/10 bg-surface md:aspect-4/3"
      />
    );
  }
  if (image && presentation === "editorial") {
    const { props: landscapeProps } = getImageProps({
      src: image,
      alt: imageAlt,
      fill: true,
      sizes: "(min-width: 1024px) 55vw, 100vw",
      priority,
    });
    const portraitProps = portraitImage
      ? getImageProps({
          src: portraitImage,
          alt: imageAlt,
          fill: true,
          sizes: "100vw",
          priority,
        }).props
      : undefined;
    return (
      <figure
        className={`relative z-10 w-full max-w-200 overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 shadow-2xl ${portraitImage ? "aspect-9/16 md:aspect-4/3" : "aspect-4/3"}`}
      >
        <picture>
          {portraitProps && (
            <source
              media="(max-width: 767px)"
              srcSet={portraitProps.srcSet}
              sizes={portraitProps.sizes}
            />
          )}
          {/* getImageProps supplies Next.js optimization for art-directed sources. */}
          <img {...landscapeProps} alt={imageAlt} className="object-cover" />
        </picture>
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
    <figure className="flex min-h-100 w-full flex-col items-center justify-center gap-6 bg-surface px-8 py-16 md:min-h-120">
      <Icon
        size={96}
        strokeWidth={1}
        className="text-copy-secondary"
        aria-hidden="true"
      />
      <figcaption className="text-sm text-copy-secondary">
        Product imagery in development
      </figcaption>
    </figure>
  );
}
