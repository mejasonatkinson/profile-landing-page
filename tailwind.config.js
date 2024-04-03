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
        brand_bg: 'var(--bg)',
        brand_text: 'var(--text)',
        brand_border: 'var(--border)',
        brand_primary: 'var(--primary)',
        brand_secondary: 'var(--secondary)',
      }
    },
  },
  plugins: [],
}

