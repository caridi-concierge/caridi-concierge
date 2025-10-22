export const services = [
    {
      id: "botox",
      title: "Botox & Neuromodulators",
      badge: {
        text: "Most Popular",
        variant: "popular" as const,
      },
      hook: "Soften wrinkles and reshape your jawline—without the clinical feel.",
      bullets: [
        "Smooth <strong>forehead lines, crow's feet</strong>, and frown lines (the \"11s\")",
        "<strong>Masseter Botox</strong> for jawline slimming and TMJ relief",
        "<strong>Lip flip</strong> for subtle upper lip enhancement without filler",
        "<strong>Jelly roll treatment</strong> to smooth under-eye wrinkles",
        "Gummy smile correction for balanced aesthetics",
      ],
      products: "Botox, Xeomin, Daxxify",
      bookHref: "/booking",
      learnMoreHref: "/treatments/wrinkle-reduction",
    },
    {
      id: "fillers",
      title: "Dermal Fillers",
      // badge: {
      //   text: "Client Favorite",
      //   variant: "popular" as const,
      // },
      hook: "Restore volume and definition where time has taken it away.",
      bullets: [
        "<strong>Lip fillers</strong> and <strong>lip injections</strong> for balanced, natural fullness",
        "Cheek augmentation to restore youthful contours",
        "Under-eye hollows (tear troughs) for a refreshed appearance",
        "Jawline contouring and chin augmentation",
        "Smooth nasolabial folds and marionette lines",
      ],
      products: "Juvederm, RHA Collection",
      bookHref: "/booking",
      learnMoreHref: "/treatments/dermal-fillers",
    },
    {
      id: "biostim",
      title: "Biostimulatory Fillers",
      badge: {
        text: "Long-Lasting",
        variant: "longLasting" as const,
      },
      hook: "Build your own collagen for gradual, lasting rejuvenation.",
      bullets: [
        "Stimulate natural collagen production for long-term results",
        "Restore volume to cheeks, temples, and jawline",
        "Improve skin texture and firmness over time",
        "Ideal for deeper volume loss and facial structure",
        "Results last 2+ years with gradual improvement",
      ],
      products: "Radiesse, Sculptra",
      bookHref: "/booking",
      learnMoreHref: "/treatments/biostimulatory-fillers",
    },
  ];