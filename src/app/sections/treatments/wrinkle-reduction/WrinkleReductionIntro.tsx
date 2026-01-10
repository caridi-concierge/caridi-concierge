import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";
import { treatments } from "@/content/treatments/treatments";

export default function WrinkleReductionIntroSection() {
  const details = treatments.find((t) => t.slug === "wrinkle-reduction");
  if (!details) return null;
  
  return (
    <TreatmentIntroSection
      title="Botox & Neuromodulators"
      description={[
        "Physician-led wrinkle reduction treatments using Botox, Xeomin, and Daxxify, designed to smooth lines while preserving natural movement. Care is offered in-home or at our Gowanus clinical space, with every treatment personally performed by Dr. Cristina Caridi.",
        // "At Caridi Concierge, our in-home wrinkle reduction treatments use Botox, Xeomin, and Daxxify to smooth lines while preserving natural movement. Each treatment is physician-led and tailored to your unique features for a refreshed, balanced look.",
        "Your skin will look smoother, your features appear lifted, and your expression will reflect how you truly feel."
      ]}
      frequencyCtaHref="/book"
      frequencyCtaText="Request a Consult"
      beforeCare="Before your wrinkle-reducing treatment, Dr. Caridi recommends pausing anti-inflammatory medications (ex. ibuprofen, aspirin, naproxen) and blood thinners (ex. warfarin, Plavix) to minimize bruising. In addition, mild swelling is normal, so planning ahead helps ensure the smooth, refined results Caridi Concierge is known for. For best outcomes, schedule your visit at least 1-2 weeks before major events or photos. By following these Botox before-care guidelines, you’ll help your treatment settle evenly and achieve safe, natural, and consistent results."
      afterCare="In the hours following your treatment, gently activate the injected muscles by smiling, frowning, or raising your brows. This helps the Botox settle evenly. However, avoid rubbing or massaging the area, and postpone facials, workouts, or lying flat for several hours. Some mild redness or swelling is temporary and part of the normal Botox aftercare process. Within days, you’ll begin to see a smoother, more refreshed appearance that continues to improve over the following week. Therefore, expect your full results to be visible within 2-3 weeks."
      startingPrice={details.startingPrice}
      note={details.note}
      frequency={details.frequency}
    />
  );
}

