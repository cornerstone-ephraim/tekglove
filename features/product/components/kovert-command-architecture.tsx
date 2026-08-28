"use client";

import { motion, useReducedMotion } from "motion/react";
import { revealViewport } from "@/shared/motion/card-reveal";
import { SecurityArchitectureSVG } from "./security-architecture-svg";
import { SecurityArchitectureMobileSVG } from "./security-architecture-mobile-svg";

export function KovertCommandArchitecture() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] lg:items-center xl:gap-20">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <p className="section-kicker mb-5">Kovert Command Architecture</p>
          <h2 className="display-title max-w-[12ch] text-[clamp(2.8rem,5vw,4.75rem)] text-white">
            Every Mission Feed.
            <br />
            <span className="text-orange">One Wearable Command Centre.</span>
          </h2>
          <p className="copy-secondary mt-7 max-w-[48ch] text-[0.95rem] leading-[1.85]">
            The Smart Sensor sits at the centre of Kovert, receiving live feeds
            and device status while sending recording, capture, and control
            commands back to every connected visual platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.7,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="min-w-0 overflow-hidden sm:p-6 lg:p-8"
        >
          <div className="w-full">
            {/* Mobile View (< md) */}
            <div className="mx-auto block max-w-sm md:hidden">
              <SecurityArchitectureMobileSVG />
            </div>

            {/* Tablet & Desktop View (>= md) */}
            <div className="mx-auto hidden max-w-4xl md:block lg:max-w-5xl">
              <SecurityArchitectureSVG />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
