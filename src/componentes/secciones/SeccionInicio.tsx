import { useState, useEffect } from 'react'
import { seccionInicio } from '../../contenido/textos'

export default function SeccionInicio() {
  const [indice, setIndice] = useState(0)
  const [visible, setVisible] = useState(true)
  const [girada, setGirada] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndice(i => (i + 1) % seccionInicio.titulosRotativos.length)
        setVisible(true)
      }, 350)
    }, 2800)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-azul flex items-center overflow-hidden"
    >
      {/* Fondo decorativo con patrón */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-oro/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-azul-claro/20 blur-3xl" />
        {/* Patrón de puntos */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #F5A800 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda — Texto */}
          <div className="space-y-6">
            {/* Etiqueta */}
            <div className="inline-flex items-center gap-2 bg-oro/20 border border-oro/30 text-oro text-xs font-semibold px-4 py-2 rounded-full tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-oro animate-pulse" />
              {seccionInicio.etiqueta}
            </div>

            {/* Título principal */}
            <h1 className="font-titulo font-black text-5xl sm:text-6xl xl:text-6xl text-white leading-tight">
              {seccionInicio.titulo}
              {/* Contenedor de altura fija para evitar saltos de layout */}
              <span className="block h-[1.25em] overflow-hidden">
                <span
                  className="text-oro inline-block whitespace-nowrap transition-opacity duration-300"
                  style={{ opacity: visible ? 1 : 0 }}
                >
                  {seccionInicio.titulosRotativos[indice]}
                </span>
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              {seccionInicio.descripcion}
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={seccionInicio.boton1.href}
                className="inline-flex items-center justify-center gap-2 bg-oro hover:bg-oro-oscuro text-azul font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-oro/20 hover:shadow-oro/40 hover:scale-105"
              >
                {seccionInicio.boton1.texto}
                <span className="text-lg">↓</span>
              </a>
              <a
                href={seccionInicio.boton2.href}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-oro text-white hover:text-oro font-bold px-8 py-4 rounded-full transition-all duration-200"
              >
                {seccionInicio.boton2.texto}
              </a>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {seccionInicio.estadisticas.map((stat) => (
                <div key={stat.descripcion} className="text-center sm:text-left">
                  <div className="font-titulo font-black text-3xl text-oro">{stat.numero}</div>
                  <div className="text-white/50 text-xs mt-1 leading-tight">{stat.descripcion}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — Foto del candidato */}
          <div className="flex justify-center lg:justify-end">
            {/* El hover se captura aquí, en el contenedor simple sin transforms */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setGirada(true)}
              onMouseLeave={() => setGirada(false)}
            >
              {/* Marco decorativo — sin pointer-events para no interferir */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-oro/30 to-transparent blur-xl pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-full h-full rounded-3xl border-2 border-oro/30 pointer-events-none" />

              {/* Imagen con flip al hover */}
              <div
                className="relative w-72 h-96 sm:w-80 sm:h-[420px]"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 pointer-events-none"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: girada ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Cara delantera */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden bg-azul-claro/30 border border-white/10"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={seccionInicio.imagenCandidato}
                      alt={seccionInicio.imagenAlt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Cara trasera */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden bg-azul-claro/30 border border-white/10"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <img
                      src="/imagenes/abrazo.jpg"
                      alt="Candidato con la comunidad"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-4 -left-4 bg-oro text-azul font-titulo font-black text-sm px-4 py-2 rounded-2xl shadow-lg">
                Ambato 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>Desliza para ver más</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce mt-1" />
        </div>
      </div>

      {/* Ola divisora — transición hacia sección blanca */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path
            d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  )
}
