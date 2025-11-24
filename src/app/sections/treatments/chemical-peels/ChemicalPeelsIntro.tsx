import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";
import { treatments } from "@/content/treatments/treatments";

export default function ChemicalPeelsIntroSection() {
  const details = treatments.find((t) => t.slug === "chemical-peels");
  if (!details) return null;

  return (
    <TreatmentIntroSection
      title="Chemical Peels"
      description={[
        "Sun exposure, breakouts, and natural aging can leave the skin looking uneven or dull over time. Chemical peels offer a controlled way to exfoliate damaged skin and stimulate healthy cell turnover, revealing a brighter and smoother complexion.",
        "Caridi Concierge provides in-home chemical peel treatments in New York City, performed exclusively by Dr. Cristina Caridi. Using safe, medical-grade formulations, she targets concerns like discoloration, melasma, acne, texture irregularities, and fine lines while respecting your skin’s integrity.",
        "Whether your goal is clearer pores, softer texture, or a more even skin tone, each peel is customized to match your skin type and comfort level, supporting natural radiance without irritation or downtime you don’t need."
      ]}
      frequencyCtaHref="/book"
      frequencyCtaText="Book Chemical Peel"
      beforeCare="Before your chemical peel, avoid retinoids, retinol, AHAs, BHAs, scrubs, and waxing for 3 days. These products can increase sensitivity and affect how the peel absorbs. In addition, reschedule if you have a cold sore, rash, or active irritation in the treatment area. Preparing the skin gently ensures the peel works effectively and reduces the risk of unnecessary redness."
      afterCare="After your peel, expect mild dryness or peeling that begins within a few days. Use only a gentle cleanser, moisturize regularly, and apply SPF every morning. Avoid picking, heavy sweating, heat exposure, and exfoliating products for about a week. By keeping your skin protected and hydrated, you support healthy recovery and reveal the smoother, brighter complexion beneath."
      startingPrice={details.startingPrice}
      note={details.note}
      frequency={details.frequency}
    />
  );
}
