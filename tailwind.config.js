/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "light-white":"#F5FFFF",
        "dark-red" :"#FB635D",
        "bright-red":"#F47266",
        "half-black":"#0000007A",
        "half-gray":"#4E4E4EC4",
        "light-blue":"#C5DCFC",
        "main-text-color":"#292929",
        "bright-blue":"#C4DBFB",
        "very-light-red":"#F6EEEE",
        "grayish-white":"#EBF3FF"
      }
    },
  },
  plugins: [],
}
