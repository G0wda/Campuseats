/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        dark: '#2C3E50',
        light: '#F7F9FC'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};