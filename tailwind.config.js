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
          DEFAULT: '#21243D',   // Azul marino campaña
          'claro': '#353866',   // Azul más claro (hover, acentos)
          'muy-claro': '#eaeaf2', // Fondo azul suave
        },
        'oro': {
          DEFAULT: '#AC7C3F',   // Dorado campaña
          'oscuro': '#8A6230',  // Dorado más oscuro (hover)
          'claro': '#f5edd9',   // Fondo dorado suave
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
