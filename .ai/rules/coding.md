# Coding Conventions

## Node.js and TypeScript style
- Prefer **TypeScript** for application code. Avoid plain JavaScript unless the file is already JavaScript or the project intentionally does not use TypeScript.
- Use the Node.js version declared by the project (`.nvmrc`, `.node-version`, `volta`, `engines.node`, or the package manager config). Do not silently upgrade runtime assumptions.
- Use ES modules (`import` / `export`) when the project is configured for them. Do not mix CommonJS and ESM unless existing code already does.
- Prefer explicit exported types for public module boundaries. Let local variables infer types when the right-hand side is obvious.
- Avoid `any`. Use `unknown` at unsafe boundaries and narrow it deliberately.
- Prefer `const` by default. Use `let` only when reassignment is required. Do not use `var`.
- Keep modules cohesive. A file should expose a small, intentional API rather than becoming a utility dumping ground.
- Do not introduce global mutable state unless it is a deliberate process-level singleton such as a logger, metrics client, or connection pool.

## Package manager and dependencies
- Use the package manager already chosen by the repo. Detect it from the lockfile:
  - `pnpm-lock.yaml` → `pnpm`
  - `yarn.lock` → `yarn`
  - `package-lock.json` → `npm`
- Do not create a second lockfile.
- Before adding a dependency, check whether the project already has a suitable utility or platform API.
- Do not add large framework dependencies for small helpers.
- Keep dependency changes minimal and explain why any new dependency is needed.

## No fabrication
- Do not invent package APIs, framework hooks, route names, environment variables, or npm scripts.
- Read the relevant source, types, docs, or existing usage before calling an unfamiliar function.
- If an API might not exist, verify it with grep, TypeScript, tests, or package docs before writing code that depends on it.
- Syntactically-correct code calling a nonexistent method is a common failure mode. Avoid it.

## Functions and modules
- Functions should do one thing. If a function name needs “and”, split it.
- Keep functions short enough to scan. Extract helpers when branching or nesting starts to obscure intent.
- Prefer pure functions for business logic. Keep I/O, HTTP, database, filesystem, and process access at the edges.
- Pass structured objects between layers. Do not stringify JSON only to parse it again in the next layer.
- Return empty arrays/objects where appropriate instead of `null`.
- Do not return `undefined` from public APIs unless the type explicitly communicates that absence is expected.
- Use discriminated unions for closed result shapes instead of loosely-typed status strings.

## Async and concurrency
- Always `await` promises unless intentionally running work concurrently.
- When intentionally running work concurrently, use `Promise.all`, `Promise.allSettled`, or a bounded-concurrency helper and make the failure behavior explicit.
- Do not use `Array.prototype.forEach` with async callbacks. Use `for...of`, `Promise.all`, or a concurrency limiter.
- Do not swallow rejected promises. Handle or propagate errors.
- Use `AbortController` / `AbortSignal` for cancellable network or long-running operations where the surrounding framework supports it.
- Avoid unbounded fan-out against databases, APIs, queues, or filesystem operations.

## Error handling
- Throw project-specific errors or typed error classes at domain/application boundaries when the distinction matters.
- Do not catch errors to return empty/default values unless the fallback is a real product requirement and is documented in code.
- `catch (error)` must either rethrow, translate to a meaningful error, or add context before rethrowing.
- Preserve causal chains with `cause` when wrapping errors.
- Never expose internal stack traces, credentials, tokens, or raw provider responses to end users.

## Validation and boundaries
- Validate untrusted input at the boundary: HTTP requests, webhooks, CLI args, env vars, files, queues, and third-party API responses.
- Use the project’s existing validation approach. If none exists, prefer a schema-based validator for runtime boundaries.
- Treat environment variables as untrusted strings. Parse and validate them once in a central config module.
- Keep domain objects and business rules independent from HTTP framework request/response objects.

## HTTP/API conventions
- Keep controllers/routes thin: validate input, call application logic, map the result to a response.
- Do not put business logic directly in route handlers.
- Use consistent response shapes and status codes already established by the project.
- Make idempotency explicit for mutation endpoints that may be retried.
- Avoid leaking database models directly through API responses. Map to response DTOs when the public shape matters.

## Database and external resources
- Use the project’s existing database client/ORM/query builder conventions.
- Keep transactions scoped to the smallest unit that must be atomic.
- Do not perform network calls while holding a database transaction unless the existing architecture explicitly requires it.
- Use long-lived clients/pools for databases, HTTP clients, queues, and caches. Do not create a new client per request unless the library requires it.
- Close transient resources such as file handles, streams, and temporary servers.
- Backend timestamps are UTC. Store timezone information when user-facing timezones matter.

## Logging and observability
- Use the project’s logger. Do not use `console.log` in application code unless the repo intentionally uses console logging.
- Prefer structured logs with stable fields over string concatenation.
- Log identifiers and context, not full payloads.
- Never log credentials, tokens, secrets, payment data, health data, or unnecessary PII.
- Add metrics/tracing where the project already has patterns and the behavior is operationally important.

## Testing
- Cover public API behavior and meaningful edge cases with unit or integration tests.
- Do not over-mock. Prefer testing business logic without framework bootstrapping when possible.
- Integration tests should exercise real boundaries when that is the value of the test: database, HTTP route, queue, or filesystem.
- Use deterministic fixtures. Avoid tests that depend on wall-clock time, random data, network access, or execution order unless controlled.
- When fixing a bug, add a regression test that fails before the fix.

## Formatting and cleanup
- Use the repo’s formatter, linter, and TypeScript config. Do not introduce competing style rules.
- Remove unused imports, dead code, stale files, and commented-out code after a change.
- Keep diffs focused. Do not reformat unrelated files.
- Do not mix mechanical cleanup with behavior changes unless the cleanup is required for the change.
