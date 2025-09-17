module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logoNavy: '#002060',
        logoBlueStart: '#0052A5',
        logoBlueEnd: '#00AEEF',
        logoOrangeStart: '#FF7A00',
        logoOrangeEnd: '#FFD500',
        lightGray: '#C5CEDE',
        cream: '#FFF8F0'
      },
      backgroundImage: {
        'hero-fallback': 'linear-gradient(90deg,#0052A5 0%, #00AEEF 100%)'
      }
    }
  },
  plugins: [],
}
