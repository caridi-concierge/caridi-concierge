import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import WrinkleReductionIntroSection from "@/app/sections/treatments/wrinkle-reduction/WrinkleReductionIntro";
import WrinkleReductionAreasSection from "@/app/sections/treatments/wrinkle-reduction/WrinkleReductionAreas";

export default function WrinkleReductionPage() {
    return (
      <>
      <Navbar />
      <Banner
        src="/images/wrinkle-reduction-banner-green-opaque-stripes.webp"
        alt="Caridi Concierge uses the following products for aesthetic treatments. 
        For botox treatments, we use Botox, Daxxify, Xeomin, and Juvederm. 
        For dermal fillers, we use RHA Collection and Juvederm. 
        For biostimulatory fillers, we use Radiesse."
      />
      <WrinkleReductionIntroSection />
      <WrinkleReductionAreasSection />
      <CTASection />
      <Footer />
      </>
    );
  }