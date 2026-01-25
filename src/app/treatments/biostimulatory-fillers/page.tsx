import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import BiostimulatoryFillersIntroSection from "@/app/sections/treatments/biostimulatory-fillers/BiostimulatoryFillersIntro";
import BiostimulatoryFillersAreasSection from "@/app/sections/treatments/biostimulatory-fillers/BiostimulatoryFillersAreas"
import BiostimulatoryFillersFAQSection from "@/app/sections/treatments/biostimulatory-fillers/BiostimulatoryFillersFAQ"
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
      <Banner
        src="/images/biostim-filler-banner-light.webp"
        alt="Biostimulatory fillers are are advanced treatments that can help help your body to produce more collagen and restore volume. At Caridi Concierge, we use Radiesse for biostimulatory fillers."
      />
      <BiostimulatoryFillersIntroSection />
      <BiostimulatoryFillersAreasSection />
      <BiostimulatoryFillersFAQSection />
      <CTASection variantKey="biostim"/>
      <Footer />
      </>
    );
  }