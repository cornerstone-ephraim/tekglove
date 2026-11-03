import { ButtonLink } from "@/shared/components/ui/button";
import {
  productDetailConfigs,
  type PublishedProductName,
  type ProductDetailConfig,
} from "./product-detail-config";
import { ProductVisual } from "./product-visual";
import { ProductCta } from "./components/product-cta";
import { ProductSpecifications } from "./components/product-specifications";
import { ProductFaq } from "./components/product-faq";
import { ProductOverview } from "./components/product-overview";
import { KovertCommandArchitecture } from "./components/kovert-command-architecture";

export default function ProductPage({
  productName,
}: {
  productName: PublishedProductName;
}) {
  const config: ProductDetailConfig = productDetailConfigs[productName];
  return (
    <div className="bg-bg pt-36">
      <header className="px-6 md:px-12 lg:px-20">
        <p className="mb-7 text-sm text-copy-secondary">{config.eyebrow}</p>
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <h1 className="text-6xl leading-none font-medium tracking-tight md:text-8xl lg:text-9xl">
            {config.name}
          </h1>
          <p className="max-w-xl text-2xl leading-snug md:text-3xl">
            {config.subtitle}
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border py-6">
          <span className="text-sm text-copy-secondary">
            {config.signalLabel}
          </span>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/waitlist" size="sm">
              Get Early Access
            </ButtonLink>
            <ButtonLink
              href="#specifications"
              size="sm"
              variant="secondary"
              arrow="none"
            >
              Explore the details
            </ButtonLink>
          </div>
        </div>
      </header>
      <div className="px-3 md:px-6">
        <div className="flex justify-center overflow-hidden rounded-3xl bg-surface [&>.product-film]:max-w-none [&>.product-film]:rounded-none [&>.product-film]:border-0 md:[&>.product-film]:aspect-16/7 [&>figure]:max-w-none [&>figure]:rounded-none [&>figure]:border-0 [&>figure]:shadow-none md:[&>figure]:aspect-16/7">
          <ProductVisual
            {...config.heroVisual}
            priority
            imageClassName="max-w-200"
          />
        </div>
      </div>
      <section className="grid gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:px-20">
        <h2 className="story-heading">
          {config.intelligence.title}
          <br />
          {config.intelligence.titleAccent}
        </h2>
        <div>
          <p className="max-w-xl text-xl leading-relaxed text-copy-secondary">
            {config.introduction}
          </p>
          {config.intelligence.description !== config.introduction && (
            <p className="mt-6 max-w-xl leading-relaxed text-copy-secondary">
              {config.intelligence.description}
            </p>
          )}
        </div>
      </section>
      <section className="curve-section bg-sage px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-6 text-sm text-copy-secondary">
              {config.intelligence.kicker}
            </p>
            <h2 className="story-heading">
              Designed for
              <br />a clear purpose.
            </h2>
          </div>
          <div>
            {config.intelligence.capabilities.map((item) => (
              <article
                key={item.title}
                className="border-t border-primary/20 py-7 first:border-0 first:pt-0"
              >
                <h3 className="text-3xl font-medium">{item.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-copy-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {config.overview && <ProductOverview overview={config.overview} />}
      {config.commandArchitecture && <KovertCommandArchitecture />}
      {config.showcases.length > 0 && (
        <section className="space-y-16 px-6 py-20 md:px-12 lg:px-20">
          {config.showcases.map((item) => (
            <article
              key={item.title}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <ProductVisual {...item} />
              <div>
                <p className="mb-5 text-sm text-copy-secondary">
                  {item.kicker}
                </p>
                <h2 className="text-4xl font-medium tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-copy-secondary">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
      <section className="grid gap-10 border-b border-border px-6 py-20 md:px-12 lg:grid-cols-2 lg:px-20">
        <div>
          <p className="mb-6 text-sm text-copy-secondary">
            {config.useCases.kicker}
          </p>
          <h2 className="story-heading">
            {config.useCases.title}
            <br />
            {config.useCases.titleAccent}
          </h2>
        </div>
        <ul className="self-center">
          {config.useCases.items.map((item) => (
            <li
              key={item}
              className="border-t border-border py-4 text-2xl font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
      <ProductSpecifications specifications={config.specifications} />
      <ProductFaq productName={productName} />
      <ProductCta config={config} />
    </div>
  );
}
