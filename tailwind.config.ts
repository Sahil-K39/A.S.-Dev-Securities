import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        surface: "#131313",
        "surface-lowest": "#0e0e0e",
        "surface-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-high": "#2a2a2a",
        "surface-bright": "#3a3939",
        "surface-variant": "#353534",
        primary: "#ff5449",
        "primary-soft": "#ffb4ab",
        "on-primary": "#5c0004",
        text: "#e5e2e1",
        muted: "#af8783",
        "muted-rose": "#e8bcb7",
        outline: "#5e3f3b"
      },
      borderRadius: {
        card: "2rem",
        panel: "3rem"
      },
      boxShadow: {
        ambient: "0 20px 40px rgba(0, 0, 0, 0.38)",
        "ambient-lg": "0 28px 70px rgba(0, 0, 0, 0.46)",
        redglow: "0 18px 46px rgba(255, 84, 73, 0.22)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      fontFamily: {
        headline: ["var(--font-epilogue)", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"],
        label: ["var(--font-inter)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
