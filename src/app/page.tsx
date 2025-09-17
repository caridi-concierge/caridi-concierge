import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/app/sections/home/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner
        src="/images/home-banner-edit.jpg"
        alt="Dr. Cristina Caridi providing in-home Botox and filler treatments across NYC"
      />
      <Hero />
    </>
  )
}