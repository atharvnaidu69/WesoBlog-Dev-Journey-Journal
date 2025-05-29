/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#1E1E1E',
          800: '#2A2A2A',
          700: '#333333',
        }
      },
      // keyframes: {
      //   spinBorder: {
      //     '0%': { transform: 'rotate(0deg)' },
      //     '100%': { transform: 'rotate(360deg)' }
      //   }
      // },
      // animation: {
      //   spinBorder: 'spinBorder 3s linear infinite' // Slightly slowed for smoother effect
      // },
      blur: {
        'glow': '50px'
      }
    }
  },
  plugins: []
};
