"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { revealViewport } from "@/shared/motion/card-reveal";
import type { ProductDetailConfig } from "../product-detail-types";

type ProductOverviewProps = {
  overview: NonNullable<ProductDetailConfig["overview"]>;
};

export function ProductOverview({ overview }: ProductOverviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/10 px-6 py-20 md:px-12 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="mb-12 grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:items-end"
      >
        <div>
          <p className="section-kicker mb-5">{overview.kicker}</p>
          <h2 className="display-title max-w-[11ch] text-[clamp(2.8rem,6vw,5rem)] text-white">
            {overview.title}
            <br />
            <span className="text-orange">{overview.titleAccent}</span>
          </h2>
        </div>
        <p className="copy-secondary max-w-[58ch] text-[0.95rem] leading-[1.85] md:pb-1">
          {overview.description}
        </p>
      </motion.div>

      <motion.figure
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.65,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10 bg-white sm:aspect-3/2"
      >
        <Image
          src={overview.image}
          alt={overview.imageAlt}
          fill
          sizes="(min-width: 1280px) 92vw, 100vw"
          className="object-cover object-top"
        />
      </motion.figure>

      <div className="mt-20 md:mt-28">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-10 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end"
        >
          <div>
            <p className="section-kicker mb-4">{overview.technical.kicker}</p>
            <h3 className="font-heading text-[clamp(2.25rem,5vw,4rem)] font-semibold tracking-[-0.05em] text-white">
              {overview.technical.title}
            </h3>
          </div>
          <p className="copy-secondary max-w-[58ch] text-[0.95rem] leading-[1.85] md:pb-1">
            {overview.technical.description}
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.figure
            initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.65,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-surface"
          >
            <Image
              src={overview.technical.crossSectionImage}
              alt={overview.technical.crossSectionImageAlt}
              width={450}
              height={430}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full"
            />
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
            className="overflow-hidden rounded-3xl border border-white/10 bg-surface"
          >
            <Image
              src={overview.technical.detailImage}
              alt={overview.technical.detailImageAlt}
              width={358}
              height={430}
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="h-auto w-full"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
