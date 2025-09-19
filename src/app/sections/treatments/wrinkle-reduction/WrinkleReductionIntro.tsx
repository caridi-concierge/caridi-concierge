// src/sections/treatments/WrinkleReductionIntroSection.tsx
import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function WrinkleReductionIntroSection() {
  return (
    <TreatmentIntroSection
      title="Wrinkle Reduction"
      description={[
        "Maintain youthful, radiant skin with our expert wrinkle reduction services. Caridi Concierge specializes in neuromodulator treatments using trusted products like Botox, Daxxify, Jeuveau, Xeomin, and Dysport to smooth fine lines and wrinkles, sculpt your features, and restore confidence.",
        "Our personalized approach ensures safe, effective, and natural-looking results for both the upper and lower face, leaving you looking refreshed."
    ]}
      frequency="This treatment should be repeated every 2-4 months."
      frequencyCtaHref="/book"
      frequencyCtaText="Book a visit"
      beforeCare="Avoid anti-inflammatory medications and blood thinners before your appointment. Injections may cause minor bruising or swelling, so avoid scheduling injections immediately before events. Allow at least 1-2 weeks buffer."
      afterCare="After your treatment, spend time exercising the muscles that received the injections. Avoid touching the area to minimize irritation."
    />
  );
}
