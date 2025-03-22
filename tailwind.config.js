/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#4CB7D5",
        secondary_bg: "#1a96b3",
        third_bg: "#93cfe3",
        golden_bg: "#ffe94e",
        primary_text: "#ffffff",
        secondary_text: "#000000",
        hover_color: "#000000",
        transparent_black: "#272727",
      },
    },
  },
  plugins: [],
}
