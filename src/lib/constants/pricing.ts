/**
 * Single source of truth for service pricing.
 *
 * Each `PRICE_*` env var is read once here, at module load (server/build time),
 * with a fallback. Every price-displaying surface — the treatments catalog, the
 * JSON-LD Service schemas, and FAQ copy — must import from here rather than
 * re-reading `process.env`, so a price changes in exactly one place.
 *
 * Env var names match production; do not rename without updating prod env.
 */
const price = (value: string | undefined, fallback: number): number =>
  Number(value ?? fallback);

export const PRICES = {
  consult: price(process.env.PRICE_CONSULT, 150),
  botox: price(process.env.PRICE_BOTOX, 12),
  dermalFiller: price(process.env.PRICE_DERMAL_FILLER, 600),
  biostimulatoryFiller: price(process.env.PRICE_BIOSTIMULATORY_FILLER, 850),
  chemicalPeel: price(process.env.PRICE_CHEMICAL_PEELS, 400),
} as const;

  // Packages — explicit because the relationship to base is a real rule, not a guess
export const PACKAGES = {
  peelSeries3: { from: PRICES.chemicalPeel * 3, label: "Series of three" },
  peelBody:    { from: 800, label: "VI Peel Body" }, // distinct, not derived
} as const;