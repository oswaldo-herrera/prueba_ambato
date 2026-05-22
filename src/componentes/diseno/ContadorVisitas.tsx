import { useEffect, useRef, useState } from 'react'

const CLAVE_CONTEO  = 'hersa_visitas'
const CLAVE_ULTIMA  = 'hersa_ultima_visita'
const INTERVALO_MS  = 30 * 60 * 1000   // 30 min entre visitas del mismo dispositivo

function leerConteo(): number {
  return parseInt(localStorage.getItem(CLAVE_CONTEO) ?? '0', 10) || 0
}

export default function ContadorVisitas() {
  const [conteo, setConteo] = useState(0)
  const [mostrado, setMostrado] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const ahora    = Date.now()
    const ultima   = parseInt(localStorage.getItem(CLAVE_ULTIMA) ?? '0', 10)
    let   total    = leerConteo()

    if (ahora - ultima > INTERVALO_MS) {
      total += 1
      localStorage.setItem(CLAVE_CONTEO, String(total))
      localStorage.setItem(CLAVE_ULTIMA, String(ahora))
    }

    setConteo(total)
  }, [])

  // Animación roll-up desde 0 hasta el conteo real
  useEffect(() => {
    if (conteo === 0) return
    const duracion  = 1400
    const inicio    = performance.now()
    const desde     = Math.max(0, conteo - 80)

    const tick = (ahora: number) => {
      const t = Math.min((ahora - inicio) / duracion, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setMostrado(Math.round(desde + (conteo - desde) * ease))
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [conteo])

  const digitos = String(mostrado).padStart(4, '0').split('')

  return (
    <div className="border-t border-gray-100 pt-4 mt-2">
      <div className="flex items-center justify-between gap-4">

        {/* Dígitos */}
        <div className="flex items-center gap-1">
          {digitos.map((d, i) => (
            <div
              key={i}
              className="w-8 h-10 rounded-lg bg-azul flex items-center justify-center shadow-inner overflow-hidden"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-black/20" />
                <span className="relative font-titulo font-black text-oro text-lg leading-none z-10">
                  {d}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Etiqueta derecha */}
        <div className="text-right">
          <p className="text-azul font-black text-sm leading-tight">Continuamos con Javier</p>
        </div>
      </div>
    </div>
  )
}
