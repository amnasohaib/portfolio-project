/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        foreground: {
          DEFAULT: "#02182B",
          light: "#02182B",
          dark: "#DBE9EE",
        },
        background: {
          DEFAULT: "#DBE9EE",
          light: "#DBE9EE",
          dark: "#02182B",
        },
      },
    },
  },

  plugins: [],
};
