import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";
import { treatments } from "@/content/treatments/treatments";

export default function DermalFillersIntroSection() {
  const details = treatments.find((t) => t.slug === "dermal-fillers");
  if (!details) return null;
  
  return (
    <TreatmentIntroSection
      title="Dermal Fillers"
      description={[
        "Physician-led dermal filler treatments by Dr. Cristina Caridi. Focused on restoring facial balance without overfilling. Care is offered as private in-home visits or in-office appointments in our Gowanus clinical space, using advanced hyaluronic acid fillers like RHA and Juvederm.",
        "Whether you want to add shape to the lips, contour the cheeks, or smooth deeper folds, every treatment is designed to look natural and feel effortless-never overdone."
      ]}
      frequencyCtaHref="/book"
      frequencyCtaText="Request a Consult"
      beforeCare="Before your dermal filler appointment, avoid anti-inflammatory medications (ex. ibuprofen, aspirin, naproxen) and blood thinners (ex. warfarin, Plavix) for a few days unless prescribed by your doctor. These can increase the chance of bruising. In addition, plan your treatment at least 1–2 weeks before major events, as mild swelling or redness is normal. By following these filler before-care steps, you’ll help your skin recover smoothly and support long-lasting, natural results."
      afterCare="After your filler injections, avoid pressing or massaging the treated area for the first 24 hours. Furthermore, skip intense workouts, saunas, or lying face-down right after your visit. Some mild swelling or tenderness is expected, especially after lip or under-eye filler; however, this will fade within a few days. Therefore, keeping the area clean and following these filler aftercare steps helps you heal comfortably and enjoy refined, natural-looking results."
      startingPrice={details.startingPrice}
      note={details.note}
      frequency={details.frequency}
    />
  );
}
