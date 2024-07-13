/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ theme, addUtilities }) {
      const priorityUtilities = {}
      const colors = theme('colors')
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500']
          const color2 = colors[color]['700']
          priorityUtilities[`.priority-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(priorityUtilities)   
  })],
}

