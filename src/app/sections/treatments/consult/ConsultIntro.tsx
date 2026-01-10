import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";
import { treatments } from "@/content/treatments/treatments";

export default function ConsultIntroSection() {
  const details = treatments.find((t) => t.slug === "consult");
  if (!details) return null;
  
  return (
    <TreatmentIntroSection
      title="Consultation"
      description={[
        "A consultation with Caridi Concierge is a physician-led conversation focused on understanding your goals, anatomy, and long-term preferences before any treatment decisions are made. Dr. Cristina Caridi takes the time to evaluate skin quality, facial balance, and lifestyle factors to create a personalized, medically appropriate plan. Consultations are designed to be thorough yet comfortable, giving you the clarity and confidence to move forward thoughtfully.",
      ]}
      frequencyCtaHref="/book"
      frequencyCtaText="Request a Consult"
      beforeCare=""
      afterCare=""
      startingPrice={details.startingPrice}
      note={details.note}
      frequency={details.frequency}
    />
  );
}
