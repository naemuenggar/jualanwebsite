import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grounds
        canvas: "#F4F1EA", // warm porcelain — the page ground
        paper: "#FFFFFF", // raised surfaces / cards
        stoneMist: "#EDE8DE", // subtle alternate field
        // Ink
        ink: "#17140F", // warm near-black text
        // Primary — deep pine, drenches whole regions
        pine: "#123F35",
        pineDark: "#0E332B",
        pineLight: "#1C5A4B",
        // The single warm mark
        saffron: "#E0A43B",
        saffronDeep: "#B87E22",
        // Warm hairline / borders
        stone: "#E3DDD0",
        stoneDark: "#D4CCBB",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "20px",
        panel: "28px",
      },
      boxShadow: {
        card: "0 1px 2px rgb(23 20 15 / 0.04), 0 10px 30px -12px rgb(23 20 15 / 0.12)",
        lift: "0 2px 6px rgb(23 20 15 / 0.06), 0 24px 48px -16px rgb(23 20 15 / 0.22)",
        pine: "0 24px 60px -22px rgb(18 63 53 / 0.55)",
        inset: "inset 0 1px 0 0 rgb(255 255 255 / 0.6)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
