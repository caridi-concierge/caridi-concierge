import { describe, expect, it } from "vitest";
import { LOCATIONS, locationContent } from "./index";

/**
 * The two halves of a location (facts catalog + editorial detail content) are
 * separate by design but must describe the same set of slugs. This guard fails
 * if one half gains or loses a location without the other — the drift this
 * directory structure exists to prevent.
 */
describe("location data integrity", () => {
  const factSlugs = LOCATIONS.map((l) => l.slug).sort();
  const contentSlugs = Object.keys(locationContent).sort();

  it("has unique, non-empty slugs in the facts catalog", () => {
    expect(factSlugs.every((s) => s.length > 0)).toBe(true);
    expect(new Set(factSlugs).size).toBe(factSlugs.length);
  });

  it("keeps the facts catalog and detail content in sync by slug", () => {
    expect(factSlugs).toEqual(contentSlugs);
  });

  it("stores each detail content under its own slug key", () => {
    for (const [key, content] of Object.entries(locationContent)) {
      expect(content.slug).toBe(key);
    }
  });
});
