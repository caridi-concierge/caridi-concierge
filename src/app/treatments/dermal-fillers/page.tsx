import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/sections/treatments/TreatmentDetailLayout";
import { dermalFillersDetail } from "@/content/treatments/details/dermal-fillers";
import { createPageMetadata } from "@/lib/metadata";
import { dermalFillersFAQSchema } from "@/content/schemas/treatments/dermalFillersFAQShema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Dermal Fillers | Lip, Cheek & Jawline Enhancement in NYC",
    description: "RHA and Juvéderm fillers to restore volume, soften lines, and define the lip, cheek, and jawline. In-home across NYC — book a consultation with Dr. Caridi.",
    path: "/treatments/dermal-fillers",
    noIndex: false
});

export default function DermalFillersPage() {
    return (
      <>
        <JsonLd schema={dermalFillersFAQSchema} />
        <Navbar />
        <TreatmentDetailLayout content={dermalFillersDetail} />
        <CTASection variantKey="fillers" id="dermal-fillers-cta" />
        <Footer />
      </>
    );
  }
