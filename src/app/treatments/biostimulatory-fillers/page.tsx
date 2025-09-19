
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/app/sections/treatments/CTA";
import BiostimulatoryFillersIntroSection from "@/app/sections/treatments/biostimulatory-fillers/BiostimulatoryFillersIntro";
import BiostimulatoryFillersAreasSection from "@/app/sections/treatments/biostimulatory-fillers/BiostimulatoryFillersAreas"

export default function BiostimulatoryFillersPage() {
    return (
      <>
      <Navbar />
      <Banner
        src="/images/biostim-filler-banner-light.jpg"
        alt="Biostimulatory fillers are are advanced treatments that can help help your body to produce more collagen and restore volume. At Caridi Concierge, we use Radiesse for biostimulatory fillers."
      />
      <BiostimulatoryFillersIntroSection />
      <BiostimulatoryFillersAreasSection />
      <CTASection />
      <Footer />
      </>
    );
  }