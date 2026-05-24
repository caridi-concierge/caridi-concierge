import { describe, expect, it } from "vitest";
import { treatments } from "./treatments";
import { getAllTreatmentDetails } from "./details";

/**
 * Treatments follow the same catalog + per-slug detail convention as locations.
 * The catalog (cards/grids) and the detail content (the /treatments/<slug>
 * pages) must cover the same slugs; this guard catches a catalog entry added
 * without its detail page, or vice versa.
 */
describe("treatment data integrity", () => {
  const catalogSlugs = treatments.map((t) => t.slug).sort();
  const detailSlugs = getAllTreatmentDetails().map((d) => d.slug).sort();

  it("has unique, non-empty slugs in the catalog", () => {
    expect(catalogSlugs.every((s) => s.length > 0)).toBe(true);
    expect(new Set(catalogSlugs).size).toBe(catalogSlugs.length);
  });

  it("keeps the catalog and detail content in sync by slug", () => {
    expect(catalogSlugs).toEqual(detailSlugs);
  });
});
