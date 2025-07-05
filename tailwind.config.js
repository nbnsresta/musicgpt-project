/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    sans: ["Inter, sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        background: "#16191c",
        foreground: "#272a2e",
      },
    },
  },
};
