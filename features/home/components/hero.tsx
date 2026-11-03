import styles from "./hero.module.css";
import { ArrowDown } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/shared/components/ui/button";
import { ProductFilm } from "@/shared/components/ui/product-film";

export function Hero() {
  return (
    <section
      className={`${styles.hero} new-hero relative overflow-hidden bg-bg`}
    >
      <ProductFilm
        src="/videos/tekglove-hero-video.webm"
        portraitSrc="/videos/tekglove-hero-video-portrait.webm"
        portraitPoster="/images/redesign/kradle-portrait.png"
        poster="/images/redesign/tekglove-hero-picture.jpeg"
        label="TekGlove concept film"
        className={`${styles.film} hero-film`}
      />
      <div
        className={`${styles.copy} hero-copy relative z-10 px-6 md:px-12 lg:px-20`}
      >
        <p className="mb-7 text-sm font-medium">Introducing Tek Glove</p>
        <h1 className="max-w-2xl text-6xl leading-none font-medium tracking-tight md:text-7xl lg:text-8xl">
          The Smart
          <br />
          Glove,
          <br />
          <span className="text-copy-secondary">Reinvented.</span>
        </h1>
        <p className="mt-8 max-w-88 text-base leading-relaxed text-copy-secondary">
          {site.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <ButtonLink href="/waitlist">Get Early Access</ButtonLink>
          <a href="#explore" className="inline-flex items-center gap-2 text-sm">
            Explore Products <ArrowDown size={16} />
          </a>
        </div>
      </div>
      <div
        className={`${styles.caption} hero-caption pointer-events-none relative z-10 flex justify-between px-6 pt-12 pb-8 text-xs text-copy-secondary md:px-12 lg:px-20`}
      >
        <span>The hand is the starting point.</span>
        {/* <span>Concept film · In development</span> */}
      </div>
    </section>
  );
}
