/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1816',
        'charcoal-deep': '#100f0e',
        bone: '#f2ede4',
        'bone-dim': '#d8d2c4',
        muted: '#8c8578',
        gold: '#c9a24b',
        'gold-soft': '#e3c988',
        line: '#3a362f',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
