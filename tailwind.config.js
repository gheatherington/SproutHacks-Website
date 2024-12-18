/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        asap: ['"Asap"', 'sans-serif'],
      },
      colors: {
        purple: '#1a0335',
        black: '#000000',
        green: '#14CB6F',
        lightblue: '#11BBE4',
        darkblue: '#148FCC',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
