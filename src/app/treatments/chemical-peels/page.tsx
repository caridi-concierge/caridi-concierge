import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/treatments/_sections/TreatmentDetailLayout";
import { chemicalPeelsDetail } from "@/content/treatments/details/chemical-peels";
import { createPageMetadata } from "@/lib/metadata";
import { chemicalPeelsFAQSchema } from "@/content/schemas/treatments/chemicalPeelsFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
  title: "Chemical Peels NYC | Brighten Skin, Fade Pigmentation",
  description:
    "Medical-grade chemical peels for discoloration, melasma, acne marks, and uneven texture. In-home across NYC — book a consultation with Dr. Caridi.",
  path: "/treatments/chemical-peels",
  image: chemicalPeelsDetail.heroImage.src,
  imageAlt: chemicalPeelsDetail.heroImage.alt,
  keywords: [
    "Chemical Peels NYC",
    "VI Peel NYC",
    "In Home Chemical Peel",
    "Hyperpigmentation Treatment",
    "Melasma Treatment",
    "Acne Marks Peel",
    "Skin Brightening NYC",
    "Caridi Concierge",
    "Brooklyn Skin Treatments"
  ],
  noIndex: false
});

export default function ChemicalPeelsPage() {
    return (
      <>
        <JsonLd schema={chemicalPeelsFAQSchema} />
        <Navbar />
        <TreatmentDetailLayout content={chemicalPeelsDetail} />
        <CTASection variantKey="peels" id="chemical-peels-cta" />
        <Footer />
      </>
    );
  }
