import { getAllPosts, type BlogPostMeta } from "./posts";
import { getTreatmentDetail } from "@/content/treatments";
import type { TreatmentDetailContent } from "@/content/treatments/types";

const CATEGORY_TO_TREATMENT: Record<string, string> = {
  Botox: "wrinkle-reduction",
  "Dermal Filler": "dermal-fillers",
  "Dermal Fillers": "dermal-fillers",
  Biostimulators: "biostimulatory-fillers",
  "Chemical Peels": "chemical-peels",
};

/**
 * Resolve up to `n` related posts. Explicit picks (from `metadata.related`)
 * come first in order; the rest are filled by tag/category-overlap scoring,
 * tied by date descending.
 */
export async function resolveRelatedPosts(
  current: BlogPostMeta,
  n = 3
): Promise<BlogPostMeta[]> {
  const all = await getAllPosts();
  const candidates = all.filter((p) => p.slug !== current.slug);

  const explicit = (current.related ?? [])
    .map((slug) => candidates.find((p) => p.slug === slug))
    .filter((p): p is BlogPostMeta => Boolean(p));
  const explicitSlugs = new Set(explicit.map((p) => p.slug));

  const scored = candidates
    .filter((p) => !explicitSlugs.has(p.slug))
    .map((p) => {
      const tagOverlap = (p.tags ?? []).filter((t) =>
        (current.tags ?? []).includes(t)
      ).length;
      const sameCategory =
        p.category && current.category && p.category === current.category
          ? 1
          : 0;
      return { p, score: tagOverlap * 2 + sameCategory };
    });

  scored.sort(
    (a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1)
  );

  const filled = scored.map((s) => s.p);
  return [...explicit, ...filled].slice(0, n);
}

/**
 * Resolve a related treatment for the teal card. Uses explicit
 * `metadata.relatedTreatment` first, then category fallback.
 * Returns undefined if neither resolves.
 */
export function resolveRelatedTreatment(
  current: BlogPostMeta
): TreatmentDetailContent | undefined {
  if (current.relatedTreatment) {
    const t = getTreatmentDetail(current.relatedTreatment);
    if (t) return t;
  }
  if (current.category) {
    const slug = CATEGORY_TO_TREATMENT[current.category];
    if (slug) {
      const t = getTreatmentDetail(slug);
      if (t) return t;
    }
  }
  return undefined;
}
