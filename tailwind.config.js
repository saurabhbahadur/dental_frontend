/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#4CB7D5",
        secondary_bg: "#1a96b3",
        third_bg:"#93cfe3",
        golden_bg:"#ffe94e",
        primary_text: "#ffffff",
        secondary_text: "#000000",
        hover_color: "#000000",
        transparent_black:"#272727",
        icon : "#ff0000",
        accent_grad: {
          light: "#374151",
          dark: "#111827",
        },
      },
      backgroundImage: {
        "primary_button_grad": "linear-gradient(to right, #374151, #111827)", // Gray gradient
        "secondary_button_grad": "linear-gradient(to right, #5f1f80, #f52828)", //
      },
    },
  },
  plugins: [],
}
