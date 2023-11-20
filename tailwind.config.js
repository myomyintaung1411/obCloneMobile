/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      animation: {
        fadefromTop: 'fadefromTop 1s 0.2s ease both',
        flip: 'flip 1s 0.2s ease both',
        fade: 'fadeInRight 1s 0.2s ease both',
        fadeleft: 'fadeInLeft 1s 0.2s ease both',
        wiggle: 'wiggle 2s linear infinite',
        "tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",

      },
      keyframes: {
        flip: {
          '0%': {
            opacity:0,
            transform: 'perspective(400px) rotateY(0)'
          },
          '50%': {
            opacity: 0,
            transform: 'perspective(400px) rotateY(90deg)'
          },
      
          '100%': {
            opacity: 1,
            transform: 'perspective(400px) rotateY(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadefromTop: {
          '0%': {
            opacity: 0,
            transform: 'transform: translateY(-100%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)'
          }
        },
        fadeInLeft : {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(30%)' },
          '50%': { transform: 'translateX(0%)' },
        },
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0"
          },
          "40%": {
            opacity: ".6"
          },
          to: {
            opacity: "1"
          }
        },
      },
    },
  },
  plugins: [],
}