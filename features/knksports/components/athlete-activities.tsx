"use client";

import { useState } from "react";
import { knkSports } from "@/content/knksports";

const illustrations = [
  "M90 60H350V340H90Z M90 200H350 M90 110H350 M90 290H350 M220 110V290 M120 60V340 M320 60V340",
  "M90 110L300 60 370 290 160 350Z M90 110V150L160 390 370 330V290 M160 350V390 M300 60V100 M90 150L300 100 370 330",
  "M110 320Q50 180 190 90T330 210Q370 340 240 330Z M245 230V100L310 125 245 150 M225 240Q245 250 265 240",
  "M80 70H360V340H80Z M80 110H360 M80 155H360 M80 200H360 M80 245H360 M80 290H360 M190 80V330 M250 80V330",
  "M80 60H360V350H80Z M80 205H360 M160 60V110H280V60 M160 350V300H280V350 M190 205a30 30 0 1 0 60 0a30 30 0 1 0 -60 0",
  "M100 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0 M270 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0 M160 270L210 165 270 270H160 M210 165H300L330 270 M300 165L285 130H320 M195 150H225",
];

export function AthleteActivities() {
  const [selected, setSelected] = useState(0);
  const sport = knkSports[selected];
  return (
    <section
      id="sports"
      className="scroll-mt-28 px-6 py-20 md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
        <h2 className="story-heading">
          Find your
          <br />
          way to move.
        </h2>
        <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
          Different sports. Different routines. One ambition: gear and a
          connected experience built around the athlete.
        </p>
      </div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Choose an athlete activity"
      >
        {knkSports.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={selected === index}
            aria-controls="sport-detail"
            onClick={() => setSelected(index)}
            className={`rounded-full border px-5 py-3 text-sm transition-colors ${selected === index ? "border-primary bg-primary text-bg" : "border-border hover:bg-sage"}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div
        id="sport-detail"
        className="grid overflow-hidden rounded-3xl bg-sage lg:grid-cols-2"
      >
        <div className="relative flex min-h-80 items-center justify-center p-8 md:min-h-100">
          <svg
            viewBox="0 0 440 440"
            className="aspect-square w-full max-w-100 text-primary/65"
            role="img"
            aria-label={`${sport.name} activity illustration`}
          >
            <path
              d={illustrations[selected]}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute bottom-5 left-6 text-xs text-copy-secondary">
            Activity illustration
          </span>
        </div>
        <div
          className="flex flex-col justify-center bg-surface-raised p-8 md:p-12"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-sm text-copy-secondary">{sport.name}</p>
          <h3 className="mt-6 max-w-lg text-4xl leading-tight font-medium tracking-tight md:text-5xl">
            {sport.focus}
          </h3>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-copy-secondary">
            {sport.description}
          </p>
          <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-copy-secondary">
            An activity shaping the KNK Sports direction. Sport-specific
            products and capabilities are in development.
          </p>
        </div>
      </div>
    </section>
  );
}
