import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/treatments/_sections/TreatmentDetailLayout";
import { biostimulatoryFillersDetail } from "@/content/treatments/details/biostimulatory-fillers";
import { createPageMetadata } from "@/lib/metadata";
import { biostimulatoryFillersFAQSchema } from "@/content/schemas/treatments/biostimulatoryFillersFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Biostimulatory Fillers (Radiesse) in NYC | Build Collagen",
    description: "Radiesse biostimulatory fillers rebuild collagen for natural volume and smoother skin. In-home across NYC — book a consultation with Dr. Caridi.",
    path: "/treatments/biostimulatory-fillers",
    image: biostimulatoryFillersDetail.heroImage.src,
    imageAlt: biostimulatoryFillersDetail.heroImage.alt,
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Biostimulatory Fillers", "Radiesse", "Collagen-building", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function BiostimulatoryFillersPage() {
    return (
      <>
        <JsonLd schema={biostimulatoryFillersFAQSchema} />
        <Navbar />
        <TreatmentDetailLayout content={biostimulatoryFillersDetail} />
        <CTASection variantKey="biostim" id="biostimulatory-fillers-cta" />
        <Footer />
      </>
    );
  }
