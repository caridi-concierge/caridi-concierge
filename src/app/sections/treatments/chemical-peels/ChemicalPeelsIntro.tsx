import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";
import { treatments } from "@/content/treatments/treatments";

export default function ChemicalPeelsIntroSection() {
  const details = treatments.find((t) => t.slug === "chemical-peels");
  if (!details) return null;

  return (
    <TreatmentIntroSection
      title="Chemical Peels"
      description={[
        "Physician-led chemical peels using medical-grade formulations to improve skin tone, texture, and clarity without compromising skin health. Dr. Caridi customizes each peel to target concerns such as discoloration, melasma, acne, and fine lines while respecting your skin’s integrity and comfort level, resulting in brighter, smoother skin with controlled, predictable results."
      ]}
      frequencyCtaHref="/book"
      frequencyCtaText="Request a Consult"
      beforeCare="Before your chemical peel, avoid retinoids, retinol, AHAs, BHAs, scrubs, and waxing for 3 days. These products can increase sensitivity and affect how the peel absorbs. In addition, reschedule if you have a cold sore, rash, or active irritation in the treatment area. Preparing the skin gently ensures the peel works effectively and reduces the risk of unnecessary redness."
      afterCare="After your peel, expect mild dryness or peeling that begins within a few days. Use only a gentle cleanser, moisturize regularly, and apply SPF every morning. Avoid picking, heavy sweating, heat exposure, and exfoliating products for about a week. By keeping your skin protected and hydrated, you support healthy recovery and reveal the smoother, brighter complexion beneath."
      startingPrice={details.startingPrice}
      note={details.note}
      frequency={details.frequency}
    />
  );
}
