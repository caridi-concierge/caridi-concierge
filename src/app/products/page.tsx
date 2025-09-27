
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import ProductsSection from "@/app/sections/products/Products";
import { productListSchema } from "@/content/schemas";
import { JsonLd } from "@/components/JsonLD";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Botox, Daxxify, RHA & Radiesse – Advanced Aesthetic Treatments",
    description: "Discover botox and fillers at Caridi Concierge. Smooth wrinkles, restore volume, and enhance your natural beauty with expert treatments.",
    path: "/products",
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Botox", "Daxxify", "Xeomin", "RHA", "Radiesse", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function ProductsPage() {
    return (
      <>
      <JsonLd schema={productListSchema} />
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