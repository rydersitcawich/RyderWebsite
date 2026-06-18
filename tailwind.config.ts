import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal, near-neutral foundation — navy is the only accent.
        paper: "#F6F6F3", // page background — clean off-white, just off neutral
        surface: "#FFFFFF", // cards / raised surfaces
        ink: "#181A20", // primary text — near-black, faint cool undertone
        line: "#1B1D24", // hairline borders (always used at low opacity)
        navy: "#1E3A63", // THE accent — labels, links, buttons, focus, detail
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
