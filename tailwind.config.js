/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1320px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      screens: {
        lg: "992px",
        xl: "1320px",
        "2xl": "1320px",
      },
    },
    extend: {
      keyframes: {
        right: {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(10px)"
          },
        },
      },
      boxShadow: {
        'shadow': '0px 2px 7px rgba(159, 159, 159, 0.25)'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'my': 'cubic-bezier(.23,1,.32,1)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        mulish: ['var(--font-mulish)'],
      },
      animation: {
        "moving-right": "right 1s ease 100ms infinite alternate forwards",
      },
      backgroundImage: {
        'footer-bg': "url('/images/footerBG.svg')",
      },
      colors: {
        yellow: '#FFC01F',
        darkgray: {
          50: '#0F0F0F',
          100: '#191919',
          200: '#282828',
          300: '#353535',
          400: '#686868'
        },
        lightblue: {
          400: '#09B39D',
          500: '#4AC2D8',
          600: '#596C72',
          700: '#69768B'
        },
        lightgray: {
          100: '#EAEAEA',
          200: '#EFEFEF',
          300: '#DCDCDC',
          400: '#BDBDBD',
          500: '#ADADAD',
          600: '#B0ADAD',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};