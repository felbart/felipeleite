/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
        '50': '#fcf7f0',
        '100': '#f9ebdb',
        '200': '#f2d4b6',
        '300': '#e9b788',
        '400': '#e29c6a',
        '500': '#d77438',
        '600': '#c95d2d',
        '700': '#a74827',
        '800': '#863b26',
        '900': '#6c3322',
        '950': '#3a1810',
      },
      secondary: {
        '50': '#f5f4fe  ',
        '100': '#edebfc',
        '200': '#dedafa',
        '300': '#c5bdf5',
        '400': '#a697ee',
        '500': '#876be5',
        '600': '#764dda',
        '700': '#663bc6',
        '800': '#5631a6',
        '900': '#482a88',
        '950': '#2c195c',
      }
      },
      cursor: {
        'fb-cursor': 'url(hand.cur), pointer',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        general: ['General Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./assets/images/bg-hero.png')",
        // 'sobre': "url('./assets/images/sobre.jpg')",
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%) "},
        },
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
  },
  plugins: [],
}