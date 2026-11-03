import { knkModes } from "@/content/knksports";

export function ActivityModes() {
  return (
    <section className="border-b border-primary/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-375">
        <p className="section-kicker mb-5">KNK Sports Modes</p>
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="display-title text-5xl text-primary md:text-7xl">
            One platform.
            <br />
            <span className="text-orange">Different modes.</span>
          </h2>
          <p className="copy-secondary max-w-xl text-lg leading-relaxed">
            These six modes describe the activity-specific direction of KNK
            Sports. They sit alongside the athlete activities and guide how the
            connected experience can serve different settings.
          </p>
        </div>
        <p className="copy-secondary mb-8 max-w-3xl text-sm leading-relaxed">
          The capabilities below describe the current design direction for each
          mode. Final specifications and availability will be shared as
          development progresses.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {knkModes.map((mode) => (
            <article key={mode.name} className="surface-panel p-7 md:p-8">
              <p className="mb-3 text-sm text-orange">{mode.focus}</p>
              <h3 className="font-brand text-3xl font-bold text-primary">
                {mode.name}
              </h3>
              <ul className="copy-secondary mt-6 space-y-3 text-sm leading-relaxed">
                {mode.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
