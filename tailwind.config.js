/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'day-mode-login': 'linear-gradient(153.04deg, #5B9CFF 13.32%, #FFFC99 89.54%)',
        'night-mode-login': "linear-gradient(146.72deg, #1F1F2A 42.06%, #23204B 87.02%)",
      },
      height: {
        'box': '54.375rem',
      },
      colors: {
        'forgotfulness': '#0063F6',
        'buttonSubmit': '#564AFF',
        'bg-dashboard-home': '#232041',
        'bg-containers': '#2E2A68'
      }
    },
  },
  plugins: [],
};