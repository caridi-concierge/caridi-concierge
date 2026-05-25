import BlogHero from "@/app/(site)/blog/_sections/BlogHero";
import BlogIndex from "@/app/(site)/blog/_sections/BlogIndex";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Botox, Fillers & Aftercare Guides | Caridi Concierge",
    description: "Treatment guides and aftercare notes from Dr. Caridi's NYC practice — Botox, fillers, and chemical peels, explained.",
    path: "/blog",
    keywords: ["Caridi Concierge", "Aesthetic Insights", "Aesthetic Treatments", "Guides","Dermal Fillers", "Botox", "Brooklyn", "New York City"],
    noIndex: false
});

export default function BlogIndexPage() {
  return (
    <main className="bg-ivory text-ink">
      <BlogHero />
      <BlogIndex />
    </main>
  );
}
