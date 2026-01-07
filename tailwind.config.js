/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
  },
  colors: {
    brand: {
      DEFAULT: "#0B0B0B",
      muted: "#1A1A1A",
      light: "#F5F5F5",
    },
  },
},
  },
  plugins: [],
}

