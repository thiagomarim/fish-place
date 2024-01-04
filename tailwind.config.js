/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-header': '#17222D',
        'blue-title': '#17222D',
        'blue-text': '#445566',
        'border-color': '#EFF4F9',
        'blue-white': '#1188EE',
        'bg-planos': '#EFF4F9',
      },
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

