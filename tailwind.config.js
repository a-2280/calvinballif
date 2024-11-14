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
    },
  },
  plugins: [],
}