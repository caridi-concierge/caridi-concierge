// src/sections/treatments/BiostimulatoryFillersIntroSection.tsx
import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function BiostimulatoryFillersIntroSection() {
  return (
    <TreatmentIntroSection
      title="Biostimulatory Fillers"
      description={[
        "As we age, collagen and elastin naturally decline, leading to thinner skin and a loss of firmness. Fine lines deepen, and once-smooth contours begin to soften.",
        "Biostimulatory fillers like Radiesse and Sculptra help your body rebuild what time has reduced, stimulating collagen production for gradual, lasting rejuvenation.",
        "At Caridi Concierge, these in-home treatments are performed by Dr. Caridi. The goal is to restore lift and improve skin texture across the face, neck, chest, and arms. The results appear subtly and strengthen over time, creating refreshed, natural-looking definition without adding bulk or weight."
    ]}
      frequency="Typically administered as a series of 3 treatments, spaced 6 weeks apart, followed by yearly maintenance."
      frequencyCtaHref="/book"
      frequencyCtaText="Book Collagen Stimulators"
      beforeCare="To prepare for your biostimulatory filler appointment, you should avoid blood-thinning medications (ex. ibuprofen, aspirin, naproxen) or supplements such as fish oil, and vitamin E for 5-7 days unless prescribed.
          In addition, refrain from alcohol and strenuous exercise for 24 hours before treatment, and arrive with clean skin and no makeup in the treatment area.
          By taking these simple Sculptra and Radiesse before-care steps, you’ll minimize bruising and help ensure a smoother, more comfortable experience."
      afterCare="After your treatment, avoid touching or massaging the area unless directed by your provider.
          Furthermore, skip strenuous activity, alcohol, and heat exposure (such as saunas or hot yoga) for 24-48 hours. Use gentle skincare products instead, and avoid exfoliants or actives like retinol for a few days.
          Some mild swelling or tenderness is normal; however, this typically resolves quickly. Because results build gradually, visible improvement usually begins within 4-6 weeks and continues for several months as new collagen forms. By following these biostimulatory filler aftercare tips, you’ll support lasting, natural results."
    />
  );
}
