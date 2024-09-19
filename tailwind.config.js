/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tinos: ["Tinos", "serif"],
        anton: ["Anton", "sans-serif"],
        fira: ["Fira Sans", "cursive"],
        sofadi: ["Sofadi One", "system-ui"],
        mynerve: ["Mynerve", "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
