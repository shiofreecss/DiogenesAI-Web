/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        sans: ['Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        terminal: {
          bg: '#0d1117',
          fg: '#c9d1d9',
          gold: '#FFD700',
          blue: '#58a6ff',
          yellow: '#d29922',
          red: '#f85149',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

