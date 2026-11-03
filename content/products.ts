export type ProductAccent =
  "kradle" | "kinetik" | "kursor" | "kovert" | "kapture" | "konnect";

export type EcosystemProduct = {
  id: string;
  slug: ProductAccent;
  name: string;
  mark: string;
  category: string;
  purpose: string;
  accent: string;
  accentColor: ProductAccent;
  accentSource: `#${string}`;
  accentAnchor: 500 | 600 | 700;
  tagline?: string;
  href: string | null;
  image: string | null;
  focus: "primary" | "ecosystem";
  features: string[];
  users: string[];
  applications: string[];
  value: string;
  architecture: {
    core: "Smart Dorsal Sensor";
    specialistModule: string;
    accessoryIntegrations: string[];
  };
};

const ecosystemProductCatalog = [
  {
    id: "01",
    slug: "kradle",
    name: "Kradle",
    mark: "KRADLE™",
    category: "Health, Fitness & Wellness",
    purpose: "Sports, health, fitness and wellness",
    accent: "Health",
    accentColor: "kradle",
    accentSource: "#d86398",
    accentAnchor: 500,
    href: "/product/kradle",
    image: null,
    focus: "primary",
    features: [
      "Health and activity sensing",
      "Training and wellness context",
      "Connected app records",
    ],
    users: ["Athletes", "Active individuals", "Wellness users"],
    applications: ["Sport", "Fitness", "Everyday wellness"],
    value: "Connecting health, fitness and wellness.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Health and activity module",
      accessoryIntegrations: [
        "Smart display",
        "Mobile app",
        "Wellness insights",
      ],
    },
  },
  {
    id: "02",
    slug: "kinetik",
    name: "Kinetik",
    mark: "KINETIK™",
    category: "Robotics",
    purpose: "Motion, grip and gesture for robotics",
    accent: "Robotics",
    accentColor: "kinetik",
    accentSource: "#60a922",
    accentAnchor: 500,
    href: "/product/kinetik",
    image: null,
    focus: "primary",
    features: ["Motion tracking", "Grip sensing", "Gesture input"],
    users: [
      "Robotics developers",
      "Researchers",
      "Human–machine interaction teams",
    ],
    applications: ["Robotics", "Motion capture", "Gesture interaction"],
    value: "Connecting human movement with machines.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Motion and grip sensing glove",
      accessoryIntegrations: ["Smart display", "Gesture input", "TEK App"],
    },
  },
  {
    id: "04",
    slug: "kursor",
    name: "Kursor",
    mark: "KURSOR™",
    category: "Human–Computer Interaction",
    purpose: "Human-computer interaction",
    accent: "Interaction",
    accentColor: "kursor",
    accentSource: "#0f52c9",
    accentAnchor: 700,
    href: "/product/kursor",
    image: null,
    focus: "primary",
    features: [
      "Air mouse & gesture cursor control",
      "Click & scroll interaction",
      "Presentation, CAD & design navigation",
      "Multi-device pairing",
      "Haptic feedback & productivity shortcuts",
      "Accessible computer control",
    ],
    users: [
      "Office workers",
      "Designers",
      "Engineers",
      "Gamers",
      "VR users",
      "People with accessibility needs",
    ],
    applications: [
      "Desktop navigation",
      "Presentation control",
      "CAD and design workflows",
      "Gaming",
      "AR and VR interaction",
      "Accessible computing",
    ],
    value:
      "Replacing traditional mouse and keyboard interaction with intuitive hand gestures.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Wearable mouse",
      accessoryIntegrations: ["Smart display", "PC", "Tablet", "Smart TV"],
    },
  },
  {
    id: "03",
    slug: "kovert",
    name: "Kovert",
    mark: "KOVERT™",
    category: "Tactical Intelligence",
    purpose: "Defence, security, and field operations",
    accent: "Defence",
    accentColor: "kovert",
    accentSource: "#b6a36a",
    accentAnchor: 500,
    tagline: "Mission Ready. Hands Connected.",
    href: "/product/kovert",
    image: null,
    focus: "primary",
    features: [
      "Live multi-camera video monitoring",
      "Synchronized recording & image capture",
      "Integrated professional audio recording",
      "Multi-system GPS telemetry",
      "Remote camera & device management",
      "Dorsal-mounted tactical command interface",
    ],
    users: [
      "Armed forces",
      "Law enforcement",
      "Private security",
      "Search and rescue",
      "Disaster response",
      "Emergency services",
    ],
    applications: [
      "Reconnaissance operations",
      "Tactical response",
      "Operational surveillance",
      "Search and rescue",
      "Disaster response",
      "Incident monitoring",
    ],
    value:
      "Mission-ready intelligence and control without taking hands off the task.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Removable tactical command and monitoring module",
      accessoryIntegrations: [
        "Drone camera",
        "Floor robot camera",
        "Smart glasses camera",
        "360° body camera",
      ],
    },
  },
  {
    id: "05",
    slug: "kapture",
    name: "Kapture",
    mark: "KAPTURE™",
    category: "Recovery & Rehabilitation",
    purpose: "Physiotherapy, rehabilitation, and sports recovery",
    accent: "Recovery",
    accentColor: "kapture",
    accentSource: "#8b5cf6",
    accentAnchor: 600,
    tagline: "Recovery you can measure.",
    href: "/product/kapture",
    image: null,
    focus: "ecosystem",
    features: [
      "EMS & TENS therapy",
      "Heat & vibration therapy",
      "Grip-strength monitoring",
      "Muscle recovery analytics",
      "Smart Dorsal Sensor connectivity",
      "AI recovery coaching",
    ],
    users: [
      "Stroke rehabilitation",
      "Hand injury recovery",
      "Arthritis support",
      "Sports therapy",
      "Occupational therapy",
      "Post-surgery rehabilitation",
    ],
    applications: [
      "Stroke rehabilitation",
      "Hand injury recovery",
      "Arthritis support",
      "Sports therapy",
      "Occupational therapy",
      "Post-surgery rehabilitation",
    ],
    value:
      "Guided recovery built around measurable hand function and progress.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Recovery and therapy system",
      accessoryIntegrations: ["Smart display", "Mobile app", "AI coaching"],
    },
  },
  {
    id: "06",
    slug: "konnect",
    name: "Konnect",
    mark: "KONNECT™",
    category: "Productivity & Workforce",
    purpose: "Manufacturing, warehousing, and logistics",
    accent: "Industry",
    accentColor: "konnect",
    accentSource: "#14b8a6",
    accentAnchor: 500,
    tagline: "Your workforce. Connected.",
    href: "/product/konnect",
    image: null,
    focus: "ecosystem",
    features: [
      "Digital work instructions & training",
      "Barcode & RFID interaction",
      "Gesture-based controls",
      "Worker safety alerts",
      "Hands-free communication",
      "Productivity & digital twin analytics",
    ],
    users: [
      "Manufacturing plants",
      "Warehouses",
      "Construction sites",
      "Distribution centres",
      "Oil and gas facilities",
      "Industrial maintenance",
    ],
    applications: [
      "Manufacturing plants",
      "Warehouses",
      "Construction sites",
      "Distribution centres",
      "Oil and gas facilities",
      "Industrial maintenance",
    ],
    value: "Fewer errors, safer teams, and better operational visibility.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Workforce interaction system",
      accessoryIntegrations: [
        "Barcode and RFID systems",
        "Digital work instructions",
        "Digital twins",
      ],
    },
  },
] satisfies EcosystemProduct[];

const ecosystemProductOrder: ProductAccent[] = [
  "kradle",
  "kinetik",
  "kovert",
  "kursor",
  "kapture",
  "konnect",
];

export const ecosystemProducts = ecosystemProductOrder.map((slug) => {
  const product = ecosystemProductCatalog.find((item) => item.slug === slug);

  if (!product) {
    throw new Error(`Missing ecosystem product configuration: ${slug}`);
  }

  return product;
});
