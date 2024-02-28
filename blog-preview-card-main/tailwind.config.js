/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'yellow': 'hsl(47, 88%, 63%)',
        'white': 'hsl(0, 0%, 100%)',
        'grey' : 'hsl(0, 0%, 50%)',
        'black': 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        'custom': ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        'custom': '6px 6px rgba(0, 0, 0, 1)',
        'custom-hover': '12px 12px rgba(0, 0, 0, 1)',
      },
      width: {
        '44-1': '11.2rem',
      },
    },
  },
  plugins: [],
}

