/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'MyFont': ['DINArabic', 'sans-serif'] 
    },
    extend: {
      colors: {
       'Section-Color': '#E6FFE1',
        primary :{
          50: "#fffde8",
          100: "#fff8b9",
          200: "#fff38b",
          300: "#ffee5d",
          400: "#ffea2e",
          500: "#ffe500",
          600: "#d1bb00",
          700: "#a29200",
          800: "#746800",
          900: "#463e00",
          950: "#171500",
        },
        secondary: {
          50: "#effef7",
          100: "#dafeef",
          200: "#b8fadd",
          300: "#81f4c3",
          400: "#43e5a0",
          500: "#1acd81",
          600: "#0fa968",
          700: "#108554",
          800: "#126945",
          900: "#11563a",
          950: "#03301f",
        },

      },
    },
  },
  plugins: [],
}

