# API Design Rules

## URL conventions

- Use nouns, plural, kebab-case: `/orders`, `/line-items`, `/payment-methods`.
- Nest resources only one level deep: `/orders/{id}/items` — avoid deeply nested routes.
- Avoid verbs in URLs. Use HTTP methods to express actions.
- Prefer explicit resource names over vague catch-all routes.

## HTTP methods

| Method | Semantics | Body | Response |
| --- | --- | --- | --- |
| GET | Fetch resource(s) | None | 200 + body |
| POST | Create resource | Yes | 201 + body and/or Location header |
| PUT | Full replace | Yes | 200 + body |
| PATCH | Partial update | Yes | 200 + body |
| DELETE | Remove | Usually none | 204 |

Prefer PATCH over PUT for most updates. PUT requires the full resource and can create lost-update races if clients send stale representations.

## Request / response format

- All request and response payloads are JSON.
- Use `Content-Type: application/json` for JSON requests.
- Field names are `camelCase` in JSON.
- Dates and times are ISO 8601 strings, preferably UTC: `2026-04-25T14:30:00Z`.
- Do not return internal persistence models directly.
- Use explicit request and response DTO/schema types at the API boundary.
- Avoid returning `undefined`; JSON cannot represent it. Omit conditionally absent fields or use `null` only when the schema explicitly allows it.

## Validation

- Validate inputs at the boundary before calling service/domain logic.
- Use a schema validator such as Zod, Valibot, Yup, or the project-standard equivalent.
- Keep validation schemas close to the route/controller layer unless they are reused across multiple boundaries.
- Domain objects still enforce their own invariants. Boundary validation is not a replacement for domain correctness.

Example shape:

```ts
const createOrderSchema = z.object({
  customerId: z.string().min(1),
  lineItems: z.array(z.object({
    sku: z.string().min(1),
    quantity: z.number().int().positive(),
  })).min(1),
});
```

## Error responses

Use a consistent JSON error envelope for all API errors.

Recommended shape:

```json
{
  "type": "https://errors.example.com/not-found",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "Order 42 does not exist.",
  "requestId": "req_123"
}
```

For validation errors, include a field-level `errors` array:

```json
{
  "type": "https://errors.example.com/validation-error",
  "title": "Validation Error",
  "status": 400,
  "detail": "Request validation failed.",
  "errors": [
    { "field": "email", "message": "Invalid email address" }
  ]
}
```

- Map typed/domain errors to HTTP status codes in one central error handler.
- Do not hand-roll different error shapes per route.
- Do not leak stack traces, raw provider errors, credentials, tokens, or internal implementation details.

## HTTP status codes

Standard mappings:

- 400: malformed request or validation failure
- 401: unauthenticated
- 403: authenticated but forbidden
- 404: resource not found
- 409: conflict, duplicate key, optimistic lock, invalid state transition
- 422: semantically invalid request that is syntactically valid
- 429: rate limited
- 500: unexpected server error
- 502: upstream service returned an invalid/error response
- 503: service temporarily unavailable
- 504: upstream timeout

## Pagination

Use explicit pagination parameters.

Offset pagination:

```text
?page=0&size=25
```

Cursor pagination:

```text
?cursor=abc123&limit=25
```

Prefer cursor pagination for large or frequently changing datasets.

Response shape:

```json
{
  "items": [],
  "page": 0,
  "size": 25,
  "totalItems": 100,
  "totalPages": 4
}
```

For cursor pagination:

```json
{
  "items": [],
  "nextCursor": "abc123",
  "hasMore": true
}
```

- Cap `size` or `limit` by default.
- Document endpoints with unusually high caps.

## Filtering and sorting

- Filter via query parameters: `?status=active&createdAfter=2026-01-01`.
- Sort via `?sort=createdAt,desc`.
- For multiple sorts, repeat the parameter: `?sort=status,asc&sort=createdAt,desc`.
- Whitelist sortable and filterable fields. Never pass arbitrary field names directly into a database query.

## Versioning

- Prefer stable contracts over frequent version bumps.
- For public APIs, version via URL path prefix: `/v1/orders`.
- Do not break an existing API contract within a major version.
- Document breaking changes before implementing them.

## Security

- Authenticate before authorization.
- Authorize per resource, not just per route.
- Do not trust client-provided user IDs, account IDs, roles, or permissions.
- Treat all request data as untrusted, including headers and query params.
- Avoid putting secrets, tokens, or sensitive data in URLs.

## Idempotency

- For externally-triggered create operations that may be retried, support an idempotency key.
- Store and enforce idempotency by operation scope and caller identity.
- Make webhook handlers idempotent by default.

## Webhooks

- Verify webhook signatures before parsing business payloads.
- Store provider event IDs and ignore duplicate events.
- Respond quickly; move expensive work to a queue/job when appropriate.
- Log event IDs and provider names, not raw sensitive payloads.

## What we do not do

- No HATEOAS unless a specific client needs it.
- No ad hoc response envelopes that differ per route.
- No bulk create/update/delete unless explicitly designed for that endpoint.
- No leaking ORM/database entities through API responses.
