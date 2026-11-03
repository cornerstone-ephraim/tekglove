import { HardHat, Package, Factory, ArrowRight } from "lucide-react";
import {
  roboticsCapabilities,
  roboticsApplications,
  roboticsWorkflow,
} from "@/content/knkrobotics";
import { ButtonLink } from "@/shared/components/ui/button";
import { ProductFilm } from "@/shared/components/ui/product-film";

const applicationIcons = [HardHat, Package, Factory];

export default function KnkRoboticsPage() {
  return (
    <div className="bg-bg pt-36">
      <header className="px-6 pb-12 md:px-12 lg:px-20">
        <p className="mb-7 text-sm text-copy-secondary">
          KNK Robotics™ · Powered by TekGlove Technology
        </p>
        <h1 className="max-w-5xl text-5xl leading-none font-medium tracking-tight md:text-7xl lg:text-8xl">
          Human intelligence.
          <br />
          Robotic learning.
        </h1>
        <div className="mt-10 grid items-end gap-8 lg:grid-cols-2">
          <p className="max-w-xl text-lg leading-relaxed text-copy-secondary">
            An industrial wearable in development for construction, logistics
            and manufacturing. Supporting the person wearing it while exploring
            how skilled human actions can become training data for robots.
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/waitlist">Register your interest</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" arrow="none">
              Explore the approach
            </ButtonLink>
          </div>
        </div>
      </header>
      <figure className="px-3 md:px-6">
        <ProductFilm
          src="/videos/tekglove-kinetik-video.webm"
          portraitSrc="/videos/tekglove-kinetik-video-portrait.webm"
          poster="/images/redesign/kinetik-poster.png"
          portraitPoster="/images/redesign/kinetik-portrait.png"
          label="Kinetik glove concept film"
          className="aspect-9/16 rounded-3xl md:aspect-16/7"
        />
        <figcaption className="px-3 pt-4 text-xs text-copy-secondary md:px-6">
          Kinetik concept imagery. Industrial hardware and robotic training
          demonstrations are in development.
        </figcaption>
      </figure>
      <section className="grid gap-10 px-6 py-24 md:px-12 lg:grid-cols-2 lg:px-20">
        <div>
          <p className="mb-6 text-sm text-copy-secondary">
            Kinetik · The robotics direction of TekGlove
          </p>
          <h2 className="story-heading">
            Teaching machines
            <br />
            through human hands.
          </h2>
        </div>
        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-copy-secondary">
          <p>
            Skilled workers know how to handle tools, manipulate objects and
            complete complex physical tasks. KNK Robotics aims to capture those
            demonstrations through movement, grip, gesture and interaction data.
          </p>
          <p>
            The ambition is to help robotic arms, industrial robots and humanoid
            systems learn from that experience, while bringing comfort and
            feedback features to the wearable itself.
          </p>
          <ButtonLink href="/product/kinetik" variant="secondary">
            Explore Kinetik
          </ButtonLink>
        </div>
      </section>
      <section className="curve-section bg-sage px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-6 text-sm text-copy-secondary">
              Proposed technology
            </p>
            <h2 className="story-heading">
              Support the worker.
              <br />
              Understand the work.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-copy-secondary">
              The Smart Dorsal Sensor anchors a system of connected sensors and
              optional comfort and feedback features.
            </p>
          </div>
          <dl>
            {roboticsCapabilities.map((item) => (
              <div
                key={item.title}
                className="border-t border-primary/20 py-7 first:border-0 first:pt-0"
              >
                <dt className="text-2xl font-medium">{item.title}</dt>
                <dd className="mt-3 max-w-lg leading-relaxed text-copy-secondary">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <h2 className="story-heading">
            Built around
            <br />
            real work.
          </h2>
          <p className="max-w-lg self-end text-lg leading-relaxed text-copy-secondary">
            Three industrial settings shaping the direction of KNK Robotics.
            Each brings different tasks, environments and handling requirements.
          </p>
        </div>
        <div className="divide-y divide-border">
          {roboticsApplications.map((item, index) => {
            const Icon = applicationIcons[index];
            return (
              <article
                key={item.title}
                className="grid gap-6 py-9 md:grid-cols-2"
              >
                <div className="flex items-center gap-5">
                  <Icon size={32} strokeWidth={1.3} aria-hidden="true" />
                  <h3 className="text-3xl font-medium">{item.title}</h3>
                </div>
                <div>
                  <p className="max-w-xl text-lg leading-relaxed text-copy-secondary">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm">{item.examples}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section
        id="how-it-works"
        className="curve-section scroll-mt-28 bg-surface px-6 py-20 md:px-12 lg:px-20"
      >
        <p className="mb-6 text-sm text-copy-secondary">
          The proposed workflow
        </p>
        <h2 className="story-heading">
          From demonstration
          <br />
          to training data.
        </h2>
        <ol className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {roboticsWorkflow.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-copy-secondary">
                  Step {index + 1}
                </span>
                {index < 3 && <ArrowRight size={20} aria-hidden="true" />}
              </div>
              <h3 className="text-2xl font-medium">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-copy-secondary">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-3xl border-t border-border pt-6 text-sm leading-relaxed text-copy-secondary">
          This is the intended development workflow. Dataset quality,
          synchronisation and transfer to robotic systems need to be
          demonstrated and tested.
        </p>
      </section>
      <section className="grid gap-8 px-6 py-20 md:px-12 lg:grid-cols-2 lg:px-20">
        <h2 className="text-3xl font-medium">
          Development with
          <br />
          the worker in mind.
        </h2>
        <p className="max-w-xl leading-relaxed text-copy-secondary">
          TENS, heating and vibration require appropriate safety controls and
          validation, particularly around heavy machinery. Operating conditions
          and supported features will be defined through testing. The concept
          does not establish pain-treatment outcomes or validated safety
          protection.
        </p>
      </section>
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid gap-10 rounded-3xl bg-sage p-8 md:p-14 lg:grid-cols-2 lg:items-end">
          <h2 className="story-heading">
            Help shape
            <br />
            KNK Robotics.
          </h2>
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
              Interested in industrial wearables, human demonstrations or
              robotic learning? Join the TekGlove waitlist for development
              updates.
            </p>
            <ButtonLink href="/waitlist" className="mt-8">
              Register your interest
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
