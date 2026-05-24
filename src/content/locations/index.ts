/**
 * Public surface for location data.
 *
 * A location has two parts, both keyed by `slug`:
 * - the facts catalog (`LOCATIONS`) — identity, address, hours, CTAs, hero —
 *   used by cards, the footer, and the home/list grids.
 * - the per-location editorial detail content (`getLocationContent`) rendered
 *   on the `/locations/[slug]` page.
 *
 * See `.ai/rules/architecture.md` ("content entity convention"). The slug sets
 * of the two halves are kept in sync by `locations.test.ts`.
 */
export { LOCATIONS, type Location } from "./locations";
export { locationContent, getLocationContent } from "./details";
export * from "./types";
