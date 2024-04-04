/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand_bg: 'var(--bg_primary)',
        brand_text: 'var(--text)',
        brand_border: 'var(--border)',
        brand_primary: 'var(--primary)',
        brand_secondary: 'var(--secondary)',
      },
      animation: {
        'bg-fade': 'fade 120s infinite;'
      },
      keyframes: {
        fade: {
          '0%': { 'background-color': 'var(--bg_primary)' },
          '50%': { 'background-color': 'var(--bg_secondary)' },
          '100%': { 'background-color': 'var(--bg_primary)' },
        }
      }
    },
  },
  plugins: [],
}

