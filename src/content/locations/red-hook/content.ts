import type { LocationContent } from '../types';

export const content: LocationContent = {
  slug: 'red-hook',
  metadata: {
    title: "Red Hook Private Studio | Caridi Concierge",
    description:
        "Physician-led Botox, dermal fillers, and treatment planning in a private Red Hook studio setting, reserved for established clients of the practice.",
    keywords: [
        "Red Hook Botox",
        "private Botox studio Brooklyn",
        "private dermal fillers Brooklyn",
        "physician-led Botox Red Hook",
        "discreet Botox Brooklyn",
        "Red Hook aesthetic doctor"
    ]
    },
  hero: {
    eyebrow: "Red Hook · Private studio",
    title: "By",
    italicTail: "invitation.",
  },
  spec: [
    { label: "Location", value: "Red Hook, Brooklyn" },
    { label: "Access", value: "By invitation only" },
    { label: "Visit length", value: "45 to 90 minutes" },
    { label: "Privacy", value: "No signage · address on confirmation" },
  ],
  studioExperience: {
    title: "A private studio setting in Red Hook",
    description:
        "The Red Hook studio is a private setting designed for established patients who want an alternative to in-home service. It offers a more discreet appointment experience. I use it for unhurried visits focused on careful planning and natural-looking results. Appointments are scheduled in advance, and the address is shared after confirmation."
    },
  overview: [
    "The Red Hook studio is reserved for established clients of the practice. For patients I see often, on longer arcs, where consistency matters more than convenience.",
    "It's a small, quiet room. No signage on the door, no shared waiting, no public schedule. The address is shared once an appointment is confirmed.",
    "If you're not yet a client, the Gowanus clinic and in-home concierge are how to begin. Red Hook follows from there, by invitation.",
  ],
  space: [
    {
      label: "Setting",
      value:
        "A small, private room in Red Hook. Quiet, residential, and intentionally undermarked.",
    },
    {
      label: "Privacy",
      value:
        "No signage on the door, no shared waiting, no public schedule. The address is shared on confirmation.",
    },
    {
      label: "Access",
      value:
        "Reserved for established clients of the practice. New patients begin at the Gowanus clinic or in-home.",
    },
    {
      label: "Continuity",
      value:
        "The same room, every visit, for the duration of your care, so the work compounds rather than restarts.",
    },
  ],
  process: [
    {
      meta: "By invitation",
      title: "Coordinated directly.",
      description:
        "Red Hook visits are arranged between me and existing clients. Reach out only if I've offered the studio as an option.",
    },
    {
      meta: "Confirmation",
      title: "Address on confirmation.",
      description:
        "Once your visit is confirmed, I'll share the address and arrival instructions by text. No signage on site.",
    },
    {
      meta: "The visit",
      title: "The same clinical standard.",
      description:
        "Forty-five to ninety minutes for consult, treatment, and post-care discussion. The same standard as anywhere else in the practice.",
    },
    {
      meta: "After",
      title: "Aftercare and follow-up.",
      description:
        "A message at forty-eight hours and a two-week check-in. Future visits stay on the same channel.",
    },
  ],
  doctorsNote: {
    body:
      "Red Hook is for the patients I've come to know over time. Discretion is the reason it exists. If you've been thinking about a more private rhythm to your care, we can talk about whether it fits.",
    attr: "Cristina Caridi, MD",
  },
  offerings: {
    title: "Treatments in Red Hook",
    subtitle: "Physician-led care in a private studio setting",
    treatments: [
      "consult",
      "wrinkle-reduction",
      "dermal-fillers",
      "biostimulatory-fillers",
      "chemical-peels",
    ],
    services: [
    {
      title: "Wrinkle Reduction",
      subtitle: "Botox treatments with a conservative approach",
      whyHere:
        "This setting works well when you want privacy and time for thoughtful assessment before treatment, especially for patients who prefer ongoing, consistent care.",
      bullets: [
        "Softens forehead lines, frown lines, and crow’s feet",
        "Dosing planned to preserve natural expression",
        "Focused on balance and long-term outcomes",
      ],
      ctaHref: "/treatments/wrinkle-reduction",
      ctaText: "Learn about wrinkle reduction",
    },
    {
      title: "Dermal Fillers",
      subtitle: "Conservative contour and volume refinement",
      whyHere:
        "Red Hook allows for unhurried planning when refining proportion, symmetry, or structural support over time, without the feel of a public clinic.",
      bullets: [
        "Restore soft volume with a conservative approach",
        "Focused on proportion and natural results",
        "Planned for gradual improvement when appropriate",
      ],
      ctaHref: "/treatments/dermal-fillers",
      ctaText: "Learn about dermal fillers",
    },
    {
      title: "Long-Term Treatment Planning",
      subtitle: "Extended planning for ongoing care",
      whyHere:
        "If your goal is gradual, intentional change, this setting supports longer conversations around priorities, timing, and what will make the most difference.",
      bullets: [
        "Review of goals, anatomy, and prior treatments",
        "Discussion of what makes sense now versus later",
        "Clear recommendations without pressure",
      ],
      ctaHref: "/treatments/consult",
      ctaText: "Learn about treatment planning",
    },
  ],
  features: [
    {
      title: "Private studio setting",
      description:
        "A quieter environment for patients who prefer discretion and a more personal appointment experience.",
    },
    {
      title: "Unhurried appointments",
      description:
        "Time is built in for careful consultation, planning, and conservative treatment.",
    },
    {
      title: "Continuity of care",
      description:
        "Well suited for patients who prefer consistent follow-up and gradual, natural-looking results.",
    },
  ],
},
  faqs: [
  {
    question: "What treatments do you offer at the Red Hook studio?",
    answer:
      "The Red Hook studio offers physician-led wrinkle reduction with Botox, dermal fillers, biostimulatory fillers, chemical peels, and treatment planning. Treatments are approached conservatively and tailored to your anatomy and goals."
  },
  {
    question: "Who can visit the Red Hook studio?",
    answer:
      "Red Hook is reserved for established clients of the practice. New patients begin with the Gowanus clinic or in-home concierge; the studio follows from there, by invitation."
  },
  {
    question: "What makes the Red Hook studio different?",
    answer:
      "Appointments in Red Hook take place in a private studio setting designed for discretion and unhurried care. This environment allows more time for thoughtful consultation, planning, and gradual refinement without the feel of a public clinic."
  },
  {
    question: "What do I need to know before my appointment?",
    answer:
      "Appointments are scheduled in advance, and visit details are shared after confirmation. You’ll receive guidance ahead of time so you know what to expect, with time built in for questions before any treatment begins."
  }
]
};
