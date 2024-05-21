import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'bg-primary': '#020617',
      'highlight-job': '#7363EF',
      'btn-primary': '#0C0E23',
      'text-primary': '#F0F3FF',
      'text-secoundary': '#C1C2D3',
      'stroke-btn': '#313555',
      'gradient-btn-light': '#6971A2',
      'gradient-btn-dark': '#272A3C',
      'gradient-card-light': '#0C0E23',
      'gradient-card-dark': '#04071D',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
