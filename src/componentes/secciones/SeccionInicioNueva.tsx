import { useState } from 'react'
import { seccionInicio } from '../../contenido/textos'
import CarruselVideos from '../diseno/CarruselVideos'

export default function SeccionInicioNueva() {
  const [girada, setGirada] = useState(false)
  const [carruselAbierto, setCarruselAbierto] = useState(false)

  return (
    <>
    <section
      id="inicio"
      className="relative min-h-screen bg-white flex items-center overflow-hidden"
    >
      {/* Banda azul con curva redondeada */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 420"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: '48%' }}
      >
        <path
          d="M0,420 L0,280 Q360,120 720,100 Q1080,80 1440,60 L1440,420 Z"
          fill="#21243D"
        />
      </svg>

      {/* Franja dorada encima — más delgada */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 420"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: '48%' }}
      >
        <path
          d="M0,280 Q360,120 720,100 Q1080,80 1440,60 L1440,78 Q1080,98 720,118 Q360,138 0,298 Z"
          fill="#AC7C3F"
        />
      </svg>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-oro/8 blur-3xl" />
        <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-azul/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #21243D 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda — Texto centrado */}
          <div className="space-y-6 flex flex-col items-center text-center">

            {/* Logo Ambato con Javier */}
            <div className="leading-none">
              {/* Fila superior: Ambato con (+ Javier en desktop) */}
              <div className="flex items-end gap-1 leading-none justify-center">
                <span className="font-titulo font-black text-[3.2rem] sm:text-[4rem] xl:text-[4.8rem] text-azul tracking-tight leading-none mb-2">
                  Ambato
                </span>
                <span className="text-azul/60 text-base font-light tracking-widest mb-4 ml-2">
                  con
                </span>
                {/* Javier solo en desktop */}
                <img
                  src="/imagenes/javier_nombre.png"
                  alt="Javier"
                  className="hidden sm:block h-44 xl:h-52 w-auto object-contain mb-[-44px]"
                  style={{ filter: 'brightness(0) invert(1) sepia(1) hue-rotate(195deg) saturate(20%) brightness(0.22)' }}
                />
              </div>
              {/* Javier solo en móvil — debajo, centrado */}
              <div className="flex justify-center">
                <img
                  src="/imagenes/javier_nombre.png"
                  alt="Javier"
                  className="block sm:hidden h-40 w-auto object-contain mt-1"
                  style={{ filter: 'brightness(0) invert(1) sepia(1) hue-rotate(195deg) saturate(20%) brightness(0.22)' }}
                />
              </div>
            </div>

            {/* Subtítulo en oro */}
            <p className="text-oro font-semibold text-xl sm:text-2xl italic leading-snug">
              Seguridad, Salud y Empleo.
            </p>

            {/* Línea dorada decorativa */}
            <div className="w-16 h-1 bg-oro rounded-full" />

            {/* Frase de apoyo */}
            <p className="text-azul/70 text-lg leading-relaxed max-w-xl">
              ¡Ya lo hicimos! <strong className="text-azul font-semibold">continuemos el trabajo...</strong>
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full lg:w-auto">
              <button
                onClick={() => setCarruselAbierto(true)}
                className="inline-flex items-center justify-center gap-2 bg-azul hover:bg-azul-claro text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-105 border border-oro/60 hover:border-oro"
              >
                {seccionInicio.boton1.texto}
                <span className="text-lg">↓</span>
              </button>
              <a
                href={seccionInicio.boton2.href}
                className="inline-flex items-center justify-center gap-2 bg-azul hover:bg-azul-claro text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-105 border border-oro/60 hover:border-oro"
              >
                {seccionInicio.boton2.texto}
              </a>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-azul/10 w-full">
              {seccionInicio.estadisticas.map((stat) => (
                <div key={stat.descripcion} className="text-center">
                  <div className="font-titulo font-black text-3xl text-oro">{stat.numero}</div>
                  <div className="text-white/80 text-xs mt-1 leading-tight">{stat.descripcion}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — Foto del candidato */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setGirada(true)}
              onMouseLeave={() => setGirada(false)}
            >
              {/* Marco decorativo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-oro/20 to-azul/10 blur-xl pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-full h-full rounded-3xl border-2 border-azul/20 pointer-events-none" />

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
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-100 border border-azul/10 shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={seccionInicio.imagenCandidato}
                      alt={seccionInicio.imagenAlt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-100 border border-azul/10 shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <img
                      src="/imagenes/new_images/19.jpeg"
                      alt="Candidato con la comunidad"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-4 -left-4 bg-azul text-oro font-titulo font-black text-sm px-4 py-2 rounded-2xl shadow-lg">
                Ambato 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-azul/30 text-xs z-10">
        <span>Desliza para ver más</span>
        <div className="w-6 h-10 rounded-full border border-azul/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-azul/40 animate-bounce mt-1" />
        </div>
      </div>

      {/* Ola divisora */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none z-10">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path
            d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>

    {carruselAbierto && <CarruselVideos onCerrar={() => setCarruselAbierto(false)} />}
  </>
  )
}
