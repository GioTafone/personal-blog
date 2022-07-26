/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      fontFamily: {
        Nautigal: ['The Nautigal', 'cursive'],
        Pompiere: ['Pompiere', 'cursive']
      },
      colors: {
        'custom-zinc': '#92969c',
        'custom-bg' : 'rgb(244,245,214)'
      }

    },
  },
  plugins: [],
}
