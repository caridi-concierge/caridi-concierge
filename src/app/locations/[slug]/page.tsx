// app/locations/[slug]/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationDetailLayout from "@/app/sections/locations/LocationDetailLayout";
import { createPageMetadata } from "@/lib/metadata";
import { LOCATIONS } from "@/lib/constants/locations";
import { getLocationContent } from "@/content/locations";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};

  // Try to get custom metadata from content files
  const content = getLocationContent(slug);
  if (content?.metadata) {
    return createPageMetadata({
      title: content.metadata.title,
      description: content.metadata.description,
      path: `/locations/${loc.slug}`,
      keywords: content.metadata.keywords,
      noIndex: false,
    });
  }

  // Fallback to basic metadata
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