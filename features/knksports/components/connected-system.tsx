import Image from "next/image";
import { ArrowRight, Settings2, Activity, TrendingUp } from "lucide-react";

export function ConnectedSystem() {
  return (
    <section className="curve-section bg-sage px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
        <h2 className="story-heading">
          The glove. The sensor.
          <br />
          The TEK App.
        </h2>
        <p className="max-w-lg text-lg leading-relaxed text-copy-secondary">
          TEK Glove provides the breathable, flexible sports glove. Kradle is
          the removable health, fitness and wellness sensor that fits into its
          dorsal dock. The TEK App connects that information with Edwin AI for
          coaching, training insights and recovery guidance.
        </p>
      </div>
      <div className="grid overflow-hidden rounded-3xl bg-paper lg:grid-cols-2">
        <figure className="relative min-h-100 lg:min-h-120">
          <Image
            src="/images/redesign/tekglove-kradle.webp"
            alt="TekGlove hardware used for Kradle, worn on the hand"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-right"
          />
          <figcaption className="absolute bottom-6 left-6 rounded-full bg-paper/95 px-4 py-2 text-sm">
            TEK Glove + Kradle sensor
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-sm text-copy-secondary">
            The TEK App · In development
          </p>
          <h3 className="mt-5 text-3xl font-medium md:text-4xl">
            Your activity,
            <br />
            with more context.
          </h3>
          <div className="mt-8 space-y-6">
            {[
              {
                icon: Settings2,
                title: "Manage your device",
                text: "Device controls and settings in one place.",
              },
              {
                icon: Activity,
                title: "Review your activity",
                text: "Explore recorded health and activity information.",
              },
              {
                icon: TrendingUp,
                title: "Follow your progress",
                text: "Training trends and AI-assisted guidance to support reflection over time.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon size={22} className="mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium">{title}</h4>
                  <p className="mt-1 leading-relaxed text-copy-secondary">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-copy-secondary">
            Experience overview. Final app screens and supported capabilities
            are still in development.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {[
          [
            "On the glove",
            "A secure, low-profile dorsal dock keeps the sensor on the back of the hand.",
          ],
          ["On a watch strap", "A daily-wear option for the removable module."],
          ["On a keyring", "Carry the module with you between activities."],
        ].map(([title, text]) => (
          <div key={title}>
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="mt-3 leading-relaxed text-copy-secondary">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-copy-secondary">
        Kradle’s concept combines health and fitness sensing, wellness insights,
        Bluetooth stethoscope functionality, AI assistance and embedded earbuds.
        Supported measurements depend on sensor contact and placement; a keyring
        mount does not provide the same measurements as wearing the sensor.
      </p>
      <div className="mt-12 border-t border-primary/20 pt-10">
        <p className="text-sm text-copy-secondary">Edwin AI · In development</p>
        <h3 className="mt-4 text-3xl font-medium md:text-4xl">
          Understand your training.
          <br />
          Plan what comes next.
        </h3>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-xl font-medium">Personal coaching</h4>
            <p className="mt-3 leading-relaxed text-copy-secondary">
              Edwin is being designed to turn supported sensor data and your
              activity context into practical training guidance.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium">Performance insights</h4>
            <p className="mt-3 leading-relaxed text-copy-secondary">
              AI-assisted interpretation can help you explore patterns in
              activity and training load, and follow progress over time.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium">Recovery and wellness</h4>
            <p className="mt-3 leading-relaxed text-copy-secondary">
              Bring sleep, recovery and readiness information into the
              conversation, with guidance shaped around your routine.
            </p>
          </div>
        </div>
      </div>
      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {[
          ["Wear", "Start with the glove and a setup suited to your activity."],
          [
            "Record",
            "Capture supported activity information through the connected system.",
          ],
          [
            "Review",
            "Return to the TEK App to explore your session and progress.",
          ],
        ].map(([title, description], index) => (
          <li key={title} className="border-t border-primary/20 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium">{title}</h3>
              {index < 2 && (
                <ArrowRight
                  size={20}
                  aria-hidden="true"
                  className="hidden md:block"
                />
              )}
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-copy-secondary">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
