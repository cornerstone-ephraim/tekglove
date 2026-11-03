"use client";

import { useReducedMotion } from "@/shared/hooks/use-reduced-motion";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useState } from "react";
import { navLinks } from "@/content/navigation";
import { ButtonLink } from "@/shared/components/ui/button";
import {
  DesktopProductMenu,
  MobileProductMenu,
} from "@/shared/components/layout/product-nav";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-3 right-3 left-3 z-50 flex h-16 items-center justify-between rounded-2xl border border-primary/10 px-6 md:right-12 md:left-12 lg:right-20 lg:left-20 ${
          scrolled || open
            ? "bg-bg/95 shadow-sm backdrop-blur-2xl"
            : "bg-bg/90 backdrop-blur-xl"
        }`}
        style={{
          WebkitBackdropFilter: scrolled || open ? "blur(12px)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={close} className="no-underline">
          <span className="font-brand text-[1.1rem] font-black tracking-[0.15em] text-primary uppercase">
            Tek<span className="text-orange">Glove</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-4 lg:flex lg:gap-8">
          {navLinks.slice(0, -1).map(({ href, label }) => {
            const active = pathname === href;

            if (href === "/product") {
              return (
                <DesktopProductMenu
                  key={href}
                  pathname={pathname}
                  onNavigateAction={close}
                  reduceMotion={Boolean(reduceMotion)}
                />
              );
            }

            return (
              <li key={href} className="flex items-center">
                <Link
                  href={href}
                  className={`inline-flex items-center font-sans text-[0.82rem] leading-normal font-medium tracking-[-0.01em] normal-case no-underline transition-colors duration-200 ${
                    active
                      ? "text-orange"
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <ButtonLink href="/waitlist" size="sm">
            Get Early Access
          </ButtonLink>
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="pressable -mr-2 flex flex-col justify-center gap-1.25 p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
            className="block h-px w-6 origin-center bg-primary"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="block h-px w-6 origin-center bg-primary"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
            className="block h-px w-6 origin-center bg-primary"
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.24,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/98 pt-16 backdrop-blur-[28px] lg:hidden"
            style={{ WebkitBackdropFilter: "blur(20px)" }}
          >
            {/* Nav links */}
            <div className="flex flex-1 flex-col px-6 pt-8">
              {navLinks.slice(0, -1).map(({ href, label }, i) => {
                const active = pathname === href;

                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reduceMotion ? 0.2 : 0.24,
                      delay: reduceMotion ? 0 : i * 0.05,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="border-b border-primary/5"
                  >
                    {href === "/product" ? (
                      <MobileProductMenu
                        pathname={pathname}
                        onNavigateAction={close}
                        reduceMotion={Boolean(reduceMotion)}
                      />
                    ) : (
                      <Link
                        href={href}
                        onClick={close}
                        className="group flex items-center justify-between py-5 no-underline"
                      >
                        <span
                          className={`font-heading text-[clamp(2rem,8vw,3rem)] leading-none font-semibold tracking-[-0.04em] normal-case transition-colors duration-200 ${
                            active ? "text-orange" : "text-primary/85"
                          }`}
                        >
                          {label}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile footer */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.24,
                delay: reduceMotion
                  ? 0
                  : Math.max(0, navLinks.slice(0, -1).length - 1) * 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="flex flex-col gap-4 px-6 pt-8 pb-12"
            >
              <p className="text-center font-mono text-xs tracking-[0.08em] text-primary/55 normal-case">
                tekglove.co.uk
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
