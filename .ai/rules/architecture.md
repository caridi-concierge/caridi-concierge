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
    <route>/page.tsx        # static routes (about, contact, book, ...)
    <route>/[slug]/page.tsx # dynamic routes (blog, locations, staff)
    treatments/<t>/page.tsx # one page per treatment
    api/contact/route.ts    # the only server endpoint (see api-design.md)
    robots.ts, sitemap.ts   # generated SEO files
    not-found.tsx, 401/     # error / status pages
    sections/               # page-specific composed sections, grouped by page
      home/ about/ blog/ contact/ locations/ treatments/ staff/ ...
    utils/                  # small route-local helpers

  components/               # shared, reusable, presentational UI
    icons/                  # icon components

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
| A section used by one page | `src/app/sections/<page>/` |
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
app (pages) → sections → components
     │            │
     └────────────┴──────→ content (data/MDX), lib (helpers/constants), model (types)
```

- **Pages (`app/.../page.tsx`)** stay thin: assemble sections, set metadata via
  `createPageMetadata`, render JSON-LD. No data-massaging or business logic.
- **Sections** compose components and pull in content. They are page-specific;
  if a section becomes reused across pages, promote it to `components/`.
- **Components** are presentational and reusable. Prefer receiving data via
  props. They should not import page-specific content.
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

- If a component starts importing page-specific content, the boundary is wrong —
  pass data via props or move it to `sections/`.
- If two sections need the same markup, extract a shared component.
- Don't add a database, repository, queue, or service layer to render content.
  If a feature genuinely needs persistence or background work, escalate the
  design decision before building it.
