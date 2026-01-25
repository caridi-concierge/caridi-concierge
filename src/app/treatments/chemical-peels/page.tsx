import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import ChemicalPeelsIntroSection from "@/app/sections/treatments/chemical-peels/ChemicalPeelsIntro";
import ChemicalPeelsAreasSection from "@/app/sections/treatments/chemical-peels/ChemicalPeelsAreas";
import ChemicalPeelsFAQSection from "@/app/sections/treatments/chemical-peels/ChemicalPeelsFAQs";
import { createPageMetadata } from "@/lib/metadata";
import { chemicalPeelsFAQSchema } from "@/content/schemas/treatments/chemicalPeelsFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
  title: "Chemical Peels NYC | Brighten Skin, Fade Pigmentation",
  description:
    "Medical-grade chemical peels in NYC to treat discoloration, melasma, acne marks, and uneven texture. Physician-led, in-home care.",
  path: "/treatments/chemical-peels",
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
      <Banner
        src="/images/chemical-peels-banner-light.webp"
        alt="Chemical peels are a non-surgical treatment that can help reduce the appearance of wrinkles and fine lines. At Caridi Concierge, we use RHA Collection and Juvederm for dermal fillers."
      />
      <ChemicalPeelsIntroSection />
      <ChemicalPeelsAreasSection />
      <ChemicalPeelsFAQSection />
      <CTASection variantKey="peels"/>
      <Footer />
      </>
    );
  }