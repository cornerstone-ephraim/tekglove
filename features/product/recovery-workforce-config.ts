import { Activity, Factory } from "lucide-react";
import type { ProductDetailConfig } from "./product-detail-types";

export const kaptureConfig = {
  name: "Kapture",
  accentColor: "kapture",
  accentSource: "#8b5cf6",
  mark: "KAPTURE™",
  eyebrow: "KAPTURE™ · Recovery & Rehabilitation",
  title: "Measurable",
  titleAccent: "Recovery",
  subtitle: "Recovery you can measure.",
  introduction:
    "An intelligent rehabilitation wearable designed to support hand recovery, rebuild function, and turn every movement into measurable progress. Therapeutic stimulation, responsive sensors, and AI-powered insights bring rehabilitation directly to the hand.",
  shader: "sensor",
  signalLabel: "Smart Dorsal Sensor",
  signalValue: "Sense · Stimulate · Strengthen · Recover",
  heroVisual: { icon: Activity },
  specifications: [
    { label: "Purpose", value: "Hand recovery and rehabilitation" },
    { label: "Core Technology", value: "Smart Dorsal Sensor" },
    { label: "Stimulation", value: "EMS and TENS therapy" },
    { label: "Therapeutic Feedback", value: "Heat and vibration" },
    {
      label: "Sensing",
      value: "Grip strength · Movement · Rehabilitation activity",
    },
    { label: "Insights", value: "Recovery trends and progress analytics" },
    { label: "Guidance", value: "AI recovery coaching" },
    { label: "Development", value: "In development" },
  ],
  showcases: [],
  intelligence: {
    kicker: "Therapy Meets Technology",
    title: "One Glove.",
    titleAccent: "Multiple Recovery Tools.",
    description:
      "KAPTURE combines therapeutic stimulation with sensors that monitor grip strength, movement, and rehabilitation activity, creating a clearer picture of how hand function changes over time.",
    capabilities: [
      {
        title: "EMS & TENS Therapy",
        description:
          "Targeted electrical stimulation designed to support muscle activation and pain-management programmes.",
      },
      {
        title: "Heat & Vibration Therapy",
        description:
          "Integrated therapeutic feedback designed to support comfort, relaxation, and recovery.",
      },
      {
        title: "Grip-Strength Monitoring",
        description:
          "Measure grip performance and track changes throughout the rehabilitation journey.",
      },
      {
        title: "Muscle Recovery Analytics",
        description:
          "Transform rehabilitation activity into useful data, trends, and progress insights.",
      },
      {
        title: "Smart Dorsal Sensor Connectivity",
        description:
          "Connect with the KAPTURE Smart Dorsal Sensor to coordinate sensing, therapy, and real-time feedback across the hand.",
      },
      {
        title: "AI Recovery Coaching",
        description:
          "Personalised guidance helps users follow rehabilitation exercises, understand their progress, and stay engaged with their recovery programme.",
      },
    ],
  },
  useCases: {
    kicker: "Different Paths to Recovery",
    title: "Guided Recovery.",
    titleAccent: "Measurable Progress.",
    items: [
      "Stroke Rehabilitation",
      "Hand Injury Recovery",
      "Arthritis Support",
      "Sports Therapy",
      "Occupational Therapy",
      "Post-Surgery Rehabilitation",
    ],
  },
  cta: {
    kicker: "KAPTURE Early Access",
    title: "Help Shape",
    titleAccent: "Hand Recovery.",
    description:
      "Join the TekGlove early access list for KAPTURE development updates, collaboration opportunities, and future availability.",
  },
} satisfies ProductDetailConfig;

export const konnectConfig = {
  name: "Konnect",
  accentColor: "konnect",
  accentSource: "#14b8a6",
  mark: "KONNECT™",
  eyebrow: "KONNECT™ · Productivity & Workforce",
  title: "Your Workforce.",
  titleAccent: "Connected.",
  subtitle: "Intelligence at your fingertips.",
  introduction:
    "An intelligent industrial wearable designed to connect workers, equipment, and operational data directly at the point of work. Hands-free communication, gesture controls, and real-time digital guidance support teams throughout the working day.",
  shader: "intelligence",
  signalLabel: "Smart Dorsal Sensor",
  signalValue: "Connect · Guide · Communicate · Perform",
  heroVisual: { icon: Factory },
  specifications: [
    { label: "Purpose", value: "Connected industrial workflows" },
    { label: "Core Technology", value: "Smart Dorsal Sensor" },
    { label: "Guidance", value: "Digital work instructions and training" },
    { label: "Asset Interaction", value: "Barcode and RFID" },
    { label: "Controls", value: "Gesture-based interaction" },
    {
      label: "Communication",
      value: "Hands-free voice and team communication",
    },
    { label: "Insights", value: "Productivity and digital twin analytics" },
    { label: "Development", value: "In development" },
  ],
  showcases: [],
  intelligence: {
    kicker: "Intelligence at the Point of Work",
    title: "One Wearable.",
    titleAccent: "A Smarter Workflow.",
    description:
      "KONNECT gives workers access to information and controls without constantly reaching for a phone, tablet, or workstation. Follow instructions, identify equipment, and communicate through a connected wearable interface.",
    capabilities: [
      {
        title: "Digital Work Instructions & Training",
        description:
          "Deliver step-by-step procedures, training content, and task guidance directly to workers during operations.",
      },
      {
        title: "Barcode & RFID Interaction",
        description:
          "Identify tools, components, inventory, and equipment while connecting physical assets to their digital records.",
      },
      {
        title: "Gesture-Based Controls",
        description:
          "Use intuitive hand movements to navigate interfaces, confirm actions, and interact with connected systems.",
      },
      {
        title: "Worker Safety Alerts",
        description:
          "Receive real-time warnings and notifications designed to improve situational awareness in industrial environments.",
      },
      {
        title: "Hands-Free Communication",
        description:
          "Keep teams connected through voice and wearable communication without interrupting the task at hand.",
      },
      {
        title: "Productivity & Digital Twin Analytics",
        description:
          "Capture workflow and operational data to understand productivity, identify bottlenecks, and connect worker activity with digital twin environments.",
      },
    ],
  },
  useCases: {
    kicker: "Built for the Connected Workforce",
    title: "Fewer Errors.",
    titleAccent: "Safer Teams. Better Visibility.",
    items: [
      "Manufacturing Plants",
      "Warehouses",
      "Construction Sites",
      "Distribution Centres",
      "Oil and Gas Facilities",
      "Industrial Maintenance",
    ],
  },
  cta: {
    kicker: "KONNECT Early Access",
    title: "Help Shape",
    titleAccent: "Connected Work.",
    description:
      "Join the TekGlove early access list for KONNECT development updates, industrial partnerships, and future availability.",
  },
} satisfies ProductDetailConfig;
