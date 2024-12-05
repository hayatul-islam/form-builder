/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        gray: "#F9F7F7",

        black: {
          DEFAULT: "#393737",
          "black-100": "#888787",
        },
      },
    },
  },
  plugins: [],
};
