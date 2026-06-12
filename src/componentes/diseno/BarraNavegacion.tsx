import { useState, useEffect, useRef } from 'react'
import { navegacion } from '../../contenido/textos'
import CarruselVideos from './CarruselVideos'

export default function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrollado, setScrollado] = useState(false)
  const [carruselAbierto, setCarruselAbierto] = useState(false)
  const [mostrarTaco, setMostrarTaco] = useState(false)
  const [bolaGolpeada, setBolaGolpeada] = useState(false)
  const [tacoPos, setTacoPos] = useState<{ top: number; left: number } | null>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const alScrollear = () => setScrollado(window.scrollY > 20)
    window.addEventListener('scroll', alScrollear)
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  useEffect(() => {
    const t1 = setTimeout(() => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect()
        const tacH = 40
        const tacW = Math.round(tacH * (1750 / 150)) // ancho proporcional = ~467px
        setTacoPos({
          top: rect.top + rect.height / 2 - tacH / 2,
          left: rect.left - tacW, // extremo derecho (punta) queda en el borde izq del logo
        })
      }
      setMostrarTaco(true)
      setBolaGolpeada(true)
    }, 4400)
    const t2 = setTimeout(() => setMostrarTaco(false), 4400 + 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
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
          <a href="#" className="flex items-center ml-16 sm:ml-0">
            <img
              ref={logoRef}
              src="/imagenes/logo_2.png"
              alt="HERSA Ambato"
              className={`h-14 md:h-16 w-auto block ${bolaGolpeada ? 'bola-anim' : 'hover:scale-105 transition-transform duration-200'}`}
            />
          </a>

          {/* Menú escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            {navegacion.enlaces.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                className={`font-medium text-sm transition-colors duration-200 hover:text-oro ${scrollado ? 'text-white/80' : 'text-azul font-semibold'}`}
              >
                {enlace.texto}
              </a>
            ))}
            <a
              href="#registro"
              className="bg-oro hover:bg-oro-oscuro text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:scale-105"
            >
              {navegacion.botonPrincipal.texto}
            </a>
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
                <a
                  href="#registro"
                  onClick={() => setMenuAbierto(false)}
                  className="block w-full text-center bg-oro hover:bg-oro-oscuro text-azul font-bold text-sm px-5 py-3 rounded-full transition-colors"
                >
                  {navegacion.botonPrincipal.texto}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>

    {/* Taco de billar — position: fixed para evitar clipping de flex/overflow */}
    {mostrarTaco && tacoPos && (
      <div
        style={{
          position: 'fixed',
          top: `${tacoPos.top}px`,
          left: `${tacoPos.left}px`,
          pointerEvents: 'none',
          zIndex: 9999,
          animation: 'taco-entrar 3s forwards',
        }}
      >
        <img
          src="/imagenes/taco.png"
          alt=""
          style={{
            height: '40px',
            width: 'auto',
            display: 'block',
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.7))',
          }}
        />
      </div>
    )}

    {carruselAbierto && <CarruselVideos onCerrar={() => setCarruselAbierto(false)} />}
  </>
  )
}
