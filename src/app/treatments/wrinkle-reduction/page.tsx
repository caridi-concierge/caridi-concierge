import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/sections/treatments/TreatmentDetailLayout";
import { wrinkleReductionDetail } from "@/content/treatments/details/wrinkle-reduction";
import { createPageMetadata } from "@/lib/metadata";
import { botoxFAQSchema } from "@/content/schemas/treatments/botoxFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Wrinkle Reduction | Botox, Daxxify & Xeomin Treatments in NYC",
    description: "Smooth fine lines & wrinkles with botox at Caridi Concierge. Expert in-home neuromodulator treatments for a refreshed, natural look. Book now!",
    path: "/treatments/wrinkle-reduction",
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Botox", "Daxxify", "Xeomin", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function WrinkleReductionPage() {
    return (
      <>
        <JsonLd schema={botoxFAQSchema} />
        <Navbar />
        <TreatmentDetailLayout content={wrinkleReductionDetail} />
        <CTASection variantKey="botox" id="wrinkle-reduction-cta" />
        <Footer />
      </>
    );
  }
