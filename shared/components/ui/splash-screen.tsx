"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import Image from "next/image";
import { WatchSVG } from "@/shared/components/ui/watch-svg";

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

          <div className="relative z-10">
            <WatchSVG progress={100} reduceMotion={Boolean(reduceMotion)}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: reduceMotion ? 0 : 0.3,
                  duration: reduceMotion ? 0.2 : 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex size-full items-center justify-center"
              >
                <Image
                  src="/tekglove_icon.webp"
                  alt=""
                  width={96}
                  height={96}
                  preload
                  className="size-24 invert"
                />
              </motion.div>
            </WatchSVG>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
