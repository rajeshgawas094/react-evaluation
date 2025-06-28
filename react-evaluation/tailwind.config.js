/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
  dark: "#0A061F",
  primary: "#8358FF",
  accent: "#E86FFF",
  faqbg: "#F3F1F8",
    },
  },
},
}
