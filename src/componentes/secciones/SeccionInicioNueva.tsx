import { useState } from 'react'
import { seccionInicio } from '../../contenido/textos'
import CarruselVideos from '../diseno/CarruselVideos'

export default function SeccionInicioNueva() {
  const [carruselAbierto, setCarruselAbierto] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18
    setTilt({ x, y })
  }
  const handleTiltReset = () => setTilt({ x: 0, y: 0 })

  return (
    <>
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 35% 45%, #F4F5F8 0%, #E8E9EE 55%, #D8DAE0 100%)' }}
    >
      {/* ── Swoosh estilo banner oficial — una curva suave, 3 capas ── */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 480"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: '54%' }}
      >
        {/* Línea blanca fina — capa superior del swoosh */}
        <path
          d="M0,318 C380,348 900,318 1440,278 L1440,322 C900,362 380,392 0,362 Z"
          fill="white"
        />
        {/* Franja naranja — debajo del blanco */}
        <path
          d="M0,330 C380,360 900,330 1440,290 L1440,364 C900,404 380,374 0,344 Z"
          fill="#FF6600"
        />
        {/* Relleno azul oscuro — capa base */}
        <path
          d="M0,344 C380,374 900,344 1440,304 L1440,480 L0,480 Z"
          fill="#012857"
        />
      </svg>

      {/* Vota Todo — esquina superior izquierda */}
      <img
        src="/imagenes/campa%C3%B1a/vota_todo_png.png"
        alt="Vota Todo"
        className="absolute top-24 left-4 sm:left-8 w-32 sm:w-40 object-contain drop-shadow-xl pointer-events-none z-10"
      />

      {/* Número "1" decorativo translúcido — detalle del banner oficial */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ fontSize: 'clamp(200px, 28vw, 380px)', fontWeight: 900,
          color: 'rgba(1,40,87,0.055)', fontFamily: 'Montserrat, sans-serif',
          lineHeight: 1, userSelect: 'none', paddingRight: '2vw' }}
      >
        1
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda — Imagen alcalde */}
          <div className="flex flex-col items-center lg:items-start">

            {/* Imagen alcalde_javier */}
            <img
              src="/imagenes/campa%C3%B1a/alcalde_javier.png"
              alt="Javier Altamirano Alcalde"
              className="w-full max-w-sm sm:max-w-md object-contain drop-shadow-2xl"
            />

            {/* Texto oculto temporalmente — descomentar cuando se necesite
            <div className="leading-none"> ... </div>
            <p>Seguridad, Salud y Empleo.</p>
            <p>Experiencia para escuchar...</p>
            */}

            {/* Botones — ocultos temporalmente */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full lg:w-auto" style={{ display: 'none' }}>
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

            {/* Estadística — oculta temporalmente */}
            <div className="flex justify-center w-full" style={{ display: 'none' }}>
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
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltReset}
              style={{
                transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.6s ease' : 'transform 0.08s ease',
              }}
            >
              {/* Marco decorativo animado */}
              <div className="absolute -inset-5 rounded-3xl pointer-events-none animate-glow-nar opacity-60" style={{ background: 'radial-gradient(circle, rgba(255,102,0,0.25) 0%, rgba(0,53,160,0.1) 60%, transparent 100%)' }} />
              {/* Borde naranja sutil */}
              <div className="absolute -inset-1 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(135deg, #FF6600, #012857, #FF6600)', padding: '2px', borderRadius: '24px' }}>
                <div className="w-full h-full rounded-3xl bg-white" />
              </div>

              {/* Imagen */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/imagenes/javier_altamirano_mano.jpeg"
                  alt={seccionInicio.imagenAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105"
                />
                {/* Brillo diagonal sobre la foto */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(0,53,160,0.08) 100%)' }} />
              </div>

              {/* Badge flotante naranja */}
              <div className="absolute -bottom-4 -left-4 font-titulo font-black text-sm px-4 py-2 rounded-2xl shadow-lg text-white animate-breath" style={{ background: 'linear-gradient(135deg, #FF6600, #E55500)' }}>
                Ambato 2027 - 2031
              </div>

              {/* Partícula decorativa */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full border-2 border-oro animate-spin-slow opacity-70" />
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

    </section>

    {carruselAbierto && <CarruselVideos onCerrar={() => setCarruselAbierto(false)} />}
  </>
  )
}
