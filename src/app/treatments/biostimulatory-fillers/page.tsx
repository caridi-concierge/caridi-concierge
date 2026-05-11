import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/sections/treatments/TreatmentDetailLayout";
import { biostimulatoryFillersDetail } from "@/content/treatments/details/biostimulatory-fillers";
import { createPageMetadata } from "@/lib/metadata";
import { biostimulatoryFillersFAQSchema } from "@/content/schemas/treatments/biostimulatoryFillersFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Biostimulatory Fillers in NYC | Build Collagen Naturally",
    description: "Restore volume and improve skin quality with biostimulatory fillers in NYC. Physician-led, personalized care focused on natural, long-lasting results.",
    path: "/treatments/biostimulatory-fillers",
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
