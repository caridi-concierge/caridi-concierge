import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import HeroSection from "@/app/sections/home/Hero";
import ServicesSection from "@/app/sections/home/Services";
import LocationsSection from "@/app/sections/home/Locations";
import ReviewsSection from "@/app/sections/home/Reviews";
import FAQSection from "@/app/sections/home/FAQ";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner
        src="/images/home-banner-edit.jpg"
        alt="Dr. Cristina Caridi providing in-home Botox and filler treatments across NYC"
      />
      <HeroSection />
      <ServicesSection />
      <LocationsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection variantKey='default'/>
      <Footer />
    </>
  )
}