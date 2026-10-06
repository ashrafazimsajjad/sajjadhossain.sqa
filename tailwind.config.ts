import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070a0f",
        panel: "#0d121a",
        cyanx: "#22d3ee",
        violetx: "#8b5cf6"
      },
      boxShadow: {
        glow: "0 0 60px rgba(34,211,238,.12)"
      }
    }
  },
  plugins: []
};
export default config;