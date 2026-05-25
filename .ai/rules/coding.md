# Coding Conventions

These apply to a Next.js App Router content site: React Server/Client
components, TypeScript, and typed content modules. There is no database, ORM,
queue, or service layer here — keep that in mind and don't write for one.

## TypeScript and React style

- TypeScript everywhere. Use ES modules (`import`/`export`).
- Components are React Server Components by default. Add `"use client"` only
  when a component needs browser APIs, state, effects, or event handlers
  (e.g. `ContactForm`, the SMS widget). Keep client components small and push
  them to the leaves of the tree.
- Prefer explicit exported types for shared module boundaries. Let local
  variables infer when the right-hand side is obvious.
- Avoid `any`. Use `unknown` at unsafe boundaries (parsed JSON, untyped
  payloads) and narrow it deliberately — see the contact route for the pattern.
- Prefer `const`; use `let` only when reassignment is required. Never `var`.
- Type-only modules (under `src/model/`) use the `.ts` extension and contain no
  runtime code. Don't make a type file import a component.
- Keep modules cohesive. A file should expose a small, intentional API rather
  than becoming a utility dumping ground.

## Package manager and dependencies

- **Yarn 4 only** (`yarn.lock`). Do not use npm/pnpm or create a second
  lockfile.
- Before adding a dependency, check whether the project or the platform already
  covers it. Do not add a framework or large library for a small helper.
- Keep dependency changes minimal and explain why a new one is needed.

## No fabrication

- Do not invent package APIs, Next.js hooks, route names, env vars, or npm
  scripts. The scripts that exist are `dev`, `build`, `start`, `typecheck`,
  `test`, `test:watch`, `lint`.
- Read the relevant source, types, or existing usage before calling an
  unfamiliar function. Verify with grep/TypeScript before depending on an API.

## Functions and modules

- Functions should do one thing. If a name needs "and", split it.
- Prefer pure functions for anything non-trivial; keep them easy to unit-test.
- Isolate side effects at the edges: filesystem reads (`lib/blogs/posts.ts`),
  `window`/dataLayer access (`lib/analytics.ts`), `process.env`, and network
  calls (the contact route).
- Pass structured objects between layers. Return empty arrays/objects instead
  of `null` where it reads naturally. Don't return `undefined` from a public
  API unless the type says absence is expected.
- Use discriminated unions for closed result/state shapes.

## Content as data

- Page content lives as typed data in `src/content/` (or MDX for blog posts),
  not hardcoded inside components. Components and sections render content
  passed to them.
- Each content area exposes a typed registry/lookup in its `index.ts`
  (e.g. `getTreatmentDetail(slug)`, `getLocationContent(slug)`). Add new
  content by extending the registry, not by special-casing pages.
- Reuse the established content shapes (the types in `src/model/` and the
  per-area `types.ts`). Don't fork a near-duplicate shape.

## Async and concurrency

- Always `await` promises unless intentionally parallelizing.
- When parallelizing, use `Promise.all` / `Promise.allSettled` and make failure
  behavior explicit (see `getAllPosts`).
- Don't use `Array.prototype.forEach` with async callbacks — use `for...of` or
  `Promise.all`.
- Don't swallow rejected promises. Handle or propagate.

## Error handling

- Fail loudly. Don't catch errors to return empty/default values that hide a
  failure, and don't add fallback data to mask errors.
- `catch (error)` must rethrow, translate to a meaningful error, or add context.
  Preserve causal chains with `cause` when wrapping.
- Never expose stack traces, credentials, tokens, or raw provider responses to
  the client. The contact route's pattern — loud `400` for malformed input,
  generic `500` on send failure, `console.error` server-side — is the model.

## Validation and boundaries

- Validate untrusted input at the boundary: the contact route validates request
  bodies before use, and env vars are parsed where they're read.
- This project validates by hand (type guards + checks), not with a schema
  library. Match that style in the existing route. If you introduce a schema
  validator for a new boundary, justify the dependency first.
- Treat all request data as untrusted, including headers.

## Configuration and environment

- Env vars are untrusted strings; parse/validate them where read.
- **Prices** are the one place with a central config module:
  `src/lib/constants/pricing.ts` reads each `PRICE_*` once and exports `PRICES`.
  Always import `PRICES`; never re-read `process.env` for a price or inline a
  price literal.
- Other env reads (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`) live next to their
  single use in the contact route. That's acceptable at this size; don't scatter
  the same env var across multiple files.

## Logging

- There is no structured-logging dependency, and that's intentional for a site
  this size. Server-side failures in the contact route use `console.error`.
- Do not add pino/winston or sprinkle `console.log` through components.
- Never log credentials, tokens, or submitted personal data.

## Analytics and SEO (project-specific contracts)

- Conversion tracking is GTM keyed on the event names in `lib/analytics.ts` and
  on element `id` attributes. Preserve both across refactors — renaming or
  dropping them can silently break a Key Event.
- Build page metadata with `createPageMetadata` (`src/lib/metadata.ts`).
- Keep JSON-LD schema values (`src/content/schemas/`) consistent with on-page
  copy and with `PRICES`.

## Formatting and cleanup

- Use the repo's ESLint/TypeScript config. Don't introduce competing style
  rules or reformat unrelated files.
- Remove unused imports, dead code, commented-out blocks, and orphaned files
  as part of your change. Keep diffs focused.
