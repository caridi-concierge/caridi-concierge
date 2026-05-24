import Navbar from "@/components/Navbar";
import HeroSection from "@/app/_sections/Hero";
import PhilosophySection from "@/app/_sections/Philosophy";
import TreatmentsSection from "@/app/_sections/Treatments";
import LocationsSection from "@/app/_sections/Locations";
import ResultsSection from "@/components/Results";
import ReviewsSection from "@/app/_sections/Reviews";
import FAQSection from "@/components/FAQ";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { faqSchema } from "@/content/schemas";
import { SMSContactWidget } from "@/components/SMSContactWidget";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Caridi Concierge | Luxury Aesthetic Treatments in NYC",
    description: "Caridi Concierge offers premium, in-home aesthetic treatments in NYC. From botox to fillers, experience luxury skincare at your convenience. Book today!",
    path: "/",
    image: "/images/headshots/cc_headshot_white_hq_crop_edit.webp",
    imageAlt: "Dr. Cristina Caridi, founder of Caridi Concierge",
    keywords: ["Caridi Concierge", "Botox NYC", "Fillers NYC", "In-Home Treatments", "Aesthetic Medicine", "Brooklyn Aesthetics", "New York City Aesthetics"],
    noIndex: false
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <TreatmentsSection />
      <LocationsSection />
      <ResultsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection variantKey="default" id="homepage-cta" />
      <Footer />
      <SMSContactWidget />
    </>
  );
}
