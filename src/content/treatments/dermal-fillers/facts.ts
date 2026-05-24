import type { TreatmentMetadata } from "@/content/treatments/types";
import { PRICES } from "@/lib/constants/pricing";

export const facts: TreatmentMetadata = {
  id: "fillers",
  slug: "dermal-fillers",
  title: "Dermal Fillers",
  hook: "Restore volume and definition.",
  description:
    "Dermal fillers can improve shape and restore lost volume to areas like the face, lips, neck, butt and arms. Common options include RHA Collection and Juvederm.",
  highlights: [
    "<strong>Lip fillers</strong> and <strong>lip injections</strong> for balanced, natural fullness",
    "Cheek augmentation to restore youthful contours",
    "Under-eye hollows (tear troughs) for a refreshed appearance",
    "Jawline contouring and chin augmentation",
    "Smooth nasolabial folds and marionette lines",
  ],
  products: "Juvederm, RHA Collection",
  imgSrc: "/images/treatments/filler_lip_tx.webp",
  imgAlt:
    "Decorative image for the Dermal Fillers page. RHA Collection, Juvederm. Juvederm can be used to restore lost volume to areas like the face, lips, neck, butt and arms.",
  startingPrice: `$${PRICES.dermalFiller}/syringe`,
  note: "Most areas require 1-2 syringes",
  frequency: "This treatment should be repeated every 4-6 months.",
  bookHref: "/book?source=card_dermal-fillers",
  ctaHref: "/treatments/dermal-fillers",
  ctaText: "Learn More",
  category: "Filler",
  from: PRICES.dermalFiller,
  unit: "/ syringe",
  duration: "45–60 min",
};
