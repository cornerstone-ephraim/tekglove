export function ConnectedSystem() {
  return (
    <>
      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-375">
          <p className="section-kicker mb-5">The Two-Hand Concept</p>
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="display-title text-5xl text-white md:text-7xl">
              Two hands.
              <br />
              <span className="text-orange">Working together.</span>
            </h2>
            <p className="copy-secondary max-w-xl text-lg leading-relaxed">
              The proposed system pairs a left-hand TEK module with a right-hand
              Echo glove. Together, they bring information, interaction and
              feedback to the hands.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="surface-panel p-7 md:p-10">
              <p className="section-kicker mb-4">Left Hand</p>
              <h3 className="font-brand text-4xl font-bold text-white">
                The TEK module
              </h3>
              <p className="copy-secondary mt-5 text-base leading-relaxed">
                A removable module mounted on the back of the glove brings the
                display, processor, connectivity and haptic feedback together.
                It is the proposed interface for viewing information and
                connecting with the wider system.
              </p>
              <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/80">
                <li>Display and processing on the back of the hand</li>
                <li>Connectivity and haptic feedback</li>
                <li>Removable module with a low-profile mount</li>
              </ul>
            </article>
            <article className="surface-panel p-7 md:p-10">
              <p className="section-kicker mb-4">Right Hand</p>
              <h3 className="font-brand text-4xl font-bold text-white">
                The Echo glove
              </h3>
              <p className="copy-secondary mt-5 text-base leading-relaxed">
                The companion glove is designed around gesture control, sensors
                and communication. The concept places a microphone at the little
                finger and an earbud at the thumb, alongside haptic feedback.
              </p>
              <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/80">
                <li>Gesture control and sensing</li>
                <li>Haptic feedback and communication</li>
                <li>Little-finger microphone and thumb earbud concept</li>
              </ul>
            </article>
          </div>
          <p className="copy-secondary mt-6 max-w-3xl text-sm leading-relaxed">
            This is the current design direction. The final features and
            configuration for each sport are still being developed.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-375 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-kicker mb-5">Edwin AI Coach</p>
            <h2 className="display-title text-5xl text-white md:text-7xl">
              From movement
              <br />
              <span className="text-orange">to understanding.</span>
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="copy-secondary max-w-xl text-lg leading-relaxed">
              Edwin is the AI coaching layer envisioned for the TekGlove
              ecosystem. For KNK Sports, the aim is to turn movement and
              training data into guidance an athlete can understand and use.
            </p>
            <p className="copy-secondary mt-6 max-w-xl text-lg leading-relaxed">
              The glove and sensors capture the signals. Edwin’s proposed role
              is to help interpret them, giving athletes more context for their
              training through the connected experience.
            </p>
            <p className="copy-secondary mt-6 max-w-xl text-base leading-relaxed">
              Coaching features, supported sports and how Edwin connects with
              the glove and companion app will be shared as development
              progresses.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
