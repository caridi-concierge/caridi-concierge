import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import HeroSection from "@/app/sections/home/Hero";
import ServicesSection from "@/app/sections/home/Services";
import LocationsSection from "@/app/sections/home/Locations";
import ReviewsSection from "@/app/sections/home/Reviews";
import FAQSection from "@/app/sections/home/FAQ";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { faqSchema } from "@/content/schemas";


export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <Navbar />
      <Banner
        src="/images/home-banner-edit.webp"
        alt="Dr. Cristina Caridi providing in-home Botox and filler treatments across NYC"
      />
      <HeroSection />
      <ServicesSection />
      <LocationsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection variantKey='default' id='homepage-cta'/>
      <Footer />
    </>
  )
}