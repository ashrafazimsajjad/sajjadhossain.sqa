const config = {
  content: ["./app/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
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
module.exports = config;