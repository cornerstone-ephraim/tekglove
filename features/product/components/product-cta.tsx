import { ButtonLink } from "@/shared/components/ui/button";
import type { ProductDetailConfig } from "../product-detail-types";

export function ProductCta({ config }: { config: ProductDetailConfig }) {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20">
      <div className="grid gap-10 rounded-3xl bg-sage p-8 md:p-14 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-6 text-sm text-copy-secondary">
            {config.cta.kicker}
          </p>
          <h2 className="story-heading">
            {config.cta.title}
            <br />
            {config.cta.titleAccent}
          </h2>
        </div>
        <div>
          <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
            {config.cta.description}
          </p>
          <ButtonLink href="/waitlist" className="mt-8">
            Join the Waitlist
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
