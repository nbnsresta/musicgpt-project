/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter, sans-serif"],
      },
      colors: {
        "greys-900": "#16191c",
        "greys-800": "#272a2e",
        "greys-700": "#3f444a",
      },
    },
  },
};
