/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        // You can still keep the default mono override if you want
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'primary': '#E1DFE1',
        'secondary': '#F5F5F5',
        'accent': '#C0BFC0',
        'close': '#FF605C',
      },
    },
  },
  plugins: [],
}