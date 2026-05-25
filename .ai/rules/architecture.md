# Architecture Rules

## Project structure

Use the repo's existing structure if it already exists. When creating new code, keep boundaries explicit and avoid mixing HTTP, business logic, and infrastructure details.

Recommended structure for a Node.js/TypeScript application:

```text
src/
  app/ or server/                 # app bootstrap, framework wiring, runtime entry points
  domain/                         # pure business rules, entities, value objects, domain errors
    <feature>/
      <Feature>.ts
      <FeatureRepository.ts       # interface/port, not implementation
      events/
        <FeatureCreated.ts>
    shared/                       # cross-feature value objects and pure helpers
  application/                    # use cases and orchestration
    <feature>/
      <FeatureService.ts>
      <UseCase>.ts
  infrastructure/                 # technical details and adapters
    db/                           # database clients, migrations, ORM/query implementations
    clients/                      # outbound HTTP/provider SDK clients
    queues/                       # queue producers/consumers
    config/                       # environment/config loading
    logging/                      # logger setup
  interfaces/                     # inbound boundaries
    http/                         # routes/controllers/API handlers
      <feature>/
        routes.ts
        schema.ts
        mapper.ts
        types.ts
    jobs/                         # scheduled/background job entry points
    webhooks/                     # webhook handlers
```

For Next.js App Router projects, framework files live under `app/`, but business logic should still live outside route files:

```text
app/
  api/<resource>/route.ts         # thin HTTP boundary only
src/
  domain/
  application/
  infrastructure/
  interfaces/
```

## Dependency rules

Dependencies flow inward:

```text
interfaces  →  application  →  domain  ←  infrastructure
```

- `domain` is pure TypeScript. No framework, database, HTTP, logging, or environment imports.
- `application` imports domain types and ports. It orchestrates use cases and transactions/workflows.
- `infrastructure` implements ports defined by domain or application. It may import domain types but should not own business rules.
- `interfaces` handles inbound adapters: HTTP routes, controllers, webhooks, jobs, CLI commands. It validates inputs, maps DTOs, and calls application services.
- Avoid cycles. If two modules need the same logic, extract pure logic into domain/shared or a feature-local helper.

## Route and controller rules

Route handlers should be thin:

1. parse request
2. validate input
3. call an application service/use case
4. map result to response

Do not put business logic, provider calls, database queries, or large mapping blocks directly in route handlers.

## Domain rules

- Domain code owns invariants and business decisions.
- Domain code should be deterministic and easy to unit test.
- Prefer explicit types and value objects for important concepts.
- Use discriminated unions for closed result/state variants.
- Domain objects should not know how they are persisted or exposed over HTTP.

Example:

```ts
type PaymentStatus =
  | { kind: 'pending' }
  | { kind: 'paid'; paidAt: Date }
  | { kind: 'failed'; reason: string };
```

## Application rules

- Application services/use cases orchestrate workflows.
- They may coordinate repositories, external clients, queues, and domain objects.
- They should depend on interfaces/ports, not concrete SDK clients where practical.
- They should be the natural place for transaction boundaries when using a database.

## Infrastructure rules

Infrastructure contains side effects:

- database reads/writes
- ORM/query builder implementation
- HTTP clients and provider SDKs
- queues and messaging
- file system access
- environment/config loading
- logging implementation

Keep provider-specific types from leaking into domain or application layers. Map them at the boundary.

## Interfaces rules

Interfaces contain inbound adapters:

- HTTP routes/controllers
- webhook handlers
- scheduled/background job entry points
- CLI commands

They own request/response schemas and mapping to application inputs/outputs.

## Cross-feature rules

- Features may share value objects from `domain/shared`.
- Avoid direct dependencies between feature internals.
- Cross-feature workflows belong in application services/use cases.
- If two features start importing heavily from each other, the boundary is probably wrong.

## When to create a new feature package

Create `domain/<feature>/` when the feature has at least two of these:

- its own lifecycle or state model
- its own use cases
- its own API/webhook/job surface
- its own persistence concerns
- its own domain vocabulary

Do not create a new feature package for a single helper, DTO, or constant.

## What goes where

| Code | Location |
| --- | --- |
| App/bootstrap code | `src/app/`, `src/server/`, or framework root |
| API route/controller | `interfaces/http/<feature>/` or thin framework route file |
| Request/response schema | `interfaces/http/<feature>/schema.ts` |
| DTO/API mapper | `interfaces/http/<feature>/mapper.ts` |
| Use case/service orchestration | `application/<feature>/` |
| Entity/value object/domain error | `domain/<feature>/` |
| Repository/client interface | `domain/<feature>/` or `application/<feature>/ports/` |
| Repository implementation | `infrastructure/db/` |
| Outbound provider client | `infrastructure/clients/` |
| Queue producer/consumer | `infrastructure/queues/` or `interfaces/jobs/` for entry points |
| Config/env parsing | `infrastructure/config/` |
| Logger setup | `infrastructure/logging/` |

## Data and model boundaries

Domain objects do not leak through API responses and provider SDK types do not leak into domain/application.

- No ORM/database entity returned directly from an API route.
- No raw provider response passed through as a domain object.
- Mappers convert between API DTOs, provider DTOs, persistence rows, and domain types.
- Mapping logic belongs in mapper/adapter files, not scattered across services and routes.

## Configuration

- Read environment variables in one config module.
- Validate required env vars at startup.
- Do not access `process.env` throughout the codebase.
- Do not hardcode secrets, URLs, credentials, or environment-specific behavior.

## Background jobs and queues

- Jobs should be idempotent where possible.
- Persist enough state to safely retry.
- Log job IDs, entity IDs, and provider event IDs.
- Avoid long-running work in HTTP request handlers; enqueue work when it can outlive the request.

## Practical rule

If a file imports a web framework, database client, provider SDK, and business rules at the same time, it is doing too much. Split it before adding more behavior.
