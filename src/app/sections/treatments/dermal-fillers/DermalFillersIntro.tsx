import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function DermalFillersIntroSection() {
  return (
    <TreatmentIntroSection
      title="Dermal Fillers"
      description={[
        "Over time, your face can lose volume in key areas like the cheeks, lips, and under-eyes, making you look tired or less defined.",
        "Caridi Concierge offers in-home dermal filler treatments in New York City, performed exclusively by Dr. Cristina Caridi. Using advanced hyaluronic acid fillers like RHA and Juvederm, she restores volume, hydration, and balance to the face.",
        "Whether you want to add shape to the lips, contour the cheeks, or smooth deeper folds, every treatment is designed to look natural and feel effortless—never overdone."
      ]}
      frequency="This treatment should be repeated every 4-6 months."
      frequencyCtaHref="/book"
      frequencyCtaText="Book Fillers"
      beforeCare="Before your dermal filler appointment, avoid anti-inflammatory medications (ex. ibuprofen, aspirin, naproxen) and blood thinners (ex. warfarin, Plavix) for a few days unless prescribed by your doctor. These can increase the chance of bruising. In addition, plan your treatment at least 1–2 weeks before major events, as mild swelling or redness is normal. By following these filler before-care steps, you’ll help your skin recover smoothly and support long-lasting, natural results."
      afterCare="After your filler injections, avoid pressing or massaging the treated area for the first 24 hours. Furthermore, skip intense workouts, saunas, or lying face-down right after your visit. Some mild swelling or tenderness is expected, especially after lip or under-eye filler; however, this will fade within a few days. Therefore, keeping the area clean and following these filler aftercare steps helps you heal comfortably and enjoy refined, natural-looking results."
    />
  );
}
