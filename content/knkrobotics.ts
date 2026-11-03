export const roboticsCapabilities = [
  {
    title: "Smart Dorsal Sensor",
    description:
      "The central sensing and processing module, mounted on the back of the hand.",
  },
  {
    title: "Hand-data capture",
    description:
      "Movement and gestures, with additional finger and grip sensors proposed for pressure and finger-position data.",
  },
  {
    title: "Haptic vibration",
    description:
      "Task feedback and proposed safety alerts through tactile signals.",
  },
  {
    title: "Adjustable heating",
    description:
      "Controlled warmth for cold working environments, subject to safety testing.",
  },
  {
    title: "Optional TENS",
    description:
      "Electrical stimulation proposed for appropriate pain-management applications. Suitability, controls and operating conditions require validation.",
  },
  {
    title: "Robotic learning",
    description:
      "Demonstration datasets intended for AI training and robotic imitation learning. The capture-to-training workflow remains to be demonstrated.",
  },
] as const;

export const roboticsApplications = [
  {
    title: "Construction",
    description:
      "Tool handling, assembly movements and skilled manual operations, captured as demonstrations for future construction robotics.",
    examples: "Tool handling · Assembly · Manual operations",
  },
  {
    title: "Logistics",
    description:
      "Picking, packing, sorting and grasping demonstrations for warehouse automation and robotic manipulation.",
    examples: "Picking · Packing · Sorting",
  },
  {
    title: "Manufacturing",
    description:
      "Precision assembly, tool use and repetitive tasks as a source of demonstrations for industrial robotic learning.",
    examples: "Assembly · Tool use · Repetitive tasks",
  },
] as const;

export const roboticsWorkflow = [
  {
    title: "Human worker",
    description:
      "Performs real-world industrial tasks using their existing skills.",
  },
  {
    title: "TekGlove sensing",
    description:
      "Captures hand movement and connected finger and grip sensor data.",
  },
  {
    title: "KNK Robotics data platform",
    description:
      "The proposed platform synchronises, labels and processes demonstrations.",
  },
  {
    title: "Robotic learning",
    description:
      "Prepared demonstrations become training inputs for robotic arms, humanoids and automation systems.",
  },
] as const;
