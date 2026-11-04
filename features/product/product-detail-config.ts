import {
  Crosshair,
  Hand,
  HeartPulse,
  MousePointer2,
  Shield,
} from "lucide-react";
import type {
  ProductDetailConfig,
  PublishedProductName,
} from "./product-detail-types";
import { kaptureConfig, konnectConfig } from "./recovery-workforce-config";

export type {
  ProductDetailConfig,
  ProductVisual,
  PublishedProductName,
} from "./product-detail-types";

export const productDetailConfigs = {
  Kapture: kaptureConfig,
  Konnect: konnectConfig,
  Kinetik: {
    name: "Kinetik",
    accentColor: "kinetik",
    accentSource: "#60a922",
    mark: "KINETIK\u2122",
    eyebrow: "Robotics \u00b7 Kinetik",
    title: "Kinetik",
    titleAccent: "",
    subtitle: "Motion. Grip. Gesture.",
    introduction:
      "Kinetik is the robotics direction of TekGlove, exploring how hand movement, grip and deliberate gestures can inform interaction with machines.",
    shader: "sensor",
    signalLabel: "In development",
    signalValue: "Motion. Grip. Gesture.",
    heroVisual: {
      image: "/images/redesign/kinetik-right-hand.png",
      video: "/videos/kinetik-right-hand.webm",
      imageAlt: "Kinetik glove with mesh fabric and a dorsal display",
      presentation: "editorial",
      icon: Crosshair,
    },
    specifications: [
      {
        label: "Direction",
        value: "Robotics",
      },
      {
        label: "Focus",
        value: "Motion. Grip. Gesture.",
      },
      {
        label: "Status",
        value: "In development",
      },
      {
        label: "Connected experience",
        value: "The TEK App",
      },
    ],
    showcases: [],
    intelligence: {
      kicker: "The direction",
      title: "Designed around",
      titleAccent: "human activity.",
      description:
        "Kinetik is the robotics direction of TekGlove, exploring how hand movement, grip and deliberate gestures can inform interaction with machines.",
      capabilities: [
        {
          title: "Motion capture",
          description: "Explore hand movement and orientation.",
        },
        {
          title: "Grip sensing",
          description: "Understand contact and grip as inputs.",
        },
        {
          title: "Gesture input",
          description: "Translate intentional hand poses into interaction.",
        },
        {
          title: "Human\u2013machine interaction",
          description: "Connect physical actions with digital systems.",
        },
      ],
    },
    useCases: {
      kicker: "Applications in development",
      title: "Made for",
      titleAccent: "what comes next.",
      items: [
        "Motion capture",
        "Grip sensing",
        "Gesture input",
        "Human\u2013machine interaction",
      ],
    },
    cta: {
      kicker: "Kinetik early access",
      title: "Help shape",
      titleAccent: "Kinetik.",
      description:
        "Join the waitlist for development updates and early access opportunities.",
    },
  },
  Kradle: {
    name: "Kradle",
    accentColor: "kradle",
    accentSource: "#786090",
    mark: "KRADLE\u2122",
    eyebrow: "Sports \u00b7 Kradle",
    title: "Kradle",
    titleAccent: "",
    subtitle: "Health. Fitness. Wellness.",
    introduction:
      "Kradle is a modular health, fitness and wellness sensor. Dock it on the TEK Glove for sport, wear it on a watch strap for daily use, or carry it on a keyring.",
    shader: "sensor",
    signalLabel: "In development",
    signalValue: "Health. Fitness. Wellness.",
    heroVisual: {
      image: "/images/redesign/tekglove-kradle.webp",
      video: "/videos/tekglove-kradle-video.webm",
      portraitVideo: "/videos/tekglove-kradle-video-portrait.webm",
      portraitImage: "/images/redesign/tekglove-kradle-portrait.webp",
      imageAlt: "TEK Glove with a round Kradle sensor in its dorsal dock",
      presentation: "editorial",
      icon: HeartPulse,
    },
    specifications: [
      { label: "System", value: "TEK Glove + removable Kradle sensor" },
      { label: "Mounting", value: "Dorsal dock · Watch strap · Keyring" },
      { label: "Interface", value: "Touch display" },
      { label: "Sensor direction", value: "Heart rate · SpO₂ · HRV" },
      { label: "Audio", value: "Bluetooth stethoscope · Embedded earbuds" },
      {
        label: "Construction",
        value: "Breathable mesh · Grippy palm · Durable sports fabric",
      },
      { label: "Connected experience", value: "The TEK App · AI assistance" },
      {
        label: "Status",
        value:
          "Concept in development; measurements depend on sensor contact and placement",
      },
    ],
    showcases: [],
    intelligence: {
      kicker: "Capabilities in development",
      title: "Designed around",
      titleAccent: "human activity.",
      description:
        "Kradle is a modular health, fitness and wellness sensor. Dock it on the TEK Glove for sport, wear it on a watch strap for daily use, or carry it on a keyring.",
      capabilities: [
        {
          title: "Health monitoring",
          description:
            "Proposed heart-rate, blood-oxygen and heart-rate-variability sensing, with stress insights.",
        },
        {
          title: "Bluetooth stethoscope",
          description:
            "A sound-capture concept for heart, lung and body sounds.",
        },
        {
          title: "Fitness tracking",
          description:
            "Activity, training load, calorie estimates and performance context.",
        },
        {
          title: "AI assistance",
          description:
            "Coaching, insights and recovery guidance through the connected experience.",
        },
        {
          title: "Wellness",
          description:
            "Sleep, recovery and readiness insights to help put activity in context.",
        },
        {
          title: "Embedded earbuds",
          description:
            "Audio, calls and coaching, with earbuds housed inside the module.",
        },
      ],
    },
    useCases: {
      kicker: "Applications in development",
      title: "Made for",
      titleAccent: "what comes next.",
      items: [
        "Running",
        "Cycling",
        "Boxing",
        "Golf",
        "Hiking",
        "Everyday wellness",
      ],
    },
    cta: {
      kicker: "Kradle early access",
      title: "Help shape",
      titleAccent: "Kradle.",
      description:
        "Join the waitlist for development updates and early access opportunities.",
    },
  },
  Kovert: {
    name: "Kovert",
    accentColor: "kovert",
    accentSource: "#b6a36a",
    mark: "KOVERT™",
    eyebrow: "KOVERT™ · Tactical Intelligence",
    title: "Mission",
    titleAccent: "Control",
    subtitle: "Mission Ready. Hands Connected.",
    introduction:
      "The tactical intelligence expression of the TekGlove platform, transforming the back of the hand into a connected command centre for live monitoring, recording, telemetry, and remote device control.",
    shader: "intelligence",
    signalLabel: "Smart Dorsal Sensor",
    signalValue: "Video · Audio · Telemetry · Control",
    heroVisual: { icon: Shield },
    commandArchitecture: true,
    specifications: [
      {
        label: "Purpose",
        value: "Tactical command and mission monitoring",
      },
      { label: "Core Technology", value: "Removable Smart Dorsal Sensor" },
      {
        label: "Display",
        value: "Rugged high-brightness touchscreen concept",
      },
      {
        label: "Visual Network",
        value: "Drone · Floor robot · Smart glasses · 360° body camera",
      },
      { label: "Connectivity", value: "Wi-Fi · Bluetooth" },
      {
        label: "Telemetry",
        value: "GPS · Galileo · GLONASS · BeiDou",
      },
      {
        label: "Audio & Storage",
        value: "Microphone · Speaker · Internal storage",
      },
      {
        label: "Glove Platform",
        value: "Weather-resistant · Quick-release sensor dock",
      },
    ],
    showcases: [],
    intelligence: {
      kicker: "Core Mission Functions",
      title: "One Interface.",
      titleAccent: "Complete Awareness.",
      description:
        "KOVERT brings live feeds, synchronized recording, professional audio, and positioning data into a single hand-worn command surface.",
      capabilities: [
        {
          title: "Live Video Command",
          description:
            "Monitor single, dual, quad, picture-in-picture, and 360-degree camera views from the dorsal display.",
        },
        {
          title: "Multi-Camera Control",
          description:
            "Switch feeds, trigger synchronized recording, capture images, and review device and signal status.",
        },
        {
          title: "Professional Audio",
          description:
            "Record mission audio, interviews, evidence, and voice notes through the integrated microphone system.",
        },
        {
          title: "GPS Telemetry",
          description:
            "Track position, direction, altitude, route history, waypoints, speed, and distance travelled.",
        },
      ],
    },
    useCases: {
      kicker: "Operational Applications",
      title: "Built for",
      titleAccent: "The Field.",
      items: [
        "Military Operations",
        "Law Enforcement",
        "Private Security",
        "Search and Rescue",
        "Disaster Response",
        "Emergency Services",
      ],
    },
    cta: {
      kicker: "KOVERT Early Access",
      title: "Shape the",
      titleAccent: "Connected Mission.",
      description:
        "Join the TekGlove early access list for KOVERT development updates, operational partnerships, testing opportunities, and future availability.",
    },
  },
  Kursor: {
    name: "Kursor",
    accentColor: "kursor",
    accentSource: "#0f52c9",
    mark: "KURSOR™",
    eyebrow: "KURSOR™ · Human Interaction",
    title: "Natural",
    titleAccent: "Control",
    subtitle: "Your Hand Becomes the Interface.",
    introduction:
      "The human-computer interaction expression of the TekGlove platform, combining the Smart Dorsal Sensor with a wearable mouse module for intuitive digital control.",
    shader: "intelligence",
    signalLabel: "Smart Dorsal Sensor",
    signalValue: "Movement · Gesture · Position · Intent",
    heroVisual: { icon: MousePointer2 },
    specifications: [
      { label: "Purpose", value: "Human-computer interaction" },
      { label: "Core Technology", value: "Smart Dorsal Sensor" },
      { label: "Specialist Module", value: "Wearable mouse" },
      { label: "Input", value: "Cursor · Click · Scroll · Gesture" },
      { label: "Precision", value: "Adjustable optical sensing concept" },
      { label: "Feedback", value: "Haptic response" },
      { label: "Connectivity", value: "PC · Tablet · Smart TV" },
      { label: "Pairing", value: "Multiple connected devices" },
    ],
    showcases: [
      {
        icon: Hand,
        kicker: "Left Hand · Shared Interface",
        title: "Smart Interface Glove",
        description:
          "The Smart Dorsal Sensor interprets movement, gesture, position, and intent while providing haptic feedback and connected device control.",
      },
      {
        icon: MousePointer2,
        kicker: "Right Hand · Specialist Module",
        title: "Wearable Mouse Glove",
        description:
          "The specialist mouse module adds optical tracking, clicking, scrolling, precision control, and multi-device pairing for work, creation, and accessibility.",
      },
    ],
    intelligence: {
      kicker: "Hand-First Interaction",
      title: "Movement Becomes",
      titleAccent: "Digital Intent.",
      description:
        "KURSOR interprets pointing, gestures, and commands at the hand, creating a direct connection between what you intend and what a device does.",
      capabilities: [
        {
          title: "Air Mouse",
          description:
            "Translate hand position and movement into accurate cursor control.",
        },
        {
          title: "Gesture Commands",
          description:
            "Use familiar hand actions for selection, navigation, and control.",
        },
        {
          title: "Productivity Shortcuts",
          description:
            "Access presentation, CAD, design, and common workflow controls through mapped gestures.",
        },
        {
          title: "Haptic Response",
          description:
            "Receive tactile confirmation as digital actions are recognised.",
        },
      ],
    },
    useCases: {
      kicker: "Interaction Use Cases",
      title: "Built for the Way",
      titleAccent: "People Create.",
      items: [
        "Office Work",
        "Design",
        "Engineering",
        "Gaming",
        "AR and VR",
        "Accessible Input",
      ],
    },
    cta: {
      kicker: "KURSOR Early Access",
      title: "Experience",
      titleAccent: "Natural Control.",
      description:
        "Join the TekGlove early access list for KURSOR development updates, testing opportunities, and future availability.",
    },
  },
} satisfies Record<PublishedProductName, ProductDetailConfig>;
