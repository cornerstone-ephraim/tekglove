import { Hero } from "./components/hero";
import { PlatformStory } from "./components/platform-story";
import { MotionDemo } from "./components/motion-demo";
export default function HomePage() {
  return (
    <div className="bg-bg">
      <Hero />
      <MotionDemo />
      <PlatformStory />
    </div>
  );
}
