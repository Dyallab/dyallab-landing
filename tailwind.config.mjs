/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dyallab: {
          bg: '#f5f2f8',
          surface: '#f0ebf5',
          border: '#e0d9eb',
          accent: '#a851c8',
          'accent-hover': '#7c3aed',
          muted: '#8b7fa0',
          'text-secondary': '#4a4058',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
