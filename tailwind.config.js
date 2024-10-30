/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'dark',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  daisyui: {
    themes: [],
  },

  plugins: [require('daisyui')],
}
