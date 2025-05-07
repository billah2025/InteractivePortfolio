/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          100: '#1e293b',
          200: '#0f172a',
          300: '#020617',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  safelist: [
    'bg-primary-500/30',
    'text-primary-900',
    'dark:text-primary-100'
  ]
}
