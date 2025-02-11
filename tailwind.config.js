/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      brandedRed:"#EE0000",
      lightgray: "#f4f4f4",
      midgray: "#f3f3f3",
      thickgray: "#464646",
      zinc: "#3e3e3e",
      brandedZinc: "#5c5c5c",
      gray: "#787878"
    },
  },
  plugins: [],
}

