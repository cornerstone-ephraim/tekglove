import { knkModes } from "@/content/knksports";
import { ButtonLink } from "@/shared/components/ui/button";
import { ProductFilm } from "@/shared/components/ui/product-film";
import { ConnectedSystem } from "./components/connected-system";
import { SportsApparel } from "./components/sports-apparel";
import { AthleteActivities } from "./components/athlete-activities";

export default function KnkSportsPage() {
  return (
    <div className="bg-bg">
      <section className="new-hero relative overflow-hidden bg-bg">
        <ProductFilm
          src="/videos/tekglove-kradle-video.webm"
          portraitSrc="/videos/tekglove-kradle-video-portrait.webm"
          poster="/images/redesign/tekglove-kradle.webp"
          portraitPoster="/images/redesign/tekglove-kradle-portrait.webp"
          label="Kradle glove concept film"
          className="hero-film"
        />
        <div className="hero-copy relative z-10 px-6 md:px-12 lg:px-20">
          <p className="mb-7 text-sm font-medium">KNK Sports · By TekGlove</p>
          <h1 className="max-w-xl text-6xl leading-none font-medium tracking-tight md:text-7xl lg:text-8xl">
            Built around
            <br />
            the athlete.
          </h1>
          <p className="mt-8 max-w-88 text-lg leading-relaxed text-primary md:text-copy-secondary">
            AI-powered health, fitness and wellness, starting with Kradle. The
            TEK Glove, removable sensor and Edwin AI coach bring your activity
            into focus.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/waitlist">Get Early Access</ButtonLink>
            <ButtonLink href="#sports" variant="secondary" arrow="none">
              Find your sport
            </ButtonLink>
          </div>
        </div>
        <div className="hero-caption pointer-events-none relative z-10 flex justify-between px-6 pt-12 pb-8 text-xs text-copy-secondary md:px-12 lg:px-20">
          <span>The hand is the starting point.</span>
          {/* <span>Concept film · In development</span> */}
        </div>
      </section>
      <AthleteActivities />
      <ConnectedSystem />
      <SportsApparel />
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <h2 className="story-heading">
            One platform.
            <br />
            Different modes.
          </h2>
          <div className="max-w-xl space-y-4 text-lg leading-relaxed text-copy-secondary">
            <p>
              Alongside athlete activities, these six KNK Sports modes shape how
              the connected system can serve different environments.
            </p>
            <p className="text-sm">
              Capabilities describe our design direction. Final specifications
              and availability will follow as development progresses.
            </p>
          </div>
        </div>
        <div className="grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {knkModes.map((mode) => (
            <article key={mode.name} className="border-t border-border py-8">
              <p className="text-sm text-copy-secondary">{mode.focus}</p>
              <h3 className="mt-3 text-3xl font-medium">{mode.name}</h3>
              <ul className="mt-6 space-y-3 text-copy-secondary">
                {mode.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="curve-section bg-surface px-6 py-24 text-center md:px-12 md:py-32">
        <p className="mb-6 text-sm text-copy-secondary">
          KNK Sports early access
        </p>
        <h2 className="story-heading">
          Help shape your
          <br />
          next chapter.
        </h2>
        <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-copy-secondary">
          Join the TekGlove waitlist for updates on Kradle and the developing
          KNK Sports range.
        </p>
        <ButtonLink href="/waitlist" size="lg" className="mt-8">
          Get Early Access
        </ButtonLink>
      </section>
    </div>
  );
}
