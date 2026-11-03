export type FaqItem = {
  question: string;
  answer: string;
};

export const platformFaqs: FaqItem[] = [
  {
    question: "What is TekGlove?",
    answer:
      "TekGlove is a wearable technology platform powered by the Smart Dorsal Sensor. It captures and interprets hand data across a family of connected gloves designed for health, movement, computing, recovery, defence, and industry.",
  },
  {
    question: "Why does TekGlove focus on the hand?",
    answer:
      "The hand is a rich source of movement, grip, gesture, position, touch, and physical-response data. It also allows TekGlove to sense, respond, and connect without interrupting the task at hand.",
  },
  {
    question: "What is the Smart Dorsal Sensor?",
    answer:
      "The Smart Dorsal Sensor is the shared intelligence layer positioned on the back of the hand. It supports sensing, connectivity, gesture recognition, haptic feedback, and data processing across the TekGlove ecosystem.",
  },
  {
    question: "Is TekGlove one product or a family of products?",
    answer:
      "TekGlove is one core platform expressed through six specialised gloves: Kradle, Kinetik, Kursor, Kovert, Kapture, and Konnect. Each product applies the shared platform to a different field.",
  },
  {
    question: "Are TekGlove products available now?",
    answer:
      "TekGlove products are currently in development. Kradle, Kinetik, Kovert, and Kursor are the initial focus products, while the wider six-glove ecosystem continues to evolve.",
  },
  {
    question: "How can I get early access?",
    answer:
      "Join the TekGlove waitlist to receive development updates, testing opportunities, partnership information, and future availability announcements.",
  },
];

export const productFaqs = {
  Kinetik: [
    {
      question: "Who is Kinetik designed for?",
      answer:
        "Kinetik is the robotics direction of TekGlove, focused on motion, grip and gesture for developers, researchers and human–machine interaction teams.",
    },
    {
      question: "What data does Kinetik capture?",
      answer:
        "Kinetik is being developed around hand movement, grip and gestures. Specific capabilities and supported integrations will be shared as development progresses.",
    },
    {
      question: "Does Kinetik replace a smartwatch?",
      answer:
        "No. Kinetik is centred on the glove and its Smart Dorsal Sensor. Compatible watches, displays, and wireless earbuds may serve as optional accessories within the experience.",
    },
  ],
  Kradle: [
    {
      question: "What is Kradle designed to support?",
      answer:
        "Kradle is the health, fitness and wellness direction of TekGlove, connecting with the athlete-centred KNK Sports range.",
    },
    {
      question: "Who is Kradle intended for?",
      answer:
        "Kradle is intended for people interested in understanding their activity, training and everyday wellbeing.",
    },
    {
      question: "Does Kradle replace professional medical care?",
      answer:
        "No. Kradle is intended to support monitoring and connected care. It is not a replacement for qualified medical advice, diagnosis, treatment, or emergency services.",
    },
  ],
  Kovert: [
    {
      question: "What does the Kovert Smart Sensor control?",
      answer:
        "Kovert is being developed to monitor and control connected drone, floor robot, smart glasses, and 360-degree body cameras through one dorsal-mounted interface.",
    },
    {
      question: "Does Kovert require a phone or separate controller?",
      answer:
        "The Kovert Smart Sensor is designed to serve as the central wearable command unit, reducing the need to reach for a phone, tablet, or separate camera controller during supported operations.",
    },
    {
      question: "Who is Kovert intended for?",
      answer:
        "Kovert is intended for military, law enforcement, private security, emergency-response, search-and-rescue, and professional surveillance teams.",
    },
  ],
  Kursor: [
    {
      question: "What can Kursor control?",
      answer:
        "Kursor is being designed for cursor movement, clicking, scrolling, gesture commands, presentation control, and other mapped interactions across compatible computers and connected devices.",
    },
    {
      question: "Who is Kursor designed for?",
      answer:
        "Kursor is intended for office workers, designers, engineers, gamers, spatial-computing users, and people who may benefit from alternative computer input methods.",
    },
    {
      question: "Does Kursor require a traditional mouse?",
      answer:
        "Kursor is being developed as a wearable input option that can reduce reliance on a traditional mouse for supported actions. Final compatibility and control options will depend on the connected device and application.",
    },
  ],
  Kapture: [
    {
      question: "What is Kapture designed to support?",
      answer:
        "Kapture is being developed to support hand recovery through therapeutic stimulation, grip-strength monitoring, movement sensing, and recovery insights.",
    },
    {
      question: "How does the Smart Dorsal Sensor support recovery?",
      answer:
        "The KAPTURE Smart Dorsal Sensor is designed to coordinate sensing, therapy, and real-time feedback across the hand, helping users understand their rehabilitation activity and progress.",
    },
    {
      question: "Does Kapture replace professional rehabilitation care?",
      answer:
        "No. Kapture is intended to support guided recovery and rehabilitation programmes. It does not replace professional assessment, treatment, or advice.",
    },
  ],
  Konnect: [
    {
      question: "Who is Konnect designed for?",
      answer:
        "Konnect is being developed for teams in manufacturing, warehousing, construction, distribution, oil and gas, and industrial maintenance.",
    },
    {
      question: "How does Konnect connect workers with equipment?",
      answer:
        "Planned capabilities include barcode and RFID interaction, gesture-based controls, digital work instructions, and hands-free communication to connect tasks and physical assets with operational information.",
    },
    {
      question: "What does Konnect do with workflow data?",
      answer:
        "Konnect is designed to turn workflow activity into productivity insights and connect that activity with digital twin environments, helping teams understand bottlenecks and improve operational visibility.",
    },
  ],
} satisfies Record<
  "Kradle" | "Kinetik" | "Kovert" | "Kursor" | "Kapture" | "Konnect",
  FaqItem[]
>;
