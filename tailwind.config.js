/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'christmas': "url('https://img.freepik.com/free-photo/christmas-decorations-wallpaper_23-2151891573.jpg')",
      }
    },
  },
  plugins: [],
}