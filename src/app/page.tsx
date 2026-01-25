import Navbar from "@/components/Navbar";
// import Banner from "@/components/Banner";
import HeroSection from "@/app/sections/home/Hero";
import TreatmentsSection from "@/app/sections/home/Treatments";
import LocationsSection from "@/app/sections/home/Locations";
import ReviewsSection from "@/app/sections/home/Reviews";
import FAQSection from "@/app/sections/home/FAQ";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { faqSchema } from "@/content/schemas";
import { SMSContactWidget } from "@/components/SMSContactWidget";
import CarouselBanner from "@/components/CarouselBanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Caridi Concierge | Luxury Aesthetic Treatments in NYC",
    description: "Caridi Concierge offers premium, in-home aesthetic treatments in NYC. From botox to fillers, experience luxury skincare at your convenience. Book today!",
    path: "/",
    keywords: ["Caridi Concierge", "Botox NYC", "Fillers NYC", "In-Home Treatments", "Aesthetic Medicine", "Brooklyn Aesthetics", "New York City Aesthetics"],
    noIndex: false
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <Navbar />
      {/* <Banner
        src="/images/home-banner-edit.webp"
        alt="Dr. Cristina Caridi providing in-home Botox and filler treatments across NYC"
      /> */}
      <CarouselBanner
        slides={[
          {
            src: "/images/home-banner-edit.webp",
            alt: "Dr. Cristina Caridi providing in-home Botox and filler treatments across NYC",
          }
        ]}
      />
      <HeroSection />
      <LocationsSection />
      <TreatmentsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection variantKey='default' id='homepage-cta'/>
      <Footer />
      <SMSContactWidget />
    </>
  )
}