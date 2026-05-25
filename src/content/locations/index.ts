/**
 * Public surface for location data.
 *
 * Each location lives in its own folder (`<slug>/facts.ts` + `<slug>/content.ts`),
 * keeping its summary facts and its editorial detail content together. This
 * module assembles them into the catalog and lookups the app consumes:
 * - `LOCATIONS` — the facts catalog (cards, footer, home/list grids).
 * - `getLocation(slug)` — `{ facts, content }` for the `/locations/[slug]` page.
 * - `getLocationContent(slug)` / `locationContent` — content-only accessors.
 *
 * See `.ai/rules/architecture.md` ("content entity convention"). The facts and
 * content halves are kept in sync by `locations.test.ts`.
 */
import type { LocationContent, LocationFacts } from "./types";
import { gowanus } from "./gowanus";
import { inHome } from "./in-home";
import { redHook } from "./red-hook";

const ENTRIES = [gowanus, inHome, redHook];

/** Facts catalog, in editorial order. */
export const LOCATIONS: LocationFacts[] = ENTRIES.map((e) => e.facts);

const CONTENT: Record<string, LocationContent> = Object.fromEntries(
  ENTRIES.map((e) => [e.facts.slug, e.content])
);

/** A location's facts plus its editorial content, joined by slug. */
export function getLocation(
  slug: string
): { facts: LocationFacts; content: LocationContent | null } | null {
  const facts = LOCATIONS.find((l) => l.slug === slug);
  if (!facts) return null;
  return { facts, content: CONTENT[slug] ?? null };
}

export const locationContent = CONTENT;

export function getLocationContent(slug: string): LocationContent | null {
  return CONTENT[slug] ?? null;
}
