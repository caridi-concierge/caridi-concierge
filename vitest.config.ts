import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// `@/` mirrors the tsconfig path alias so tests import modules the same way
// application code does. Kept in sync with tsconfig.json `paths`.
const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  resolve: {
    alias: { "@": srcDir },
  },
  test: {
    // Pure-logic units run under Node. There is no DOM/React test layer yet;
    // add `environment: "jsdom"` (and the dep) when a component test needs it.
    environment: "node",
    include: ["src/**/*.test.ts"],
    globals: false,
  },
});
