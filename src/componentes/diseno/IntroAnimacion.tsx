import { useState, useEffect } from 'react'
import BolaBillar from './BolaBillar'

export default function IntroAnimacion() {
  const [saliendo, setSaliendo] = useState(false)
  const [oculto, setOculto] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setSaliendo(true), 2800)
    const t2 = setTimeout(() => setOculto(true), 4200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (oculto) return null

  return (
    <div
      className={`fixed inset-0 z-[300] bg-azul flex items-center justify-center transition-all duration-[1400ms] ease-in-out ${
        saliendo ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100'
      }`}
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-oro/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-oro/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #AC7C3F 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Contenido centrado */}
      <div
        className="text-center px-8 relative"
        style={{ animation: 'zoomEntrada 1s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
      >
        {/* Logo */}
        {/* Para volver al 63: <BolaBillar texto="63" className="h-20 mx-auto mb-8 drop-shadow-xl" /> */}
        <BolaBillar texto="J" className="h-20 mx-auto mb-8 drop-shadow-xl" />

        {/* Etiqueta */}
        <p className="text-oro/80 font-semibold text-xs tracking-[0.3em] uppercase mb-4">
          Ambato 2026
        </p>

        {/* Título principal */}
        <h1 className="font-titulo font-black text-white leading-tight">
          <span className="block text-5xl sm:text-6xl xl:text-7xl">Unidos X el</span>
          <span className="block text-5xl sm:text-7xl xl:text-8xl text-oro mt-1">Futuro</span>
        </h1>

        {/* Línea decorativa */}
        <div className="w-20 h-[3px] bg-oro mx-auto mt-8 rounded-full" />

        {/* Subtexto */}
        <p className="text-white/40 text-sm mt-5 tracking-widest uppercase">
          Continuamos con Javier
        </p>
      </div>

      <style>{`
        @keyframes zoomEntrada {
          0%   { transform: scale(0.3); opacity: 0; filter: blur(12px); }
          60%  { filter: blur(0px); }
          100% { transform: scale(1); opacity: 1; filter: blur(0px); }
        }
      `}</style>
    </div>
  )
}
