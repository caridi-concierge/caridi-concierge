# AGENTS.md — AI Coding Assistant Guide (Codex / Node.js)

This file is loaded automatically by AI coding agents (Codex, Copilot, Cursor, etc.).
It defines how to work in this project and how to run it correctly.

For working style and decision-making, see `.ai/rules/doctrine.md`.
For coding conventions, see `.ai/rules/coding.md`.

---

## Project overview

Node.js + TypeScript application.

Architecture is modular and service-oriented. Keep boundaries clear:
- `api/` — HTTP layer (routes, controllers)
- `services/` — business logic
- `domain/` — core models and invariants
- `infra/` — external integrations (DB, APIs, queues)

Avoid mixing concerns across layers.

---

## Environment

- **Node.js**: LTS (use nvm or asdf)
- **Package manager**: **Yarn only**

> This project uses Yarn. Do not use npm or pnpm.

Install dependencies:

```bash
yarn install
```

---

## Key commands

```bash
yarn install        # install dependencies
yarn dev            # run local development server
yarn build          # production build
yarn start          # run production build
yarn test           # run tests
yarn lint           # lint code
yarn typecheck      # TypeScript checks
yarn command        # run a JSON-payload CLI command (see docs/cli-commands.md)
```

If a command fails, fix forward — do not skip steps.

The `yarn command` runner dispatches operator tools (GSC sync/backfill/repair,
GBP publish queue, etc.). See [`docs/cli-commands.md`](docs/cli-commands.md)
for the full payload reference.

---

## Testing

- Unit tests: fast, isolated, no network or DB
- Integration tests: real integrations or test containers
- All public-facing behavior must be covered

Before completing any task:

```bash
yarn test
```

Do not claim success without passing tests.

---

## Code organization rules

- No business logic in route handlers
- Services contain orchestration logic
- Domain contains pure logic and validation
- Infra handles side effects only

If a file starts doing multiple jobs, split it.

---

## API design

- Validate all inputs at the boundary
- Return consistent response shapes
- Do not leak internal models directly
- Use explicit DTOs when needed

---

## Error handling

- Fail loudly and explicitly
- Do not swallow errors or return silent defaults
- Use typed errors where possible
- Log context, not raw payloads

---

## Logging

- No `console.log` in production code
- Use structured logging (pino, winston, etc.)
- Never log:
  - credentials
  - tokens
  - sensitive user data

---

## Safety rules

- Never commit secrets
- Never delete or overwrite large data without confirmation
- Avoid destructive operations without clear intent

---

## What not to do

- Do not introduce new frameworks without justification
- Do not guess APIs — verify before using
- Do not leave dead code or commented blocks
- Do not bypass linting or type checks

---

## Definition of done

A task is complete when:

- Code builds successfully (`yarn build`)
- Tests pass (`yarn test`)
- Types are valid (`yarn typecheck`)
- Lint passes (`yarn lint`)
- Behavior is verified (not assumed)

---

## Notes for agents

- Prefer small, incremental changes
- Read existing patterns before introducing new ones
- Match the style of the codebase
- When unsure, investigate — do not guess

---

## Rule files

- `.ai/rules/doctrine.md` — how to work
- `.ai/rules/coding.md` — Node.js + TypeScript conventions
- `.ai/rules/testing.md` — testing patterns
- `.ai/rules/api-design.md` — API conventions
