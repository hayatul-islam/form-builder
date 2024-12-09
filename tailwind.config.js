/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#00ADB5",
        // primary: "#4A90E2",
        primary: "#3A86FF",
        gray: {
          DEFAULT: "#F7F7F7",
          light: "#FAFAFA",
        },

        black: {
          DEFAULT: "#393737",
          "black-100": "#888787",
        },
      },
    },
  },
  plugins: [],
};
