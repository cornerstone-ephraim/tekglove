"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";
import { knkSports } from "@/content/knksports";
import { ButtonLink } from "@/shared/components/ui/button";
import { ConnectedSystem } from "./components/connected-system";
import { ActivityModes } from "./components/activity-modes";
import { KradleSensor } from "./components/kradle-sensor";

export default function KnkSportsPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-bg pt-16">
      <section className="border-b border-white/10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-375 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-kicker mb-6">KNK Sports · By TekGlove</p>
            <h1 className="display-title text-[clamp(3.75rem,7vw,7.5rem)] text-white">
              Built around
              <br />
              the <span className="text-orange">athlete.</span>
            </h1>
            <p className="copy-secondary mt-8 max-w-xl text-lg leading-relaxed">
              Your sport. Your training. Your next step. KNK Sports brings
              TekGlove’s connected gloves and gear into the world of the
              athlete.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/waitlist" size="lg">
                Get Early Access
              </ButtonLink>
              <ButtonLink
                href="#sports"
                variant="secondary"
                size="lg"
                arrow="none"
              >
                Find Your Sport
              </ButtonLink>
            </div>
          </div>
          <div className="flex justify-center bg-black">
            <Image
              src="/images/knk-sports-logo.png"
              alt="KNK Sports"
              width={1280}
              height={1280}
              preload
              sizes="(min-width: 1024px) 40vw, 85vw"
              className="aspect-square w-full max-w-120 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-375 gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="display-title max-w-2xl text-5xl text-white md:text-7xl">
            The hand is
            <br />
            the <span className="text-orange">starting point.</span>
          </h2>
          <div className="lg:pt-2">
            <p className="copy-secondary max-w-xl text-lg leading-relaxed">
              A grip on the racket. A hand on the bars. A glove ready for the
              next round. The hand connects you to so much of your sport.
            </p>
            <p className="copy-secondary mt-6 max-w-xl text-lg leading-relaxed">
              We’re starting with connected gloves, with a broader ambition:
              gear that supports more of how athletes train, move and perform.
              KNK Sports is where that journey takes shape.
            </p>
          </div>
        </div>
      </section>

      <section
        id="sports"
        className="scroll-mt-24 border-b border-white/10 px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-375">
          <p className="section-kicker mb-5">Athlete Activities</p>
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="display-title text-5xl text-white md:text-7xl">
              Different sports.
              <br />
              <span className="text-orange">One athlete-first approach.</span>
            </h2>
            <p className="copy-secondary max-w-xl text-base leading-relaxed lg:pl-10">
              Tennis, boxing, golf, American football, soccer and cycling are
              the athlete activities shaping KNK Sports. These activities sit
              alongside the named modes in the modular system.
            </p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {knkSports.map((sport) => (
              <article
                key={sport.name}
                className="border-t border-white/15 py-9"
              >
                <h3 className="font-brand text-4xl font-bold text-white">
                  {sport.name}
                </h3>
                <p className="mt-5 text-base font-medium text-orange">
                  {sport.focus}
                </p>
                <p className="copy-secondary mt-3 max-w-md text-sm leading-relaxed">
                  {sport.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-375 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <figure>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface">
              <Image
                src="/images/tekglove-platform-angle.webp"
                alt="TekGlove glove with its dorsal-mounted module"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="copy-secondary mt-4 text-sm">
              The TekGlove platform. The foundation for KNK Sports.
            </figcaption>
          </figure>
          <div>
            <p className="section-kicker mb-5">Powered by TekGlove</p>
            <h2 className="display-title text-5xl text-white md:text-6xl">
              The gear.
              <br />
              The connection.
              <br />
              <span className="text-orange">The athlete.</span>
            </h2>
            <p className="copy-secondary mt-8 max-w-xl text-base leading-relaxed">
              TekGlove provides the gloves, gear and modular technology. KNK
              Sports brings an athlete-centred perspective to how that
              technology fits into training and sport.
            </p>
            <p className="copy-secondary mt-5 max-w-xl text-base leading-relaxed">
              A glove is the starting point. Removable modules extend the
              platform, with connected experiences forming part of the wider
              vision. As the range develops, we’ll share what each product can
              do.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/product/kinetik" variant="secondary">
                Explore Kinetik
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Meet TekGlove
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ActivityModes />
      <ConnectedSystem />
      <KradleSensor />

      <section className="px-6 py-24 text-center md:px-12 md:py-32">
        <p className="section-kicker mb-5">Be Part of What Comes Next</p>
        <h2 className="display-title mx-auto max-w-4xl text-5xl text-white md:text-7xl">
          Your next chapter.
          <br />
          <span className="text-orange">Our starting point.</span>
        </h2>
        <p className="copy-secondary mx-auto mt-7 max-w-xl text-lg leading-relaxed">
          Join the TekGlove waitlist for early access and updates as we build
          the next chapter of connected sports gear.
        </p>
        <ButtonLink href="/waitlist" size="lg" className="mt-9">
          Get Early Access
        </ButtonLink>
      </section>
    </div>
  );
}
