import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        yellow: {
          DEFAULT: "#F5C800",
          400: "#FFD700",
          500: "#F5C800",
          600: "#E0B800",
        },
        "gray-dark": "#141414",
        "gray-mid": "#1e1e1e",
        "gray-light": "#2a2a2a",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245, 200, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(245, 200, 0, 0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "yellow-glow": "radial-gradient(ellipse at center, rgba(245,200,0,0.15) 0%, transparent 70%)",
        "hero-gradient": "radial-gradient(ellipse at 60% 50%, rgba(245,200,0,0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
