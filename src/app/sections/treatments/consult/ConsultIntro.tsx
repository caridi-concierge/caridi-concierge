import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";
import { treatments } from "@/content/treatments/treatments";

export default function ConsultIntroSection() {
  const details = treatments.find((t) => t.slug === "consult");
  if (!details) return null;
  
  return (
    <TreatmentIntroSection
      title="Consultation"
      description={[
        "At Caridi Concierge, we offer a comprehensive consultation to discuss your aesthetic goals and determine the best treatment plan for you. We will evaluate your skin type, lifestyle, and desired results to create a personalized treatment plan that addresses your specific needs.",
        "Caridi Concierge offers both in-person and virtual consultations to help you make informed decisions about your aesthetic journey.",
        "Our consultations are designed to be thorough yet comfortable, ensuring you have all the information you need to feel confident about your treatment choices."
      ]}
      frequencyCtaHref="/book"
      frequencyCtaText="Book a Consult"
      beforeCare=""
      afterCare=""
      startingPrice={details.startingPrice}
      note={details.note}
      frequency={details.frequency}
    />
  );
}
