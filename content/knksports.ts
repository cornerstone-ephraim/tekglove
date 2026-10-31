export const knkSports = [
  {
    name: "Tennis",
    focus: "Every point starts with your grip.",
    description:
      "From a first serve to a long rally, explore the connection between the hand, the racket and repeatable technique.",
  },
  {
    name: "Boxing",
    focus: "Put purpose behind every round.",
    description:
      "Training built around the hands, with movement, rhythm and control at the centre of every session.",
  },
  {
    name: "Golf",
    focus: "Find consistency in the details.",
    description:
      "The grip connects you to the club. That makes the hand a natural place to begin understanding your practice.",
  },
  {
    name: "American football",
    focus: "Be ready for the next play.",
    description:
      "Catching, carrying and handling. A focus on the hand skills and coordination athletes bring to the field.",
  },
  {
    name: "Soccer",
    focus: "Start between the posts.",
    description:
      "Goalkeeping puts the hands at the heart of the game, from the training ground to the final save.",
  },
  {
    name: "Cycling",
    focus: "Stay connected to the ride.",
    description:
      "Your hands connect you to the bike. Grip, handling and long hours in the saddle shape our starting point.",
  },
] as const;

export const knkModes = [
  {
    name: "TEK Aviator",
    focus: "Aviation",
    features: [
      "Pilot fatigue monitoring",
      "Haptic checklists",
      "Cockpit controls",
    ],
  },
  {
    name: "TEK Equestrian",
    focus: "Riding",
    features: [
      "Riding posture analysis",
      "Rein pressure sensing",
      "Fall detection",
    ],
  },
  {
    name: "TEK Dive",
    focus: "Diving",
    features: [
      "Underwater gestures",
      "Dive computer integration",
      "Temperature sensing",
    ],
  },
  {
    name: "TEK Sky",
    focus: "Sky sports",
    features: ["Altitude awareness", "Jump analytics", "Landing guidance"],
  },
  {
    name: "TEK Racing",
    focus: "Motorsports",
    features: [
      "Steering grip analysis",
      "Reaction timing",
      "Driver biometrics",
    ],
  },
  {
    name: "TEK Tactical",
    focus: "Field operations",
    features: ["Field monitoring", "Silent communication", "Navigation"],
  },
] as const;
