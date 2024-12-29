/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#00ADB5",
        // primary: "#4A90E2",
        // primary: "#1C28AA",
        primary: {
          DEFAULT: "#1C28AA",
          // DEFAULT: "#7330c0",

          100: "#3A86FF",
          // 100: "#9e62ea",
        },
        gray: {
          DEFAULT: "#F7F7F7",
          light: "#FAFAFA",
        },

        black: {
          DEFAULT: "#393737",
          // 100: "#888787",
        },
      },
    },
  },
  plugins: [],
};
