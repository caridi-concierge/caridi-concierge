# Testing Conventions

The test runner is **Vitest**. Tests run under Node and exercise pure logic and
typed content — there is no database, server bootstrap, or browser layer to
spin up. Keep tests fast and deterministic.

## Commands

```bash
yarn test          # run the suite once (vitest run)
yarn test:watch    # watch mode
yarn typecheck     # tsc --noEmit
yarn lint          # ESLint
yarn build         # production build (also type-checks)
```

## Layout

- Co-locate tests with the code they cover, named `*.test.ts`
  (e.g. `src/lib/metadata.test.ts` next to `src/lib/metadata.ts`).
- Vitest picks up `src/**/*.test.ts` (see `vitest.config.ts`). The `@/` alias
  resolves the same way it does in the app.
- The test environment is `node`. There is no React/DOM test layer yet; if a
  component test genuinely needs the DOM, add `jsdom` and a testing-library, set
  `environment: "jsdom"` in the config, and explain the additions.

## What to test

Prioritize logic with a real contract:

- **Pure helpers** in `src/lib/` — e.g. `createPageMetadata` (canonical/OG URL
  building, conditional keywords/robots), related-post resolution
  (`lib/blogs/related.ts`), the analytics `pushEvent` dataLayer behavior.
- **Content registries and lookups** — `getTreatmentDetail`,
  `getLocationContent`, and that every catalog entry has a matching detail
  entry and a valid slug. These guards catch content drift cheaply.
- **Structured-data/schema builders** — that JSON-LD output reflects `PRICES`
  and stays consistent with displayed copy.
- **Contact route logic** — the bot heuristics and validation in
  `src/app/api/contact/route.ts`: honeypot, timing window, and field
  validation. Stub the Resend client and `fetch` (Turnstile); never send real
  mail or make network calls in a test.

## What not to test

- Framework behavior, library behavior, generated code.
- Trivial type-only modules, getters, or pass-through wrappers.
- Don't chase a coverage percentage by testing presentational markup. Assert
  behavior and contracts, not incidental render details.

## Style

- Arrange / Act / Assert, separated by blank lines.
- Prefer table-driven tests (`it.each`) for variants of one behavior.
- Assert outcomes and contracts, not implementation details. For errors, assert
  the status/shape (the contact route returns specific status codes and bodies).
- Use small inline fixtures or builders; avoid giant shared fixtures.
- Mock only what crosses a boundary: the mail client, `fetch`, the filesystem,
  `window`/`dataLayer`, and the clock. Use fake timers for the timing checks and
  reset them after each test. Keep content/value objects real.
- Tests must not depend on wall-clock time, randomness, network, or execution
  order.

## When fixing a bug

Add a regression test that fails before the fix and passes after.
