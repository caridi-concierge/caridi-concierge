import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import DermalFillersIntroSection from "@/app/sections/treatments/dermal-fillers/DermalFillersIntro";
import DermalFillersAreasSection from "@/app/sections/treatments/dermal-fillers/DermalFillersAreas";

export default function DermalFillersPage() {
    return (
      <>
      <Navbar />
      <Banner
        src="/images/dermal-filler-banner-light.webp"
        alt="Dermal fillers are a non-surgical treatment that can help reduce the appearance of wrinkles and fine lines. At Caridi Concierge, we use RHA Collection and Juvederm for dermal fillers."
      />
      <DermalFillersIntroSection />
      <DermalFillersAreasSection />
      <CTASection />
      <Footer />
      </>
    );
  }