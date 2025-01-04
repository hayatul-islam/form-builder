/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#00ADB5",
        // primary: "#4A90E2",
        // primary: "#1C28AA",
        primary: {
          // DEFAULT: "#3A86FF",
          DEFAULT: "#0066FF",
          // 100: "#1C28AA",
          100: "#0056d7",
        },
        gray: {
          DEFAULT: "#F7F7F7",
          light: "#FAFAFA",
          dark: "#0D1117",
          300: "#D1D5DB",
          500: "#6B7280",
          900: "#212830",
        },
        white: "#f3f3f3",
        black: {
          DEFAULT: "#393737",
        },
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
