/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'cream': '#f2ebe3',
        'gray': '#6c7289',
        'green': '#3c8067'
      }
    },
  },
  plugins: [],
}

