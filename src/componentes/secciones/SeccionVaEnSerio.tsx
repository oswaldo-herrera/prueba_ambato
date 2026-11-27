import { useState, useEffect, useCallback } from 'react'

const imagenes = [
  `/imagenes/campa%C3%B1a/va_en_serio/1.1.jpg`,
  ...Array.from({ length: 11 }, (_, i) => `/imagenes/campa%C3%B1a/va_en_serio/${i + 1}.jpeg`),
]

export default function SeccionVaEnSerio() {
  const [actual, setActual] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const anterior = useCallback(() =>
    setActual(i => (i - 1 + imagenes.length) % imagenes.length), [])
  const siguiente = useCallback(() =>
    setActual(i => (i + 1) % imagenes.length), [])

  useEffect(() => {
    const t = setInterval(siguiente, 4000)
    return () => clearInterval(t)
  }, [siguiente])

  const prev = (actual - 1 + imagenes.length) % imagenes.length
  const next = (actual + 1) % imagenes.length

  return (
    <section className="bg-[#012857] py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10">
          <p className="text-oro text-sm font-bold tracking-[0.25em] uppercase mb-2">Javier Altamirano</p>
          <h2 className="text-white text-4xl sm:text-5xl font-titulo font-black">
            Va en <span className="text-oro">Serio</span>
          </h2>
        </div>

        {/* Video Facebook */}
        <div className="flex justify-center mb-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1690054669487630%2F&show_text=false&width=267&t=0"
              width="267"
              height="476"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Imagen izquierda */}
          <div className="hidden sm:block w-48 lg:w-64 flex-shrink-0 opacity-40 scale-90 transition-all duration-500">
            <img
              src={imagenes[prev]}
              alt=""
              className="w-full aspect-[4/3] object-contain bg-black/60 rounded-2xl"
            />
          </div>

          {/* Imagen central */}
          <div className="flex-shrink-0 w-full sm:w-[480px] lg:w-[560px] transition-all duration-500">
            <div
              className="relative rounded-3xl overflow-hidden border-4 border-oro shadow-2xl shadow-black/50 cursor-zoom-in"
              onClick={() => setLightbox(true)}
            >
              <img
                key={actual}
                src={imagenes[actual]}
                alt={`Va en serio ${actual + 1}`}
                className="w-full aspect-[4/3] object-contain bg-black hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-end justify-end p-3 pointer-events-none">
                <span className="bg-black/40 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">🔍 Ver</span>
              </div>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="hidden sm:block w-48 lg:w-64 flex-shrink-0 opacity-40 scale-90 transition-all duration-500">
            <img
              src={imagenes[next]}
              alt=""
              className="w-full aspect-[4/3] object-contain bg-black/60 rounded-2xl"
            />
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={anterior}
            className="w-11 h-11 rounded-full border-2 border-oro text-oro hover:bg-oro hover:text-azul transition-all duration-200 flex items-center justify-center font-bold text-lg"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {imagenes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActual(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === actual
                    ? 'bg-oro w-6 h-2'
                    : 'bg-white/30 w-2 h-2 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={siguiente}
            className="w-11 h-11 rounded-full border-2 border-oro text-oro hover:bg-oro hover:text-azul transition-all duration-200 flex items-center justify-center font-bold text-lg"
          >
            ›
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors z-10"
          >✕</button>
          <button
            onClick={e => { e.stopPropagation(); anterior() }}
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-colors"
          >‹</button>
          <img
            src={imagenes[actual]}
            alt={`Va en serio ${actual + 1}`}
            onClick={e => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
          />
          <button
            onClick={e => { e.stopPropagation(); siguiente() }}
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-colors"
          >›</button>
        </div>
      )}
    </section>
  )
}
