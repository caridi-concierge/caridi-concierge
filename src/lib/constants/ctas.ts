import type { CTASectionProps } from "@/components/CTA";

export const ctaVariants: Record<string, CTASectionProps> = {
  default: {
    title: "Modern beauty, made effortless.",
    subtitle:
      "Personalized Botox and filler treatments that restore balance, volume, and confidence.",
    ctaHref: "/book",
    ctaText: "Book a Visit",
    variant: "secondary",
    bgColor: "bg-outer-space",
    textColor: "text-alabaster",
    ariaLabel: "Book a visit to Caridi Concierge for personalized Botox and filler treatments",
    id: "primary-cta",
  },
  consult: {
    title: "Ready to start your journey?",
    subtitle: "Discover treatments tailored just for you.",
    ctaHref: "/contact",
    ctaText: "Get in Touch",
    variant: "primary",
    bgColor: "bg-champagne",
    textColor: "text-outer-space",
    ariaLabel: "Get in touch with Caridi Concierge for personalized Botox and filler treatments",
    id: "contact-cta",
  },
  promo: {
    title: "Special seasonal offer",
    subtitle: "Book now and enjoy exclusive perks with your first treatment.",
    ctaHref: "/book",
    ctaText: "Claim Offer",
    variant: "secondary",
    bgColor: "bg-steel-blue",
    textColor: "text-alabaster",
    ariaLabel: "Claim a special seasonal offer at Caridi Concierge for personalized Botox and filler treatments",
    id: "promo-cta",
  },
  // --- Treatment-specific variants ---
  botox: {
    title: "Smooth, refreshed, confident.",
    subtitle:
      "Target frown lines, crow’s feet, and more with advanced Botox treatments delivered where you feel most comfortable.",
    ctaHref: "/book",
    ctaText: "Book Botox",
    variant: "secondary",
    bgColor: "bg-outer-space",
    textColor: "text-alabaster",
    ariaLabel: "Book Botox treatment with Caridi Concierge",
    id: "botox-cta",
  },
  fillers: {
    title: "Restore volume and harmony.",
    subtitle:
      "Enhance lips, cheeks, and facial contours with dermal fillers for a natural, balanced look.",
    ctaHref: "/book",
    ctaText: "Book Fillers",
    variant: "secondary",
    bgColor: "bg-outer-space",
    textColor: "text-alabaster",
    ariaLabel: "Book dermal filler treatment with Caridi Concierge",
    id: "fillers-cta",
  },
  biostim: {
    title: "Rejuvenation that lasts.",
    subtitle:
      "Enjoy gradual, lasting rejuvenation with collagen-stimulating injectables designed for natural longevity.",
    ctaHref: "/book",
    ctaText: "Book Biostimulators",
    variant: "secondary",
    bgColor: "bg-outer-space",
    textColor: "text-alabaster",
    ariaLabel: "Book a biostimulatory filler treatment with Caridi Concierge",
    id: "biostim-cta",
  },
  staff: {
    title: "Expert care, personally delivered.",
    subtitle:
      "Every treatment is performed by Dr. Caridi herself, combining medical precision with an artistic eye for aesthetics.",
    ctaHref: "/book",
    ctaText: "Book with Dr. Caridi",
    variant: "secondary",
    bgColor: "bg-outer-space",
    textColor: "text-alabaster",
    ariaLabel: "Book an appointment with Dr. Cristina Caridi at Caridi Concierge",
    id: "staff-cta",
  },
};
  