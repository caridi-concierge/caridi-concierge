import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/app/sections/blog/BlogHero";
import BlogIndex from "@/app/sections/blog/BlogIndex";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Aesthetic Insights | Caridi Concierge Blog",
    description: "Stay informed with expert tips on wrinkle reduction and fillers. The Caridi Concierge blog keeps you up to date on the latest in aesthetics.",
    path: "/blog",
    keywords: ["Caridi Concierge", "Aesthetic Insights", "Aesthetic Treatments", "Guides","Dermal Fillers", "Botox", "Brooklyn", "New York City"],
    noIndex: false
});

export default function BlogIndexPage() {
  return (
    <main className="bg-ivory text-ink">
      <Navbar />
      <BlogHero />
      <BlogIndex />
      <Footer />
    </main>
  );
}
