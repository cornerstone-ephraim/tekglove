"use client";
import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/shared/components/ui/button";

const views = {
  Motion: "Explore the shape and orientation of a hand in motion.",
  Grip: "Explore where contact and pressure could be understood.",
  Gesture: "Explore how a deliberate hand pose could become an input.",
};
export function MotionDemo() {
  const [view, setView] = useState<keyof typeof views>("Motion");
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <p className="mb-6 text-sm text-copy-secondary">
            Kradle &amp; Kinetik
          </p>
          <h2 className="story-heading">
            Every movement
            <br />
            has a story.
          </h2>
        </div>
        <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
          From health, fitness and wellness with Kradle to motion, grip and
          gesture with Kinetik, each system gives the hand a different role.
        </p>
      </div>
      <div className="mb-12 grid gap-8 rounded-3xl bg-sage p-8 md:p-12 lg:grid-cols-2">
        <div>
          <p className="text-sm text-copy-secondary">Kradle · KNK Sports</p>
          <h3 className="mt-4 text-3xl font-medium md:text-4xl">
            A closer understanding
            <br />
            of your wellbeing.
          </h3>
        </div>
        <div>
          <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
            The removable Kradle sensor brings health, fitness and wellness into
            the TEK Glove system. Edwin AI is being developed to help interpret
            activity, training and recovery information.
          </p>
          <ButtonLink href="/knksports" variant="secondary" className="mt-6">
            Explore Kradle
          </ButtonLink>
        </div>
      </div>
      <h3 className="mb-6 text-3xl font-medium">
        Kinetik · Motion, grip and gesture
      </h3>
      <div className="grid overflow-hidden rounded-3xl border border-border lg:grid-cols-2">
        <figure className="relative aspect-video bg-surface lg:aspect-auto">
          <Image
            src="/images/redesign/kinetik-right-hand.png"
            alt="Right-hand Kinetik glove demonstrating a closed grip"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div className="flex flex-col bg-ink p-7 text-paper md:p-9">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Illustration view"
          >
            {(Object.keys(views) as (keyof typeof views)[]).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={view === item}
                onClick={() => setView(item)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${view === item ? "border-paper bg-paper text-ink" : "border-paper/30 text-paper"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <svg
            viewBox="0 0 480 330"
            role="img"
            aria-label={`${view} concept illustration of a hand, not recorded sensor data`}
            className="my-3 min-h-48 flex-1 text-sage"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M178 302 165 233 113 184 98 150 112 137 139 151 168 177 153 86 159 52 174 48 184 64 206 151 206 44 215 24 230 24 239 43 240 147 254 56 269 43 282 49 285 66 275 156 298 91 314 83 327 94 323 113 303 191 287 236 279 302 Z" />
              <path
                opacity=".45"
                d="M178 302 221 215 279 302 M221 215 168 177 M221 215 206 151 M221 215 240 147 M221 215 275 156 M221 215 303 191 M168 177 184 64 M206 151 215 24 M240 147 269 43 M275 156 314 83"
              />
              {[
                [168, 177],
                [206, 151],
                [240, 147],
                [275, 156],
                [303, 191],
                [221, 215],
              ].map(([x, y]) => (
                <circle
                  key={x}
                  cx={x}
                  cy={y}
                  r={view === "Grip" ? 12 : 4}
                  fill="currentColor"
                  opacity={view === "Grip" ? 0.5 : 1}
                />
              ))}
              {view === "Gesture" && (
                <circle
                  cx="221"
                  cy="180"
                  r="126"
                  strokeDasharray="4 10"
                  opacity=".5"
                />
              )}
            </g>
          </svg>
          <p className="text-sm" aria-live="polite">
            {views[view]}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-paper/65">
            Illustrative preview. Not live tracking or measurements from the
            film.
          </p>
        </div>
      </div>
    </section>
  );
}
