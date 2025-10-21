// src/sections/treatments/WrinkleReductionIntroSection.tsx
import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function WrinkleReductionIntroSection() {
  return (
    <TreatmentIntroSection
      title="Wrinkle Reduction"
      description={[
        "Fine lines can appear long before you expect them. Repeated expressions, stress, and sun exposure gradually change skin texture, making you look tired even when you feel rested.",
        "At Caridi Concierge, our in-home wrinkle reduction treatments use Botox, Xeomin, and Daxxify to smooth lines while preserving natural movement. Each treatment is physician-led and tailored to your unique features for a refreshed, balanced look.",
        "The result is effortless confidence: skin that looks smoother, features that appear lifted, and a face that reflects how you truly feel."
    ]}
      frequency="This treatment should be repeated every 2-4 months."
      frequencyCtaHref="/book"
      frequencyCtaText="Book Botox"
      beforeCare="Before your wrinkle reducing treatment, Dr. Caridi recommends stopping anti-inflammatory medications (ex. ibuprofen, aspirin, naproxen) and blood thinners (ex. warfarin, Plavix) to minimize bruising. While mild swelling is normal, proper preparation helps ensure the smooth, refined results Caridi Concierge is known for. For best outcomes, schedule your visit at least 1-2 weeks before major events or photos. These Botox before-care guidelines are part of how we help every client achieve safe, natural, and consistent results."
      afterCare="In the hours following your treatment, gently activate the injected muscles by smiling, frowning, or raising your brows, this helps the Botox settle evenly. Avoid rubbing or massaging the area and postpone facials, workouts, or lying flat for several hours. Mild redness or swelling is temporary and part of the normal Botox aftercare process. Within days, you’ll begin to see a smoother, more refreshed appearance that continues to improve over the following week. Your full results will be visible in 2-3 weeks."
    />
  );
}
