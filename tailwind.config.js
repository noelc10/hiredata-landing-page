/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './nuxt.config.{js,ts}',
    './app.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'hd-primary': {
          DEFAULT: '#0f132f',
          50: '#edf5ff',
          100: '#deecff',
          200: '#c4dbff',
          300: '#a1c3ff',
          400: '#7ba0fe',
          500: '#5c7cf8',
          600: '#3e55ed',
          700: '#3143d1',
          800: '#2a3aa9',
          900: '#2a3885',
          950: '#0f132f',
        },
        'hd-secondary': {
          DEFAULT: '#7dc2ca',
          50: '#f2f9fa',
          100: '#dceff1',
          200: '#bde0e4',
          300: '#7dc2ca',
          400: '#5aabb6',
          500: '#3e8f9c',
          600: '#367684',
          700: '#31616d',
          800: '#2f515b',
          900: '#2b444e',
          950: '#182c34',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'base': ['1rem', '1.75rem'],
        'xs': ['.75rem', '1rem'],
        'sm': ['.875rem', '1.5rem'],
        'lg': ['1.125rem', '2rem'],
        'xl': ['1.25rem', '2rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['2rem', '2.5rem'],
        '4xl': ['2.5rem', '3.5rem'],
        '5xl': ['3rem', '3.5rem'],
        '6xl': ['3.75rem', '1'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      }
    },
  },
  plugins: [],
}

