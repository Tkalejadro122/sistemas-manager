import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'light',
  plugins: [heroui()]
}
