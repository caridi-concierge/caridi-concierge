// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        alabaster: "#f2f4eb",
        outerSpace: "#2a414b",
        midnight: "#01152c",
        merino: "#f9f5eb",
        champagne: "#ece1c9",
        steel: "#4f778b",
        peach: "#ffe7b9",
        carnation: "#ea5455",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
};

export default config;
