"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const startedRef = useRef(false);
  const previousOverflowRef = useRef("");
  const shouldSkipSplash = pathname === "/waitlist/confirm";

  useEffect(() => {
    if (shouldSkipSplash) return;

    const shouldShow =
      startedRef.current ||
      !sessionStorage.getItem("tekglove-splash-seen-signal");
    if (!shouldShow) return;

    if (!startedRef.current) {
      sessionStorage.setItem("tekglove-splash-seen-signal", "true");
      startedRef.current = true;
    }

    const previousOverflow = document.body.style.overflow;
    previousOverflowRef.current = previousOverflow;
    const duration = reduceMotion ? 450 : 2000;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const exitId = window.setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      window.clearTimeout(exitId);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion, shouldSkipSplash]);

  if (shouldSkipSplash) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = previousOverflowRef.current;
      }}
    >
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: reduceMotion ? 0.2 : 0.6,
              ease: [0.23, 1, 0.32, 1],
            },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black"
          aria-hidden="true"
        >
          <ShaderBackdrop
            variant="sensor"
            className="mask-[radial-gradient(circle_at_center,black,transparent_68%)] opacity-30"
          />

          <motion.div
            initial={{
              transform: reduceMotion ? "translateX(0)" : "translateX(50%)",
            }}
            animate={{ transform: "translateX(0)" }}
            transition={{
              delay: reduceMotion ? 0 : 0.45,
              duration: reduceMotion ? 0 : 0.7,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative z-10 flex items-center gap-3 sm:gap-5"
          >
            <motion.div
              initial={{
                opacity: 0,
                transform: reduceMotion ? "translateX(0)" : "translateX(-50%)",
              }}
              animate={{ opacity: 1, transform: "translateX(0)" }}
              transition={{
                opacity: { duration: 0.2 },
                transform: {
                  delay: reduceMotion ? 0 : 0.45,
                  duration: reduceMotion ? 0 : 0.7,
                  ease: [0.23, 1, 0.32, 1],
                },
              }}
              className="relative h-20 w-16 shrink-0 overflow-hidden sm:h-28 sm:w-23"
            >
              <Image
                src="/tekglove_icon.png"
                alt=""
                width={180}
                height={180}
                preload
                className="absolute top-1/2 left-1/2 w-32 max-w-none -translate-1/2 mix-blend-screen invert sm:w-45"
              />
            </motion.div>

            <div className="overflow-hidden py-2">
              <motion.div
                initial={{
                  opacity: 0,
                  transform: reduceMotion
                    ? "translateX(0)"
                    : "translateX(-100%)",
                }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                transition={{
                  delay: reduceMotion ? 0 : 0.45,
                  duration: reduceMotion ? 0.2 : 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="font-brand text-5xl leading-none font-extrabold tracking-tight whitespace-nowrap text-white sm:text-7xl"
              >
                Tek<span className="text-orange">Glove</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
