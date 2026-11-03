import Image from "next/image";
import { knkApparel } from "@/content/knksports";
import { ButtonLink } from "@/shared/components/ui/button";

export function SportsApparel() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <figure className="relative aspect-3/4 overflow-hidden rounded-3xl bg-surface">
          <Image
            src="/images/redesign/tekglove-kradle-portrait.webp"
            alt="Kradle glove using the shared TekGlove design"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </figure>
        <div>
          <p className="mb-6 text-sm text-copy-secondary">Gear & Apparel</p>
          <h2 className="story-heading">
            The hand is
            <br />
            the starting point.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-copy-secondary">
            Our first focus is the TEK Glove: breathable mesh, a grippy palm and
            a flexible fit. Its dorsal dock holds the removable Kradle sensor,
            bringing health, fitness and wellness into the KNK Sports
            experience.
          </p>
          <ButtonLink href="/product/kradle" className="mt-8">
            Explore Kradle
          </ButtonLink>
          <div className="mt-12 border-t border-border pt-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-medium">Beyond the glove</h3>
              <span className="rounded-full border border-border px-3 py-1 text-xs">
                In development
              </span>
            </div>
            <p className="mt-4 max-w-lg leading-relaxed text-copy-secondary">
              A wider ambition for apparel and equipment shaped around different
              sports.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {knkApparel
                .filter((item) => item.name !== "Gloves")
                .map((item) => (
                  <li key={item.name} className="text-lg">
                    {item.name === "Clothes" ? "Clothing" : item.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
