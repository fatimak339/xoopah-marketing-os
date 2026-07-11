import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xoopah: {
          blue: "#4485F4",
          lime: "#D6FC93",
          orange: "#FF7838",
          coral: "#FF9F2C",
          yellow: "#FDC857",
          pink: "#FF8BF3",
          "light-blue": "#C6E0FB",
          ink: "#0B0B0C",
        },
      },
      fontFamily: {
        display: ["var(--font-lexend)", "sans-serif"],
        sub: ["var(--font-bricolage)", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,12,0.04), 0 8px 24px rgba(11,11,12,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
