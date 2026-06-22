import { useState, useEffect, useRef } from 'react'
import { navegacion } from '../../contenido/textos'
import CarruselVideos from './CarruselVideos'
import BolaBillar from './BolaBillar'

const BASE_AMBATO = '/imagenes/'
const enc = (f: string) => BASE_AMBATO + encodeURIComponent(f)

const VIDEOS_AMBATO = [
  //{ src: enc('Ambato_La_Gran_Ciudad_GAD_Municipalidad_de_Ambato.mp4'), titulo: 'Ambato La Gran Ciudad' },
  { src: enc('AMBATO_LA_GRAN_CIUDAD.mp4'), titulo: 'Ambato La Gran Ciudad (corto)' }
  //{ src: enc('Aquí_me_quedo_Hnos_Miño_Naranjo_Roger_Ycaza_Nicole_Santana_Sonia_Chagmana_Comite_Permanente.mp4'), titulo: 'Aquí me quedo' },
  //{ src: enc('De_Origen_Ambateño_Comite_Permanente.mp4'), titulo: 'De Origen Ambateño' },
  //{ src: enc('De_Origen_Ambateño_2022_Comite_Permanente_FFF.mp4'), titulo: 'De Origen Ambateño 2022' },
  //{ src: enc('Florecemos_para_el_mundo_Video_Oficial_FFF_2023_Comite_Permanente_FFF.mp4'), titulo: 'Florecemos para el mundo — FFF 2023' },
  //{ src: enc('Mega_Evento_Sebastián_Yatra_FFF_2020_Comite_Permanente_FFF.mp4'), titulo: 'Mega Evento Sebastián Yatra FFF 2020' },
  //{ src: enc('Memorias_del_49_Comite_Permanente_FFF.mp4'), titulo: 'Memorias del 49' },
  //{ src: enc('Música_desde_el_Balcón_El_Origen_Comite_Permanente_FFF.mp4'), titulo: 'Música desde el Balcón — El Origen' },
  //{ src: enc('Nos_Levantamos_Video_Oficial_FFF2022_Comite_Permanente_FFF.mp4'), titulo: 'Nos Levantamos — FFF 2022' },
  //{ src: enc('Somos_Altivos_Comite_Permanente_FFF.mp4'), titulo: 'Somos Altivos' },
]

export default function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrollado, setScrollado] = useState(false)
  const [carruselAbierto, setCarruselAbierto] = useState(false)
  const [videosAmbato, setVideosAmbato] = useState(false)
  const [mostrarTaco, setMostrarTaco] = useState(false)
  const [bolaGolpeada, setBolaGolpeada] = useState(false)
  const [tacoPos, setTacoPos] = useState<{ top: number; left: number } | null>(null)
  const logoRef = useRef<HTMLDivElement>(null)

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
            <div ref={logoRef} className={`h-14 md:h-16 ${bolaGolpeada ? 'bola-anim' : 'hover:scale-105 transition-transform duration-200'}`}>
              {/* Para volver al 63: <BolaBillar texto="63" className="h-full w-auto" /> */}
              <BolaBillar texto="J" className="h-full w-auto" />
            </div>
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
            <button
              onClick={() => setVideosAmbato(true)}
              className={`font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:scale-105 flex items-center gap-2 ${scrollado ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-azul/10 hover:bg-azul/20 text-azul'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ambato
            </button>
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
              <div className="px-4 pt-2 flex flex-col gap-2">
                <button
                  onClick={() => { setMenuAbierto(false); setVideosAmbato(true) }}
                  className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Videos
                </button>
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
    {videosAmbato && <CarruselVideos videos={VIDEOS_AMBATO} onCerrar={() => setVideosAmbato(false)} />}
  </>
  )
}
