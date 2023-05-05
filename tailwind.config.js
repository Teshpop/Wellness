/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      brown: {
        100: "#e8ded5",
        200: "#d9cfc6",
        300: "#76694e",
      },
      white: "#f0ece9",
      pink: "#f1dcdb",
      yellow: "#ede9d0",
      blue: "#d5cfd9",
      green: "#cddecc",
      black: "#333",
    },
    fontFamily: {
      bellota: ["Bellota Text", "cursive"],
    },
  },
  plugins: [],
};
