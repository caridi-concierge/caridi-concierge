import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/app/sections/home/Hero";
import ServicesSection from "@/app/sections/home/ServicesSection";
import Locations from "@/app/sections/home/Locations";
import Reviews from "@/app/sections/home/Reviews";
import FAQ from "@/app/sections/home/FAQ";
import CTA from "@/app/sections/home/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner
        src="/images/home-banner-edit.jpg"
        alt="Dr. Cristina Caridi providing in-home Botox and filler treatments across NYC"
      />
      <Hero />
      <ServicesSection />
      <Locations />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}