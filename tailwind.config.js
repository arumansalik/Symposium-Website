/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'symposium-primary': '#3B82F6',
        'symposium-secondary': '#10B981',
        'symposium-background': '#F3F4F6',
      },
      fontFamily: {
        'tech': ['Inter', 'sans-serif'],
      },
      animation: {
        'slow-pulse': 'pulse 3s infinite',
        'tech-float': 'float 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}