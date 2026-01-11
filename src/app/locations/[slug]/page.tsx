// app/locations/[slug]/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationDetailLayout from "@/app/sections/locations/LocationDetailLayout";
import { createPageMetadata } from "@/lib/metadata";
import { LOCATIONS } from "@/lib/constants/locations";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};

  // If you don’t have per-location SEO fields yet,
  // you can build something consistent here.
  const title = `${loc.name} | Caridi Concierge`;
  const description = loc.description;

  return createPageMetadata({
    title,
    description,
    path: `/locations/${loc.slug}`,
    keywords: ["Caridi Concierge", "Botox", "Dermal Fillers", "Brooklyn", loc.name],
    noIndex: false,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  return (
    <>
      <Navbar />
      <LocationDetailLayout loc={loc} />
      <Footer />
    </>
  );
}
