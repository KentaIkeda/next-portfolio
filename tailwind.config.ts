import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1f1f1f",
        "light": "#f1f1f1"
      },
      boxShadow: {
        "cinema": "0px 0px 70px -5px"
      }
    },
    plugins: [],
  }
}
export default config;
