import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import DermalFillersIntroSection from "@/app/sections/treatments/dermal-fillers/DermalFillersIntro";
import DermalFillersAreasSection from "@/app/sections/treatments/dermal-fillers/DermalFillersAreas";
import { JsonLd } from "@/components/JsonLD";
import { dermalFillerServiceSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";

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
      <JsonLd schema={dermalFillerServiceSchema}/>
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