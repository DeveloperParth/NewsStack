/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#F2F2F2',
        accent: '#FFD60A',
        danger: "#FFE7E3"
      }
    }
  },
  plugins: [],
}
