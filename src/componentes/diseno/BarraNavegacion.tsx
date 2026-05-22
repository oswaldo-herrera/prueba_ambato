import { useState, useEffect } from 'react'
import { navegacion } from '../../contenido/textos'
import CarruselVideos from './CarruselVideos'

export default function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrollado, setScrollado] = useState(false)
  const [carruselAbierto, setCarruselAbierto] = useState(false)

  // Detecta si el usuario hizo scroll para cambiar el fondo del menú
  useEffect(() => {
    const alScrollear = () => setScrollado(window.scrollY > 20)
    window.addEventListener('scroll', alScrollear)
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollado ? 'bg-azul shadow-lg shadow-azul/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/imagenes/logo_ambato.png"
              alt="HERSA Ambato"
              className="h-14 md:h-16 w-auto group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Menú escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            {navegacion.enlaces.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                className="text-white/80 hover:text-oro font-medium text-sm transition-colors duration-200"
              >
                {enlace.texto}
              </a>
            ))}
            <button
              onClick={() => setCarruselAbierto(true)}
              className="bg-oro hover:bg-oro-oscuro text-azul font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-oro/30 hover:scale-105"
            >
              {navegacion.botonPrincipal.texto}
            </button>
          </nav>

          {/* Botón hamburguesa (móvil) */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {menuAbierto && (
          <div className="md:hidden bg-azul border-t border-white/10 pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {navegacion.enlaces.map((enlace) => (
                <a
                  key={enlace.href}
                  href={enlace.href}
                  onClick={() => setMenuAbierto(false)}
                  className="px-4 py-3 text-white/80 hover:text-oro hover:bg-white/5 font-medium text-sm transition-colors"
                >
                  {enlace.texto}
                </a>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => { setMenuAbierto(false); setCarruselAbierto(true) }}
                  className="block w-full text-center bg-oro hover:bg-oro-oscuro text-azul font-bold text-sm px-5 py-3 rounded-full transition-colors"
                >
                  {navegacion.botonPrincipal.texto}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>

    {carruselAbierto && <CarruselVideos onCerrar={() => setCarruselAbierto(false)} />}
  </>
  )
}
