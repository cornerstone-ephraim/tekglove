"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { revealViewport } from "@/shared/motion/card-reveal";
import type { ProductDetailConfig } from "../product-detail-types";

type ProductCompanionProps = {
  companion: NonNullable<ProductDetailConfig["companion"]>;
};

export function ProductCompanion({ companion }: ProductCompanionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="mb-14 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end"
      >
        <div>
          <p className="section-kicker mb-5">{companion.kicker}</p>
          <h2 className="display-title max-w-[11ch] text-[clamp(2.8rem,6vw,5rem)] text-white">
            {companion.title}
            <br />
            <span className="text-orange">{companion.titleAccent}</span>
          </h2>
        </div>
        <p className="copy-secondary max-w-[58ch] text-[0.95rem] leading-[1.85] md:pb-1">
          {companion.description}
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <motion.figure
          initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.65,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative aspect-3/4 overflow-hidden rounded-3xl bg-white/5"
        >
          <Image
            src={companion.primaryImage}
            alt={companion.primaryImageAlt}
            fill
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-kradle-300/15 mix-blend-color" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.65,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative aspect-2/1 overflow-hidden rounded-3xl bg-[#e9e4d9]"
        >
          <Image
            src={companion.secondaryImage}
            alt={companion.secondaryImageAlt}
            fill
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="scale-105 object-cover object-bottom"
          />
          <div className="pointer-events-none absolute inset-0 bg-kradle-300/15 mix-blend-color" />
        </motion.figure>
      </div>
    </section>
  );
}
