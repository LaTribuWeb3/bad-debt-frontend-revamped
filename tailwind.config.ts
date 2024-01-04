/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    fontFamily: {
      'sans': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    lineHeight: {
      DEFAULT: '1.5',
    },
    fontWeight: {
      DEFAULT: '400',
    },
    fontSize: {
      base: '16px',
      md: '17px',
      lg: '18px',
      xl: '19px',
      '2xl': '20px',
      '3xl': '2rem',     // for h1
      '4xl': '1.75rem',  // for h2
      '5xl': '1.5rem',   // for h3
      '6xl': '1.25rem',  // for h4
      '7xl': '1.125rem', // for h5
    },
    extend: {
      colors: {
        darkThemeBg: '#11191f'
      },
      backgroundColor: {
        'row-odd': '#f7fafc',
        'row-even': '#ffffff',
        'dark-row-odd': '#19232b',
        'dark-row-even': '#141e26'
      },
      borderColor: {
        'dark-border': '#000000',
        'dark-row-border': '#000000',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}