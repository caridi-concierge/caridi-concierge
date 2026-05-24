// app/locations/[slug]/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationDetailLayout from "@/app/locations/_sections/LocationDetailLayout";
import { createPageMetadata } from "@/lib/metadata";
import { LOCATIONS, getLocation } from "@/content/locations";
import { SMSContactWidget } from "@/components/SMSContactWidget";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  const { facts, content } = location;

  // Prefer the per-location editorial metadata when present.
  if (content?.metadata) {
    return createPageMetadata({
      title: content.metadata.title,
      description: content.metadata.description,
      path: `/locations/${facts.slug}`,
      keywords: content.metadata.keywords,
      noIndex: false,
    });
  }

  // Fallback to basic metadata derived from the facts.
  return createPageMetadata({
    title: `${facts.name} | Caridi Concierge`,
    description: facts.description,
    path: `/locations/${facts.slug}`,
    keywords: ["Caridi Concierge", "Botox", "Dermal Fillers", "Brooklyn", facts.name],
    noIndex: false,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <>
      <Navbar />
      <LocationDetailLayout loc={location.facts} />
      <Footer />
      <SMSContactWidget />
    </>
  );
}
