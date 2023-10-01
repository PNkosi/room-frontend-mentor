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
        "dark-gray": "hsl(var(--Dark-Gray))",
        black: "hsl(var(--Black))",
        white: "hsl(var(--White))",
        "very-dark-gray": "hsl(var(--Very-Dark-Gray))",
      },
    },
  },
  plugins: [],
};
export default config;
