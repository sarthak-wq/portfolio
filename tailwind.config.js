/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',  // Adjust this path according to your project structure
    ],
    theme: {
      extend: {
        animation: {
          'breathing': 'breathing 3s ease-in-out infinite',
        },
        keyframes: {
          breathing: {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' },
          },
        },
      },
    },
    plugins: [],
  }