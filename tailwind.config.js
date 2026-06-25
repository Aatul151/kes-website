/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#C8102E",
          dark: "#1A1A1A",
          gray: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
