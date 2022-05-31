module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        'permanent-marker': "'Permanent Marker', sans-serif",
        'work-sans': "'Work Sans', sans-serif",
        'bebas-neue': "'Bebas-Neue', sans-serif",
      },
    },

  },
  plugins: [],
}
