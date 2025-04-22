/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": '0px 0px 2px 0px cyan',
      }
    },
  },
  plugins: [],
}

