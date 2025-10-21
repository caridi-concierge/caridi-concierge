// src/sections/treatments/WrinkleReductionIntroSection.tsx
import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function WrinkleReductionIntroSection() {
  return (
    <TreatmentIntroSection
      title="Wrinkle Reduction"
      description={[
        "Subtle lines and wrinkles often appear long before we feel they should. Repeated facial expressions, sun exposure, and daily stress can cause the skin to lose its smoothness, making you look tired or tense even when you’re not. At Caridi Concierge, we understand how these small changes can impact how you view yourself.",
        "Our personalized in-home injections offer a precise, physician-led solution to restore a refreshed, natural look, without changing your expressions or relying on filters. Using trusted products like Botox, Daxxify, Xeomin, and Jeuveau, Dr. Caridi tailors every treatment to your facial anatomy, smoothing fine lines across the forehead, crow’s feet, frown lines, and jawline.",
        "The result is effortless confidence: skin that looks smoother, features that appear lifted, and a face that reflects how you truly feel."
    ]}
      frequency="This treatment should be repeated every 2-4 months."
      frequencyCtaHref="/book"
      frequencyCtaText="Book Botox"
      beforeCare="Before your Botox or Daxxify treatment, Dr. Caridi recommends stopping anti-inflammatory medications (ex. ibuprofen, aspirin, naproxen) and blood thinners (ex. warfarin, Plavix) to minimize bruising. While mild swelling is normal, proper preparation helps ensure the smooth, refined results Caridi Concierge is known for. For best outcomes, schedule your visit at least 1-2 weeks before major events or photos. These Botox before-care guidelines are part of how we help every client achieve safe, natural, and consistent results."
      afterCare="In the hours following your treatment, gently activate the injected muscles by smiling, frowning, or raising your brows, this helps the Botox settle evenly. Avoid rubbing or massaging the area and postpone facials, workouts, or lying flat for several hours. Mild redness or swelling is temporary and part of the normal Botox aftercare process. Within days, you’ll begin to see a smoother, more refreshed appearance that continues to improve over the following week. Your full results will be visible in 2-3 weeks."
    />
  );
}
