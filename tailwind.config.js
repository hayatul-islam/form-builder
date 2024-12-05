/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#00ADB5",
        primary: "#4A90E2",
        gray: {
          DEFAULT: "#F7F7F7",
        },
        "light-gray": "#FAFAFA",

        black: {
          DEFAULT: "#393737",
          "black-100": "#888787",
        },
      },
    },
  },
  plugins: [],
};
