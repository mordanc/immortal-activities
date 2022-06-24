/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "immortal-brown": "rgb(173, 130, 84)",
        "immortal-red": "rgb(173, 130, 84)",
        "immortal-dark": "#160E09",
      },
      fontFamily: {
        immortal: ["Pathway Gothic One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
