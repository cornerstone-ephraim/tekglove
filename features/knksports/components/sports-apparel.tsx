import { knkApparel } from "@/content/knksports";

export function SportsApparel() {
  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-375">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-kicker mb-5">Apparel and Gear</p>
            <h2 className="display-title text-5xl text-white md:text-7xl">
              Starting with gloves.
              <br />
              <span className="text-orange">Thinking beyond them.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-xl text-lg leading-relaxed">
            The Kinetix glove is the starting point for KNK Sports. Our broader
            direction spans apparel and equipment for different sports, shaped
            around how athletes move, train and prepare.
          </p>
        </div>
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {knkApparel.map((item) => (
            <article key={item.name} className="border-t border-white/15 py-8">
              <h3 className="font-brand text-4xl font-bold text-white">
                {item.name}
              </h3>
              <p className="copy-secondary mt-4 max-w-md text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <p className="copy-secondary mt-6 max-w-3xl text-sm leading-relaxed">
          These categories describe the direction of the range. Product details,
          availability and connected features will be announced individually.
        </p>
      </div>
    </section>
  );
}
