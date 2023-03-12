/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        amazon_home_background_color: {
          dark_white: "#E3E6E6",
        },
        amazon_search_background_color: {
          lite_orange: "#febd69",
        },
        amazon_cart_background_color: {
          dark_orange: "#f08804",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
