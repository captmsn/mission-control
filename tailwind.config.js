/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF1493', // Pink
          hover: '#FF69B4',
        },
        secondary: {
          DEFAULT: '#9400D3', // Purple
          hover: '#8A2BE2',
        },
      },
    },
  },
  plugins: [],
};