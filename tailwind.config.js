/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: 'rgb(var(--color-bg) / <alpha-value>)',
        'charcoal-deep': 'rgb(var(--color-bg-deep) / <alpha-value>)',
        bone: 'rgb(var(--color-text) / <alpha-value>)',
        'bone-dim': 'rgb(var(--color-text-dim) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        gold: 'rgb(var(--color-accent) / <alpha-value>)',
        'gold-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
        'gold-fill': 'rgb(var(--color-accent-fill) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
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
