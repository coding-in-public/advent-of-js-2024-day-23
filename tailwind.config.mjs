/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
      },
      colors: {
        red: "#E51F1F",
        green: "#90AC62",
        input: "#F7F7F7",
        border: "#D7D7D7",
      },
    },
  },
  plugins: [],
};
