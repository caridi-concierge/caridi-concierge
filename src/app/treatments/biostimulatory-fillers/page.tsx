import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import BiostimulatoryFillersIntroSection from "@/app/sections/treatments/biostimulatory-fillers/BiostimulatoryFillersIntro";
import BiostimulatoryFillersAreasSection from "@/app/sections/treatments/biostimulatory-fillers/BiostimulatoryFillersAreas"
import { JsonLd } from "@/components/JsonLD";
import { biostimulatoryFillerServiceSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Biostimulatory Fillers in NYC | Natural Collagen-Stimulating Treatments",
    description: "Restore volume and rejuvenate your skin from within with biostimulatory fillers. Serving NYC with personalized care for natural, long-lasting results.",
    path: "/treatments/biostimulatory-fillers",
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Biostimulatory Fillers", "Radiesse", "Collagen-building", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function BiostimulatoryFillersPage() {
    return (
      <>
      <JsonLd schema={biostimulatoryFillerServiceSchema}/>
      <Navbar />
      <Banner
        src="/images/biostim-filler-banner-light.webp"
        alt="Biostimulatory fillers are are advanced treatments that can help help your body to produce more collagen and restore volume. At Caridi Concierge, we use Radiesse for biostimulatory fillers."
      />
      <BiostimulatoryFillersIntroSection />
      <BiostimulatoryFillersAreasSection />
      <CTASection />
      <Footer />
      </>
    );
  }