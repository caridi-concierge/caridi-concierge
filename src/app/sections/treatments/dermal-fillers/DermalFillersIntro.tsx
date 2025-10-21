import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function DermalFillersIntroSection() {
  return (
    <TreatmentIntroSection
      title="Dermal Fillers"
      description={[
        "Over time, your face can lose volume in key areas like the cheeks, lips, and under-eyes, making you look tired or less defined.",
        "Caridi Concierge offers in-home dermal filler treatments in New York City, performed exclusively by Dr. Cristina Caridi. Using advanced hyaluronic acid fillers like RHA and Juvederm, she restores volume, hydration, and balance to the face.",
        "Whether you want to add shape to the lips, contour the cheeks, or smooth deeper folds, every treatment is designed to look natural and feel effortless, never overdone."
    ]}
      frequency="This treatment should be repeated every 4-6 months."
      frequencyCtaHref="/book"
      frequencyCtaText="Book Fillers"
      beforeCare="Before your dermal filler appointment, avoid anti-inflammatory medications (ex. ibuprofen, aspirin, naproxen) and blood thinners (ex. warfarin, Plavix) for a few days unless prescribed by your doctor. These can increase the chance of bruising. Mild swelling or redness is normal, so plan your treatment at least 1-2 weeks before major events. Following these simple filler before-care tips helps your skin look its best and supports smoother, longer-lasting results."
      afterCare="After your filler injections, avoid pressing or massaging the treated area for the first 24 hours. Skip intense workouts, saunas, or lying face-down right after your visit. Some mild swelling or tenderness is expected, especially after lip filler or under-eye filler, and will fade within a few days. Keeping the area clean and following these filler aftercare steps helps you heal quickly and enjoy smooth, natural-looking results."
    />
  );
}