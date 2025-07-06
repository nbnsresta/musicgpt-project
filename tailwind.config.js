/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    sans: ["Inter, sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        "greys-900": "#16191c",
        "greys-800": "#272a2e",
        "greys-700": "#3f444a",
      },
    },
  },
};
