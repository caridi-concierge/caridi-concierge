
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/app/sections/products/CTA";
import ProductsSection from "@/app/sections/products/Products";

export default function ProductsPage() {
    return (
      <>
      <Navbar />
      <Banner
        src="/images/products-banner.jpg"
        alt="Caridi Concierge uses the following products for aesthetic treatments. 
        For botox treatments, we use Botox, Daxxify, Xeomin, and Juvederm. 
        For dermal fillers, we use RHA Collection and Juvederm. 
        For biostimulatory fillers, we use Radiesse."
      />
      <ProductsSection />
      <CTASection />
      <Footer />
      </>
    );
  }