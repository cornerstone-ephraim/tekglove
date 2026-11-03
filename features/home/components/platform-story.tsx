import Image from "next/image";
import { features } from "@/content/home";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/shared/components/ui/button";

export function PlatformStory() {
  return (
    <>
      <section
        id="explore"
        className="curve-section bg-sage px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="story-heading">
            The Body’s
            <br />
            Natural Interface.
          </h2>
          <div className="max-w-lg md:pt-3">
            <p className="text-xl leading-relaxed">
              Hands already communicate, control, create, and operate. TekGlove
              adds intelligence without interrupting those natural actions.
            </p>
            <p className="mt-6 leading-relaxed text-copy-secondary">
              The hand reveals movement, grip force, gestures, position, and
              physical response that other wearable locations cannot capture
              together.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Link
            href="/knksports"
            className="group rounded-3xl bg-paper p-8 md:p-10"
          >
            <span className="text-sm text-copy-secondary">Sports · Kradle</span>
            <div className="mt-8 flex items-center justify-between gap-4">
              <h3 className="text-4xl font-medium md:text-5xl">
                Feel more
                <br />
                connected.
              </h3>
              <ArrowUpRight className="shrink-0" size={32} />
            </div>
            <p className="mt-8 max-w-sm text-copy-secondary">
              Health, fitness and wellness. Explore the athlete-centred side of
              TekGlove with KNK Sports.
            </p>
          </Link>
          <Link
            href="/knkrobotics"
            className="group rounded-3xl bg-ink p-8 text-paper md:p-10"
          >
            <span className="text-sm text-paper/70">Robotics · Kinetik</span>
            <div className="mt-8 flex items-center justify-between gap-4">
              <h3 className="text-4xl font-medium md:text-5xl">
                Give movement
                <br />
                meaning.
              </h3>
              <ArrowUpRight className="shrink-0" size={32} />
            </div>
            <p className="mt-8 max-w-sm text-paper/75">
              Motion, grip and gesture. Exploring how human actions can inform
              interaction with machines.
            </p>
          </Link>
        </div>
      </section>
      <section
        className="px-6 pt-20 md:px-12 lg:px-20"
        aria-label="Built Around the Hand"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.id} className="border-t border-border pt-6">
              <h2 className="text-2xl font-medium">{feature.title}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-copy-secondary">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
            <Image
              src="/images/redesign/model-breakdown.png"
              alt="Exploded concept showing the glove, mounting layers and display module"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-contain p-6"
            />
          </div>
          <div>
            <p className="mb-6 text-sm text-copy-secondary">
              Shared Technology Stack
            </p>
            <h2 className="story-heading">
              Inside Every
              <br />
              Glove.
            </h2>
            <div className="mt-10 space-y-5">
              {[
                [
                  "Smart Dorsal Sensor",
                  "The shared sensing and intelligence foundation that captures hand data and powers every TekGlove product.",
                ],
                [
                  "Hand-Data Capture",
                  "Sensing tailored to the product: health and activity for Kradle; motion, grip and gesture for Kinetik.",
                ],
                [
                  "Interpreted Insight",
                  "AI and connected software turn raw hand data into performance feedback, health signals, alerts, commands, and operational intelligence.",
                ],
              ].map(([title, description]) => (
                <div key={title} className="border-t border-border pt-5">
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-copy-secondary">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="curve-section bg-surface px-6 py-24 md:px-12 lg:px-20">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <h2 className="story-heading">
            One Platform.
            <br />
            Endless Possibilities.
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
            Six specialized gloves interpret hand data for six distinct fields.
            Each is powered by the Smart Dorsal Sensor and extended through
            purpose-built modules and connected accessories.
          </p>
        </div>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {[
            ["Kradle", "Health, fitness & wellness", "kradle"],
            ["Kinetik", "Motion, grip & gesture", "kinetik"],
            ["Kursor", "Human–computer interaction", "kursor"],
            ["Kovert", "Security & tactical applications", "kovert"],
            ["Kapture", "Recovery & rehabilitation", "kapture"],
            ["Konnect", "Connected work", "konnect"],
          ].map(([name, purpose, slug]) => (
            <Link
              key={slug}
              href={`/product/${slug}`}
              className="flex items-center justify-between gap-6 border-t border-border py-7"
            >
              <div>
                <h3 className="text-2xl font-medium">{name}</h3>
                <p className="mt-2 text-sm text-copy-secondary">{purpose}</p>
              </div>
              <ArrowUpRight size={23} />
            </Link>
          ))}
        </div>
      </section>
      <section className="px-6 py-24 text-center md:py-32">
        <p className="mb-6 text-sm text-copy-secondary">Limited Beta</p>
        <h2 className="story-heading">
          Be First to
          <br />
          Wear It.
        </h2>
        <p className="mx-auto mt-7 max-w-md leading-relaxed text-copy-secondary">
          Sign up for beta testing or early access. Limited spots available.
        </p>
        <ButtonLink href="/waitlist" className="mt-8">
          Get Early Access
        </ButtonLink>
      </section>
    </>
  );
}
