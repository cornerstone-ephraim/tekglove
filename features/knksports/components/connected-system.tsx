export function ConnectedSystem() {
  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-375">
        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            <p className="section-kicker mb-5">The Connected System</p>
            <h2 className="display-title text-5xl text-white md:text-7xl">
              The module.
              <br />
              <span className="text-orange">The TEK App.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-xl text-lg leading-relaxed">
            KNK Sports connects physical gear with a digital experience. The KNK
            Module brings sensing to the system, while the TEK App is where you
            manage devices and explore your health and training information.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="surface-panel p-7 md:p-10">
            <h3 className="font-brand text-4xl font-bold text-white">
              KNK Module
            </h3>
            <p className="copy-secondary mt-5 text-base leading-relaxed">
              A portable AI health and performance sensor designed to bring
              sensing, processing and connectivity together. The concept
              includes a display and removable mounting options for a glove,
              wrist strap or keyring, so the device can fit different parts of
              your day.
            </p>
            <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/80">
              <li>Health, movement and activity sensing</li>
              <li>Display, processing and wireless connectivity</li>
              <li>Removable mounting options</li>
              <li>Proposed integrated audio and AI assistance</li>
            </ul>
            <p className="copy-secondary mt-6 text-sm leading-relaxed">
              Available measurements depend on sensor contact and how the module
              is worn. Final capabilities are in development.
            </p>
          </article>
          <article className="surface-panel p-7 md:p-10">
            <h3 className="font-brand text-4xl font-bold text-white">
              The TEK App
            </h3>
            <p className="copy-secondary mt-5 text-base leading-relaxed">
              The companion app brings device controls and recorded information
              into one place. It is designed to help you review activity,
              understand training trends and access guidance through the
              connected system.
            </p>
            <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/80">
              <li>Connected-device management and settings</li>
              <li>Health and activity records</li>
              <li>Training insights and coaching</li>
              <li>AI-assisted guidance and progress review</li>
            </ul>
            <p className="copy-secondary mt-6 text-sm leading-relaxed">
              The app experience and supported features will develop alongside
              the hardware.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
