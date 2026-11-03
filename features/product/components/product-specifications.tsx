import type { ProductDetailConfig } from "../product-detail-types";
export function ProductSpecifications({
  specifications,
}: Pick<ProductDetailConfig, "specifications">) {
  return (
    <section
      id="specifications"
      className="scroll-mt-28 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-sm text-copy-secondary">A closer look</p>
          <h2 className="story-heading">The details.</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-copy-secondary">
            The current product direction. Specifications and supported features
            may evolve during development.
          </p>
        </div>
        <dl>
          {specifications.map((spec) => (
            <div
              key={spec.label}
              className="grid grid-cols-2 gap-6 border-t border-border py-5"
            >
              <dt className="font-medium">{spec.label}</dt>
              <dd className="leading-relaxed text-copy-secondary">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
