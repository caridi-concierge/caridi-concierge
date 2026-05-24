import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/treatments/_sections/TreatmentDetailLayout";
import { wrinkleReduction } from "@/content/treatments";
import { createPageMetadata } from "@/lib/metadata";
import { botoxFAQSchema } from "@/content/schemas/treatments/botoxFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Wrinkle Reduction | Botox, Daxxify & Xeomin in NYC",
    description: "Botox, Daxxify, and Xeomin to soften fine lines and wrinkles for a refreshed, natural look. In-home across NYC — book a consultation with Dr. Caridi.",
    path: "/treatments/wrinkle-reduction",
    image: wrinkleReduction.content.heroImage.src,
    imageAlt: wrinkleReduction.content.heroImage.alt,
    noIndex: false
});

export default function WrinkleReductionPage() {
    return (
      <>
        <JsonLd schema={botoxFAQSchema} />
        <Navbar />
        <TreatmentDetailLayout content={wrinkleReduction.content} />
        <CTASection variantKey="botox" id="wrinkle-reduction-cta" />
        <Footer />
      </>
    );
  }
