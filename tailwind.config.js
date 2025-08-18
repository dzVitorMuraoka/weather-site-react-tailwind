/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens:{
        'custom-xl':'1290px',
        'custom-md':'600px',
        'custom-mdp': '700px',
        'custom-800': '800px',
        'custom-860': '860px',
        'custom-1100':'1100px'
      },
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
        'bg-containers': '#2E2A68',
        'daily-forecast-item': '#654DEF'
      },
       gridTemplateColumns: {
        'custom-layout': '120px 1fr 1fr',
        'custom-md-layout':'1fr',
        'custom-860-layout': '1fr 1fr',
        'custom-1100-layout': '70px 1fr'
      },
      gridTemplateRows:{
        'custom-mdp-row-layout': '1fr 1fr'
      }
    },
  },
  plugins: [],
};