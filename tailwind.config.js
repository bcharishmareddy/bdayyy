/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          dark: '#030817',
          deep: '#07152F',
          navy: '#0B1940',
          card: 'rgba(11, 25, 64, 0.45)',
          border: 'rgba(169, 201, 255, 0.18)',
        },
        starlight: {
          blue: '#A9C9FF',
          lavender: '#C8B9FF',
          silver: '#DDE6FF',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        cursive: ['"Great Vibes"', '"Allura"', 'cursive'],
        allura: ['"Allura"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow-soft': '0 0 25px rgba(169, 201, 255, 0.35)',
        'glow-lg': '0 0 45px rgba(200, 185, 255, 0.55)',
        'glow-star': '0 0 15px rgba(255, 255, 255, 0.8)',
        'glass-card': '0 8px 32px 0 rgba(3, 8, 23, 0.65)',
      },
    },
  },
  plugins: [],
}
