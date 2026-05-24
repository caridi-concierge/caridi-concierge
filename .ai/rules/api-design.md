# API Design Rules

This site has **one** server endpoint: `POST /api/contact`
(`src/app/api/contact/route.ts`), a Next.js Route Handler that emails a contact
submission via Resend with bot mitigation. There is no REST resource model, no
database, and no versioned public API.

These rules describe how that route behaves and how to write any new route
handler consistently with it. Don't import REST/CRUD/DTO/repository patterns
from a backend — match what's here.

## Route handler principles

- Keep the handler thin and linear: parse the body, reject bots, validate
  input, do the one side effect, return.
- Validate untrusted input at the boundary. This project validates **by hand**
  (type guards, length caps, a regex for email) rather than with a schema
  library. Keep that style; if you add a validator, justify the dependency.
- Treat all request data as untrusted, including headers (`CF-Connecting-IP`).
- Fail loudly for genuinely bad input; never leak stack traces, the Resend
  error, or secrets to the client. Log server-side failures with
  `console.error` (no structured logger here).
- Keep secrets in env vars (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`), never in
  URLs or responses.

## Request / response format

- JSON in, JSON out. Field names are `camelCase`.
- The response shape is a small, consistent envelope — **not** an RFC-7807
  problem document. Reuse it for any new route:

```ts
// success
{ success: true, accepted: true }
// accepted but intentionally dropped (see bot handling)
{ success: true, accepted: false }
// client error
{ success: false, error: "Validation failed.", fields: ["email"] }
// server error
{ success: false }
```

## The contact endpoint contract

Request body fields: `firstName`, `lastName`, `email`, `message` (required);
`phone`, `prefer` (optional); `company`, `t`, `turnstileToken` (anti-bot, see
below).

Status codes and bodies:

| Situation | Status | Body |
| --- | --- | --- |
| Body isn't valid JSON | 400 | `{ success: false, error: "Invalid request body." }` |
| Bot caught by honeypot or timing | 200 | `{ success: true, accepted: false }` |
| Turnstile verification fails (when enabled) | 400 | `{ success: false, error: "Verification failed. Please try again." }` |
| Field validation fails | 400 | `{ success: false, error: "Validation failed.", fields: [...] }` |
| Email sent | 200 | `{ success: true, accepted: true }` |
| Resend send throws | 500 | `{ success: false }` |

## Bot mitigation (deliberate behavior — preserve it)

The form is bot-heavy, so the route layers cheap defenses and favors human-only
conversions. Three checks, in order:

1. **Honeypot** — a hidden `company` field real users never fill. If present,
   the submission is dropped.
2. **Timing** — the client sends `t`, the render timestamp. A submission faster
   than `MIN_FILL_MS` (2s) or older than `MAX_AGE_MS` (24h) is dropped.
3. **Cloudflare Turnstile** — only enforced when `TURNSTILE_SECRET_KEY` is set.

Honeypot and timing failures return **`200 { accepted: false }`**, not an error.
This is intentional: a silent accept gives bots no error signal to adapt to, and
the client suppresses the `generate_lead` analytics event when `accepted` is
false. A Turnstile failure, by contrast, returns a loud `400` so a real user
with a blocked challenge can retry. Keep this asymmetry.

## Idempotency and methods

- The route only handles `POST`. Sending a contact email is fire-and-forget;
  there is no idempotency key, which is acceptable at this scope.
- If you add a route that mutates durable state or must be safely retried,
  raise the idempotency design before building it.

## When adding a new route handler

- Put it at `src/app/api/<name>/route.ts`.
- Reuse the `{ success, ... }` envelope and the validate-then-act structure.
- Add tests for the validation and error branches (stub the side effect).
- Don't introduce a database, ORM, or queue to satisfy a feature without first
  escalating that architectural decision.
