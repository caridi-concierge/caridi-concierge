# Architecture Rules

This is a **Next.js 15 App Router content/marketing site** (React 19,
TypeScript, Tailwind v4). It has no database, services layer, or domain layer.
Most code either renders content or models content as typed data.

Use the existing structure. When adding code, put it where its kind already
lives rather than inventing a new top-level area.

## Project structure

```text
src/
  app/                      # App Router: one folder per route
    layout.tsx              # root layout, fonts, global JSON-LD, GTM
    page.tsx                # home
    _sections/              # home page's sections (Hero, Philosophy, ...)
    api/contact/route.ts    # the only server endpoint (see api-design.md)
    robots.ts, sitemap.ts   # generated SEO files
    not-found.tsx, 401/     # error / status pages
    <route>/
      page.tsx              # the route's page
      [slug]/page.tsx       # nested dynamic route, where applicable
      _sections/            # this route subtree's composed sections
    utils/                  # small route-local helpers

  components/               # shared, reusable, presentational UI
    icons/                  # icon components
    # ...also home of sections shared across route subtrees (e.g. FAQ, Results)

  content/                  # editorial content as data + MDX (no app logic)
    blog/*.mdx              # blog posts; each exports `metadata`
    locations/              # per-location content + types + index registry
    treatments/             # treatment catalog + per-treatment detail + index
    reviews/                # review data
    schemas/                # JSON-LD structured data (+ treatments/ FAQ schemas)

  lib/                      # non-UI logic and shared constants
    analytics.ts            # GTM dataLayer helper (tracking contract)
    metadata.ts             # createPageMetadata() — SEO metadata builder
    blogs/                  # blog file reads (fs), related-post + schema logic
    constants/              # company, pricing, ctas, locations, staff

  model/                    # shared TypeScript types only (no runtime code)

  styles/global.css         # Tailwind v4 entry + global styles
  mdx-components.tsx        # MDX element → component mapping
```

## What goes where

| Code | Location |
| --- | --- |
| A new page/route | `src/app/<route>/page.tsx` |
| A section used by one route subtree | `src/app/<route>/_sections/` (colocated) |
| A section shared across route subtrees | `src/components/` |
| A component reused across pages | `src/components/` |
| Editorial copy / data for a page | `src/content/` |
| A blog post | `src/content/blog/<slug>.mdx` |
| JSON-LD structured data | `src/content/schemas/` |
| A shared constant (company info, CTAs, prices) | `src/lib/constants/` |
| A shared helper (analytics, metadata, blog reads) | `src/lib/` |
| A shared type | `src/model/` |
| The contact endpoint or a new route handler | `src/app/api/<name>/route.ts` |

## Layering and dependency rules

Dependencies flow from presentation toward content/constants — never the
reverse:

```text
app (pages) → _sections → components
     │            │
     └────────────┴──────→ content (data/MDX), lib (helpers/constants), model (types)
```

- **Pages (`app/.../page.tsx`)** stay thin: assemble sections, set metadata via
  `createPageMetadata`, render JSON-LD. No data-massaging or business logic.
- **Sections live next to the route that uses them**, in a colocated
  `_sections/` folder. The `_` prefix makes it a Next.js *private folder*,
  excluded from routing — only `page`/`route`/`layout` etc. become routes.
  Sections compose components and pull in content. A section folder belongs to
  a route subtree: detail routes (`[slug]`, per-treatment pages) nest under
  their index segment, so the parent's `_sections/` is shared by the whole
  subtree (e.g. `app/treatments/_sections/TreatmentDetailLayout` serves all the
  treatment detail pages).
- **When a section is used by more than one route subtree, it's no longer a
  section — promote it to `components/`** (e.g. `FAQ`, `Results`). Don't reach
  across into another route's `_sections/`.
- **Components** are presentational and reusable. Prefer receiving data via
  props. They should not import a specific route's content or sections.
- **`content/`** is pure typed data and MDX. No React logic beyond MDX, no
  side effects. Each content area exposes an `index.ts` registry with a typed
  lookup (e.g. `getLocationContent(slug)`, `getTreatmentDetail(slug)`).
- **`lib/`** holds shared helpers and constants. Isolate side effects here:
  filesystem reads (`lib/blogs/posts.ts`), `window`/dataLayer access
  (`lib/analytics.ts`), and `process.env` reads (`lib/constants/pricing.ts`).
- **`model/`** is types only — no runtime code, no imports of components.

## Conventions tied to the architecture

- **Single source of truth for prices**: `src/lib/constants/pricing.ts`. Every
  price-displaying surface (treatment catalog, JSON-LD `Service` schemas, FAQ
  copy) imports `PRICES`. Do not re-read `process.env` or inline literals.
- **Analytics tracking contract**: event names in `lib/analytics.ts` and
  element `id` attributes are consumed by GTM. Treat them as a contract;
  renaming/removing can silently break conversion tracking.
- **SEO is load-bearing**: keep canonical URLs (`createPageMetadata`),
  `next.config.ts` redirects, `sitemap.ts`, and `robots.ts` consistent when
  moving or renaming pages.

## Practical rules

- If a component starts importing a specific route's content, the boundary is
  wrong — pass data via props or move it into that route's `_sections/`.
- If two route subtrees need the same section, promote it to `components/`
  rather than importing across `_sections/` folders.
- A new page's sections start in its own `_sections/`; only graduate them to
  `components/` once a second route actually needs them.
- Don't add a database, repository, queue, or service layer to render content.
  If a feature genuinely needs persistence or background work, escalate the
  design decision before building it.
