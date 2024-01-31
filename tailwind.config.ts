/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Ubuntu',
        'Cantarell',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    lineHeight: {
      DEFAULT: '1.5'
    },
    fontWeight: {
      DEFAULT: '400',
      bold: '700'
    },
    fontSize: {
      base: '16px',
      md: '17px',
      lg: '18px',
      xl: '19px',
      '2xl': '1.25rem', // 20px
      '3xl': '1.375rem', // 22px, adjusted
      '4xl': '1.5rem', // 24px, adjusted
      '5xl': '1.625rem', // 26px, adjusted
      '6xl': '1.75rem', // 28px, adjusted
      '7xl': '1.875rem', // 30px, adjusted
      '9xl': '5rem'
    },
    extend: {
      colors: {
        darkThemeBg: '#11191f',
        'dark-subtitle': '#bbc6ce',
        'light-subtitle': '#415462',
        darkHeader: '#18232C',
      },
      backgroundColor: {
        'row-odd': '#f7fafc',
        'row-even': '#ffffff',
        'dark-row-odd': '#19232b',
        'dark-row-even': '#141e26'
      },
      borderColor: {
        'dark-border': '#000000',
        'dark-row-border': '#000000'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
