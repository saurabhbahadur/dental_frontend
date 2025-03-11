/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#000000",
        secondary_bg: "#1F2937",
        primary_text: "#ffffff",
        secondary_text: "#d1d5db",
        hover_color: "#9ca3af",
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
