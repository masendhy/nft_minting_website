const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-green': 'var(--clr-green)',
        'brand-yellow': 'var(--clr-yellow)',
        'brand-pink': 'var(--clr-pink)',
        'brand-light': 'var(--clr-light)',
        'brand-blue': 'var(--clr-blue)',
        'brand-red': 'var(--clr-red)',
        'brand-background': 'var(--clr-background)'
      }
    }
  },
  plugins: []
}
