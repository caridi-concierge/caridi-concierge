# AGENTS.md — AI Coding Assistant Guide

This file is loaded automatically by AI coding agents (Claude, Codex, Copilot, Cursor, etc.).
It defines what this project is and how to work in it correctly.

For working style and decision-making, see `.ai/rules/doctrine.md`.
For structure and layering, see `.ai/rules/architecture.md`.
For coding conventions, see `.ai/rules/coding.md`.

---

## Project overview

**Caridi Concierge is a marketing/content website for a medical-aesthetics
practice.** It is a **Next.js 15 App Router** site (React 19, TypeScript,
Tailwind CSS v4), statically rendered where possible and deployed on Vercel.

What it is:

- A content site: pages, editorial copy, blog posts (MDX), treatment and
  location detail pages, JSON-LD structured data, and SEO metadata.
- One server endpoint: `POST /api/contact` (sends a contact email via Resend,
  with bot mitigation). See `.ai/rules/api-design.md`.

What it is **not** (do not add these without an explicit product reason):

- No database, ORM, or migrations.
- No queues, background jobs, or webhooks.
- No authentication or user accounts.
- No service / domain / infrastructure layering. This is a presentation-first
  content app; content lives as typed data and MDX, not behind repositories.

Most "logic" here is content modelling and presentation. Treat content
correctness, SEO/structured-data integrity, and the analytics tracking
contract as the things most likely to break.

---

## Environment

- **Node.js**: LTS.
- **Package manager**: **Yarn 4 (Berry)** — see `packageManager` in
  `package.json`. **Do not use npm or pnpm.** Do not create a second lockfile.

Install dependencies:

```bash
yarn install
```

The user typically runs `yarn dev` themselves. Don't auto-start the dev server;
verify changes with `yarn typecheck`, `yarn lint`, `yarn test`, and `yarn build`.

---

## Key commands

```bash
yarn dev          # local dev server (Next + Turbopack)
yarn build        # production build (also type-checks the app)
yarn start        # serve the production build
yarn typecheck    # tsc --noEmit
yarn test         # run the Vitest suite once
yarn test:watch   # Vitest in watch mode
yarn lint         # ESLint (next/core-web-vitals + next/typescript)
```

These are the scripts that exist. Do not invent others.

---

## Environment variables

Read `.env.example` for the full list. Notable ones:

- `RESEND_API_KEY` — required for the contact route to send mail.
- `TURNSTILE_SECRET_KEY` — optional; when set, the contact route enforces
  Cloudflare Turnstile verification.
- `PRICE_*` (e.g. `PRICE_BOTOX`, `PRICE_DERMAL_FILLER`) — service prices.

Prices are read **once** in `src/lib/constants/pricing.ts` (the single source
of truth) and imported elsewhere as `PRICES`. Do not re-read `process.env` for
prices in individual files or reintroduce inline price literals.

---

## Code organization

See `.ai/rules/architecture.md` for the full map. In short:

- `src/app/` — routes (App Router pages). Each route colocates its composed
  sections in a private `_sections/` folder next to `page.tsx`; the contact
  route lives in `api/`.
- `src/components/` — shared, reusable UI components, plus sections shared
  across more than one route (e.g. `FAQ`, `Results`).
- `src/content/` — editorial content as data and MDX: blog posts, reviews,
  JSON-LD schemas, and the `locations`/`treatments` entities. Each entity pairs
  summary facts with per-`slug` detail content behind one barrel — see the
  "content entity convention" in `architecture.md`.
- `src/lib/` — non-UI logic: analytics, blog file reads, metadata, and small
  shared constants (`company`, `pricing`, `ctas`, `staff`).
- `src/model/` — shared TypeScript types.

Keep presentation in components/sections, content in `content/`, and shared
constants/types in `lib/` and `model/`.

---

## Conventions that matter here

- **Pricing single-source**: import `PRICES` from
  `src/lib/constants/pricing.ts`. Never inline a price or re-read `PRICE_*`.
- **Analytics is a contract**: conversion tracking is GTM keyed on event names
  (`src/lib/analytics.ts`) and on element `id` attributes. Renaming or dropping
  an event name or a button/link `id` can silently break a configured Key
  Event. Preserve them across refactors.
- **SEO metadata**: build page metadata with `createPageMetadata` from
  `src/lib/metadata.ts` rather than hand-rolling `Metadata` objects.
- **Structured data**: JSON-LD lives in `src/content/schemas/` and is rendered
  via the `JsonLd` component. Keep schema values consistent with on-page copy
  and with `PRICES`.
- **Blog posts**: MDX files in `src/content/blog/` with exported `metadata`.
  `src/lib/blogs/posts.ts` reads them. Frontmatter/metadata shape is
  `BlogPostMeta`.
- **Images**: optimized `.webp` under `public/images/`, organized by area
  (`logos/`, `headshots/`, `treatments/`, `results/`, `icons/`).

---

## Error handling and logging

- Fail loudly; don't swallow errors or return silent defaults to hide failures.
- This project has **no structured-logging dependency**. The contact route uses
  `console.error` for server-side failures, which is acceptable for its scope.
  Do not add pino/winston or a logging framework without a reason.
- Never log credentials, tokens, or submitted personal data.

---

## Safety rules

- Never commit secrets. If you find one committed, stop and escalate.
- Preserve SEO: keep existing redirects (`next.config.ts`) and canonical URLs
  intact when moving or renaming pages.
- Avoid destructive operations without clear intent.

---

## What not to do

- Do not introduce a backend architecture (DB, services, repositories, queues)
  for a content site.
- Do not add frameworks or large dependencies for small helpers.
- Do not guess APIs — verify before using.
- Do not leave dead code, commented-out blocks, or orphaned files.
- Do not bypass linting or type checks.

---

## Definition of done

A change is complete when:

- Types are valid (`yarn typecheck`).
- Lint passes (`yarn lint`).
- Tests pass (`yarn test`).
- The production build succeeds (`yarn build`).
- Behavior is verified, not assumed.

Report exactly what you ran and the result.

---

## Rule files

- `.ai/rules/doctrine.md` — how to work
- `.ai/rules/architecture.md` — project structure and layering
- `.ai/rules/coding.md` — TypeScript / React conventions
- `.ai/rules/testing.md` — testing patterns
- `.ai/rules/api-design.md` — the contact route and any new route handlers
