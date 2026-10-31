const sensorFeatures = [
  "Heart rate (PPG)",
  "Blood oxygen (SpO₂)",
  "Skin temperature",
  "Respiration rate",
  "Motion and activity",
  "Multi-spectral sensors",
];

export function KradleSensor() {
  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-375">
        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-kicker mb-5">Kradle Sensor Module</p>
            <h2 className="display-title text-5xl text-white md:text-7xl">
              Removable.
              <br />
              <span className="text-orange">Connected.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-xl text-lg leading-relaxed">
            The Kradle sensor concept adds health, vital-sign and activity
            sensing to the modular system. A removable, swappable design and
            wireless connectivity allow it to be used with different attachment
            options.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-t border-white/15 pt-7">
            <h3 className="font-brand text-3xl font-bold text-white">
              Sensing in development
            </h3>
            <ul className="copy-secondary mt-6 grid gap-4 text-sm sm:grid-cols-2">
              {sensorFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="copy-secondary mt-6 text-sm leading-relaxed">
              These are proposed sensing capabilities, not confirmed medical
              measurements or diagnostic functions. The wider concept also
              includes estimated blood pressure and fetal heart-rate sensing
              with a separate Kradle strap.
            </p>
          </div>
          <div className="border-t border-white/15 pt-7">
            <h3 className="font-brand text-3xl font-bold text-white">
              Beyond the glove
            </h3>
            <p className="copy-secondary mt-6 text-base leading-relaxed">
              The attachment concepts include a quick-release glove mount, a
              silicone keychain with a carabiner clip, and a tactical watch
              strap. The strap concept supports standard 22 mm and 24 mm watch
              straps.
            </p>
            <p className="copy-secondary mt-5 text-base leading-relaxed">
              For KNK Sports, the focus is activity and recovery. The wider
              sensor concept also explores general health and maternal
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
