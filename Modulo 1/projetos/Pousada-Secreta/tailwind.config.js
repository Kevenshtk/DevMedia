/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url(assets/img-fundo.jpg)",
      },
      fontFamily: {
        SourceSansPro: ["Source Sans Pro", "sans-serif"],
      }
    },
  },
  plugins: [],
}

