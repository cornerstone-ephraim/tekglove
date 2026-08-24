"use client";

import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/shared/components/ui/button";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { revealViewport } from "@/shared/motion/card-reveal";
import type { ProductDetailConfig } from "../product-detail-types";

export function ProductCta({ config }: { config: ProductDetailConfig }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <ShaderBackdrop
        variant="cta-halftone"
        accentColor={config.accentSource}
        className="mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] opacity-80"
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[110px]" />
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <p className="section-kicker mb-6">{config.cta.kicker}</p>
        <h2 className="display-title mb-6 text-[clamp(2.75rem,6vw,6rem)] text-white">
          {config.cta.title}
          <br />
          <span className="text-orange">{config.cta.titleAccent}</span>
        </h2>
        <p className="copy-secondary mb-10 max-w-[54ch] text-base leading-[1.8]">
          {config.cta.description}
        </p>
        <ButtonLink href="/waitlist" size="lg">
          Join the Waitlist
        </ButtonLink>
      </motion.div>
    </section>
  );
}
