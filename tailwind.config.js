/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alice': ['Alice', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'banner': "url('/assets/banner.png')"
      }
    },
  },
  plugins: [],
}

