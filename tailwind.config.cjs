/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "index.html"],
  theme: {
    extend: {
    },
    colors: {
      'red': 'hsl(0, 100%, 74%)',
      'green': 'hsl(154, 59%, 51%)',
      'blue': 'hsl(248, 32%, 49%)',
      'dark-Blue': 'hsl(249, 10%, 26%)',
      'grayish-Blue': 'hsl(246, 25%, 77%)',
      'white': "#FFFFFF"
    }
  },
  plugins: [],
}
