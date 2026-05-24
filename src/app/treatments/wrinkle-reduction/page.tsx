import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/sections/treatments/TreatmentDetailLayout";
import { wrinkleReductionDetail } from "@/content/treatments/details/wrinkle-reduction";
import { createPageMetadata } from "@/lib/metadata";
import { botoxFAQSchema } from "@/content/schemas/treatments/botoxFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Wrinkle Reduction | Botox, Daxxify & Xeomin in NYC",
    description: "Botox, Daxxify, and Xeomin to soften fine lines and wrinkles for a refreshed, natural look. In-home across NYC — book a consultation with Dr. Caridi.",
    path: "/treatments/wrinkle-reduction",
    image: wrinkleReductionDetail.heroImage.src,
    imageAlt: wrinkleReductionDetail.heroImage.alt,
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
