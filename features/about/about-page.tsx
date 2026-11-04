import Image from "next/image";
import { about, principles, whyHandReasons, team } from "@/content/about";
import { ButtonLink } from "@/shared/components/ui/button";
import { ProductFilm } from "@/shared/components/ui/product-film";

export default function AboutPage() {
  return (
    <div className="bg-bg pt-36">
      <header className="px-6 pb-12 md:px-12 lg:px-20">
        <p className="mb-8 text-sm text-copy-secondary">About TekGlove</p>
        <h1 className="max-w-5xl text-6xl leading-none font-medium tracking-tight md:text-8xl">
          An idea shaped
          <br />
          by the human hand.
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <p className="max-w-md text-xl leading-relaxed">
            The hand is the starting point.
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-copy-secondary">
            {about.mission}
          </p>
        </div>
      </header>
      <div className="px-3 md:px-6">
        <ProductFilm
          src="/videos/three-gloves.webm"
          poster="/images/redesign/three-gloves.webp"
          label="Three TekGlove design prototypes"
          className="aspect-video rounded-3xl"
        />
      </div>
      <section className="grid gap-10 px-6 py-24 md:px-12 lg:grid-cols-2 lg:px-20">
        <div>
          <p className="mb-6 text-sm text-copy-secondary">Where it began</p>
          <h2 className="story-heading">
            Box. Run. Bike.
            <br />
            Then, TekGlove.
          </h2>
        </div>
        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-copy-secondary">
          <p>{about.story}</p>
          <p>
            Today, that idea is taking shape through distinct applications:
            Kradle for health, fitness and wellness; Kinetik for motion, grip
            and gesture in robotics.
          </p>
        </div>
      </section>
      <section className="curve-section bg-sage px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-6 text-sm text-copy-secondary">Why the hand?</p>
            <h2 className="story-heading">
              So much happens
              <br />
              at your fingertips.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-copy-secondary">
              A natural place to understand how people move, interact and
              respond.
            </p>
          </div>
          <dl>
            {whyHandReasons.map((reason) => (
              <div
                key={reason.id}
                className="border-t border-primary/20 py-7 first:border-t-0 first:pt-0"
              >
                <dt className="text-3xl font-medium">{reason.title}</dt>
                <dd className="mt-3 max-w-lg leading-relaxed text-copy-secondary">
                  {reason.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="grid items-center gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:px-20">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
          <Image
            src="/images/redesign/prototype-sensor.png"
            alt="Early TekGlove prototype with a rectangular sensor and textured fabric"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-contain p-6"
          />
        </div>
        <div>
          <p className="mb-6 text-sm text-copy-secondary">Our approach</p>
          <h2 className="story-heading">
            Useful insight.
            <br />
            Built from the hand.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-copy-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm text-copy-secondary">
              The person behind the idea
            </p>
            <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
              {team[0].name}
            </h2>
            <p className="mt-4 text-copy-secondary">{team[0].role}</p>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-copy-secondary">
            {team[0].bio}
          </p>
        </div>
      </section>
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 rounded-3xl bg-sage p-8 md:p-14 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-6 text-sm text-copy-secondary">Our vision</p>
            <h2 className="story-heading">
              Help shape
              <br />
              what comes next.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
              {about.vision}
            </p>
            <ButtonLink href="/waitlist" className="mt-8">
              Get Early Access
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
