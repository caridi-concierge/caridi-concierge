import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";
import { treatments } from "@/content/treatments/treatments";

export default function BiostimulatoryFillersIntroSection() {
  const details = treatments.find((t) => t.slug === "biostimulatory-fillers");
  if (!details) return null;
  
  return (
    <TreatmentIntroSection
      title="Biostimulatory Fillers"
      description={[
        "Biostimulatory fillers like Radiesse and Sculptra stimulate your body’s natural collagen production, improving skin firmness, texture, and structure gradually over time.", 
        "At Caridi Concierge, these physician-led treatments are performed by Dr. Caridi as private in-home visits (or in our Gowanus clinic), designed to restore lift and skin quality across the face, neck, chest, and arms without adding bulk or weight."
    ]}
      frequencyCtaHref="/book"
      frequencyCtaText="Request a Consult"
      beforeCare="To prepare for your biostimulatory filler appointment, you should avoid blood-thinning medications (ex. ibuprofen, aspirin, naproxen) or supplements such as fish oil, and vitamin E for 5-7 days unless prescribed.
          In addition, refrain from alcohol and strenuous exercise for 24 hours before treatment, and arrive with clean skin and no makeup in the treatment area.
          By taking these simple Sculptra and Radiesse before-care steps, you’ll minimize bruising and help ensure a smoother, more comfortable experience."
      afterCare="After your treatment, avoid touching or massaging the area unless directed by your provider.
          Furthermore, skip strenuous activity, alcohol, and heat exposure (such as saunas or hot yoga) for 24-48 hours. Use gentle skincare products instead, and avoid exfoliants or actives like retinol for a few days.
          Some mild swelling or tenderness is normal; however, this typically resolves quickly. Because results build gradually, visible improvement usually begins within 4-6 weeks and continues for several months as new collagen forms. By following these biostimulatory filler aftercare tips, you’ll support lasting, natural results."
      startingPrice={details.startingPrice}
      note={details.note}
      frequency={details.frequency}
    />
  );
}
