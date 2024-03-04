import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fr-primary": "#E5133A",
        "fr-secondary": "#F0F5FF",
        "fr-accent": "#60E1CB",
        "fr-gray-300": "#F6F6F6",
        "fr-dark": "#1A1A1A",
      },
      boxShadow:{
        "calculator-box-shadow": "0px 20px 50px 2px rgba(26, 26, 26, 0.10)",
      }
    },
  },
  plugins: [],
};
export default config;
