import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1E3A8A", // Deep Blue
          dark: "#172554",
          light: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#D4AF37", // Gold Accent
          dark: "#B8860B",
          light: "#F1C40F",
        },
        accent: {
          DEFAULT: "#0F172A", // Royal Black
        },
        muted: {
          DEFAULT: "#F3F4F6", // Soft Gray
          dark: "#1F2937",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "gradient-premium": "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
