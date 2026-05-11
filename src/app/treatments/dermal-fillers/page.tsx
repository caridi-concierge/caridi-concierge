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
    description: "Enhance your natural beauty with RHA and Juvederm dermal fillers. Restore volume, smooth wrinkles & define your features. Book expert care today!",
    path: "/treatments/dermal-fillers",
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Dermal Fillers", "RHA", "Juvederm", "In-Home Treatments", "Brooklyn", "New York City"],
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
