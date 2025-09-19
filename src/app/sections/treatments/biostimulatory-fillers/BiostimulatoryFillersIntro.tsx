// src/sections/treatments/BiostimulatoryFillersIntroSection.tsx
import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function BiostimulatoryFillersIntroSection() {
  return (
    <TreatmentIntroSection
      title="Biostimulatory Fillers"
      description={[
        "Biostimulatory fillers are advanced injectables that stimulate your body’s natural collagen production to gradually restore volume, improve skin texture, and support long-term rejuvenation. Unlike traditional dermal fillers, which provide immediate volume, biostimulatory treatments work over time to rebuild the skin’s structure from within, making them ideal for areas like the face, neck, chest, upper arms, and even the butt. The result is a lifted, refreshed appearance that evolves naturally.",
    ]}
      frequency="Typically administered as a series of 3 treatments, spaced 6 weeks apart, followed by yearly maintenance."
      frequencyCtaHref="/book"
      frequencyCtaText="Book a visit"
      beforeCare="To ensure the best possible results and minimize any potential side effects: Avoid blood-thinning medications and supplements (like aspirin, ibuprofen, fish oil, and vitamin E) for 5-7 days prior, unless prescribed. Refrain from alcohol and strenuous exercise 24 hours before your appointment. Notify your provider if you are pregnant, breastfeeding, or have a history of autoimmune conditions. Arrive with clean skin and no makeup in the treatment area."
      afterCare="After your appointment, follow these simple steps to support healing and maximize collagen stimulation: Avoid touching or massaging the area unless directed. Skip strenuous activity, heat exposure (like saunas or hot yoga), and alcohol for 24-48 hours. Stay upright for at least 4 hours post-treatment. Use gentle skincare products and avoid exfoliants or active ingredients (like retinol) for a few days. Expect gradual results. Visible improvement typically begins within 4-6 weeks and continues for several months."
    />
  );
}
