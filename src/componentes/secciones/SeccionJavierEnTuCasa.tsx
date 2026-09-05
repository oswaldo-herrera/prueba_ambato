import { useEffect, useRef, useState } from 'react'

const galeria = [
  '/imagenes/new_images/30.jpg',
  '/imagenes/new_images/31.jpeg',
  '/imagenes/new_images/32.jpeg',
  '/imagenes/new_images/33.jpeg',
  '/imagenes/new_images/34.jpeg',
  '/imagenes/new_images/35.jpeg',
  '/imagenes/new_images/36.jpeg',
  '/imagenes/new_images/38.jpeg',
  '/imagenes/new_images/39.jpeg',
  '/imagenes/new_images/40.jpeg',
]

export default function SeccionJavierEnTuCasa() {
  const [activo, setActivo] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActivo(i => (i + 1) % galeria.length)
    }, 4000)
  }

  const irA = (i: number) => { setActivo(i); resetTimer() }
  const anterior = () => irA((activo - 1 + galeria.length) % galeria.length)
  const siguiente = () => irA((activo + 1) % galeria.length)

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  return (
    <section id="javierentucasa" className="bg-white py-24 -mt-px overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase mb-3">
            Experiencia para escuchar
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul">
            Javier <span className="text-oro">en Tu Casa</span>
          </h2>
          <p className="mt-3 font-titulo font-black text-xl sm:text-2xl text-gray-400">
            Ambato habla — Javier escucha
          </p>
        </div>

        {/* Carrusel ancho completo */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '16/7' }}>
          {galeria.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Javier en Tu Casa ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === activo ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-azul/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {activo + 1} / {galeria.length}
          </div>
          <button onClick={anterior} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-oro text-white flex items-center justify-center text-2xl font-bold transition-all duration-200 backdrop-blur-sm" aria-label="Anterior">‹</button>
          <button onClick={siguiente} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-oro text-white flex items-center justify-center text-2xl font-bold transition-all duration-200 backdrop-blur-sm" aria-label="Siguiente">›</button>
        </div>

        {/* Puntos */}
        <div className="flex justify-center gap-2 mt-4">
          {galeria.map((_, i) => (
            <button key={i} onClick={() => irA(i)} className={`rounded-full transition-all duration-300 ${i === activo ? 'w-6 h-2 bg-oro' : 'w-2 h-2 bg-azul/20 hover:bg-azul/40'}`} aria-label={`Foto ${i + 1}`} />
          ))}
        </div>

        {/* Frase */}
        <p className="mt-8 text-center font-titulo font-black text-3xl sm:text-4xl text-oro tracking-tight leading-tight">
          El futuro se construye en territorio.
        </p>

      </div>
    </section>
  )
}
