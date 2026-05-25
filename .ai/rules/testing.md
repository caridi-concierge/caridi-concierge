# Testing Conventions

## Test separation

| Type | Common location | Suffix | Purpose |
| --- | --- | --- | --- |
| Unit | `src/**/__tests__/` or `tests/unit/` | `*.test.ts` | Fast, isolated logic |
| Integration | `tests/integration/` or colocated `*.int.test.ts` | `*.int.test.ts` | Real boundaries: DB, queues, HTTP clients, API routes |
| End-to-end | `tests/e2e/` | `*.e2e.test.ts` | Critical user flows across the running app |

Use the repo's existing convention if one already exists. Do not introduce a second test layout without a reason.

## Commands

Use Yarn only.

```bash
yarn test          # test suite
yarn test:unit     # unit tests, if configured
yarn test:int      # integration tests, if configured
yarn test:e2e      # end-to-end tests, if configured
yarn lint          # lint checks
yarn typecheck     # TypeScript checks
yarn build         # production build
```

If the repo has different script names, inspect `package.json` and use the actual scripts. Do not invent commands.

## Coverage rule

Public behavior must be covered by tests. Prioritize:

- service orchestration
- domain invariants
- API status codes and response shapes
- validation and error handling
- persistence queries or data access logic
- external integration adapters
- critical background jobs and webhook handlers

Do not chase coverage percentage by testing getters, generated code, framework behavior, or trivial pass-throughs.

## Unit tests

- Unit tests should be fast and deterministic.
- Mock collaborators that cross architectural boundaries: databases, queues, HTTP clients, file systems, provider SDKs, and clocks.
- Use real domain/value objects within the same bounded context.
- Keep tests structured as Arrange / Act / Assert separated by blank lines.
- Prefer table-driven tests for variants of the same behavior.
- Avoid snapshots for complex behavior unless the snapshot is small, intentional, and reviewed like code.

Example table-driven shape:

```ts
describe('normalizeKeyword', () => {
  it.each([
    [' Botox Near Me ', 'botox near me'],
    ['lip-filler', 'lip filler'],
  ])('normalizes %s', (input, expected) => {
    expect(normalizeKeyword(input)).toBe(expected);
  });
});
```

## Integration tests

- Use the real database/schema for persistence tests when feasible.
- Prefer test containers or ephemeral local services for databases, queues, and caches.
- Do not mock the database in integration tests.
- Reset state between tests with transactions, truncation, isolated schemas, or fresh test data.
- Keep integration tests narrower than full end-to-end tests when possible.
- Stub third-party APIs unless the test is explicitly verifying provider connectivity.

## API tests

- Test status codes, response shape, headers where relevant, and important body fields.
- Test validation failures and domain error mappings.
- Test authorization boundaries where applicable.
- Do not assert on incidental implementation details.

For route handlers, use the framework's recommended test approach:

- Next.js: test pure handlers/services directly where possible; use integration tests for route behavior.
- Express/Fastify/Hono: use request-level tests with the app instance and an HTTP test client.

## Time and clocks

- Inject or centralize time access instead of calling `new Date()` throughout business logic.
- Tests that depend on time must use a fixed clock or fake timers.
- Reset fake timers after each test.
- Store backend timestamps in UTC.

## Test data

- Use small builders/factories for repeated setup.
- Builders should provide sensible defaults and let tests override only what matters.
- Avoid giant shared fixtures that make tests hard to understand.
- Keep test data local to the test unless it is truly reused.

Example:

```ts
const order = buildOrder({ status: 'paid', totalCents: 5000 });
```

## Assertions

- Assert outcomes, not implementation details.
- Prefer precise assertions over broad snapshots.
- For errors, assert the error type/code and meaningful message.
- For arrays, assert order only when order is part of the contract.

## Naming

- Test names should describe behavior: `returns 404 when order is missing`.
- Test files should mirror the subject: `order-service.test.ts`, `orders-route.int.test.ts`.
- Use `describe` blocks to group by module and method/use case.

## What we do not test

- Framework behavior.
- Library behavior.
- Generated code.
- Simple type-only definitions.
- Trivial getters/setters or pass-through wrappers unless they encode a contract.

## What we always test

- Domain invariants and edge cases.
- Service orchestration with mocked external boundaries.
- API validation, status codes, and response shapes.
- Custom database queries or data mapping.
- Webhook idempotency and signature failure paths.
- Background jobs that mutate state or call external systems.
