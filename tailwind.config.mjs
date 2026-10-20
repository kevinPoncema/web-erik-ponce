/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36aaf5',
          500: '#0c8ee6',
          600: '#0270c4',
          700: '#03599f',
          800: '#074b83',
          900: '#0c3f6e',
          950: '#082849',
        },
        tealMed: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1ebe57',
          dark: '#128C7E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'clinical': '0 10px 30px -5px rgba(12, 63, 110, 0.08), 0 4px 12px -2px rgba(12, 63, 110, 0.04)',
        'clinical-lg': '0 20px 40px -10px rgba(12, 63, 110, 0.14), 0 8px 16px -4px rgba(12, 63, 110, 0.06)',
      }
    },
  },
  plugins: [],
};
