import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-light)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-light)",
        },
        point: {
          red: "var(--color-point-red)",
          yellow: "var(--color-point-yellow)",
          coral: "var(--color-point-coral)",
        },
        background: {
          DEFAULT: "var(--color-background-primary)",
          foreground: "var(--color-background-secondary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          disabled: "var(--color-text-disabled)",
          onPrimary: "var(--color-text-on-primary)",
        },
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#B8B8B8",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
        },
      },
      boxShadow: {
        mobileCard:
          "0px 2px 10px rgba(0, 0, 0, 0.6), 0px 2px 10px rgba(0, 0, 0, 0.8) ",
        desktopCard:
          "2px 2px 10px rgba(0, 0, 0, 0.8), 2px 2px 20px rgba(0, 0, 0, 0.6)",
        float:
          "0px 6px 10px rgba(0, 0, 0, 0.8), 0px 4px 10px rgba(0, 0, 0, 0.8)",
        active:
          "0px 6px 12px 0px rgba(105, 121, 248, 0.12), 0px 2px 10px 0px rgba(105, 121, 248, 0.12)",
        bottomSheet:
          "0px 0px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 12px 0px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        normal: "1rem",
        large: "2rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("./tailwind_plugins/scrollbar-hide"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;

export default config;
