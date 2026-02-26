/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sti: {
          dark: "#0b1f33",
          sidebar: "#0f2a44",
          hover: "#17324d",
          active: "#1b3b5c",
          yellow: "#ffd500",
          text: "#e5e7eb",
        },
      },
    },
  },
  plugins: [],
};