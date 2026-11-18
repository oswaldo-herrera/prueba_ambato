/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ====================================
      // COLORES DE LA MARCA
      // Cambia estos valores para actualizar
      // los colores en toda la página
      // ====================================
      colors: {
        'azul': {
          DEFAULT: '#012857',   // Azul profundo campaña
          'claro': '#1A4A8A',   // Azul más claro (hover, acentos)
          'muy-claro': '#E6EEF8', // Fondo azul suave
        },
        'oro': {
          DEFAULT: '#FF6600',   // Naranja campaña (poster oficial)
          'oscuro': '#E55500',  // Naranja oscuro (hover)
          'claro': '#FFF3EB',   // Fondo naranja suave
        },
      },
      // ====================================
      // TIPOGRAFÍA
      // ====================================
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'titulo': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
