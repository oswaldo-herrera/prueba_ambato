import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { seccionLogros } from '../../contenido/textos'

function IconoLogro({ titulo }: { titulo: string }) {
  const t = titulo.toLowerCase()

  if (t.includes('desnivel'))
    return (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      </div>
    )

  if (t.includes('vehicular') || t.includes('crtv') || t.includes('revisión'))
    return (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      </div>
    )

  if (t.includes('deporte'))
    return (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      </div>
    )

  if (t.includes('música') || t.includes('musica'))
    return (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      </div>
    )

  if (t.includes('mercado'))
    return (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      </div>
    )

  if (t.includes('quebrada') || t.includes('infantil') || t.includes('atocha') || t.includes('gallinazos'))
    return (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </div>
    )

  if (t.includes('agua'))
    return (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.625 4.5-5.25 7.5-5.25 10.5a5.25 5.25 0 0010.5 0C17.25 9.75 14.625 6.75 12 2.25z" />
        </svg>
      </div>
    )

  // fallback
  return (
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-azul-claro flex items-center justify-center text-2xl">
      {/* icono genérico */}
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </div>
  )
}

function TarjetaLogro({
  logro,
  abierto,
  onToggle,
}: {
  logro: { icono: string; titulo: string; resumen: string; puntos: string[] }
  abierto: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        abierto
          ? 'border-oro bg-oro/10 shadow-lg'
          : 'border-white/10 bg-white/5 hover:border-oro/50 hover:bg-white/10'
      }`}
    >
      <button onClick={onToggle} className="w-full text-left p-6">
        <div className="flex items-start gap-4">
          <IconoLogro titulo={logro.titulo} />
          <div className="flex-1 min-w-0">
            <h3 className="font-titulo font-bold text-white text-lg leading-tight mb-1">
              {logro.titulo}
            </h3>
            <p className="text-white/55 text-sm leading-relaxed">{logro.resumen}</p>
          </div>
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 ${
              abierto
                ? 'rotate-45 bg-oro text-azul border-oro'
                : 'border-white/20 text-white'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </button>
      {abierto && (
        <div className="px-6 pb-6">
          <div className="border-t border-white/15 pt-4 space-y-2">
            {logro.puntos.map((punto, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-oro flex items-center justify-center text-azul text-xs font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-white/80 text-sm leading-relaxed">{punto}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ImagenFlip({ frente, reverso, alt }: { frente: string; reverso: string; alt: string }) {
  const [girada, setGirada] = useState(false)
  return (
    <div
      className="aspect-square cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setGirada(true)}
      onMouseLeave={() => setGirada(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: girada ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={frente} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-md"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img src={reverso} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default function SeccionLogros() {
  const [logroAbierto, setLogroAbierto] = useState<number | null>(null)
  const [rendicionAbierta, setRendicionAbierta] = useState(false)
  const [rendicionPos, setRendicionPos] = useState<{ top: number; left: number } | null>(null)
  const botonRendicionRef = useRef<HTMLButtonElement>(null)

  const alternarRendicion = () => {
    if (!rendicionAbierta && botonRendicionRef.current) {
      const rect = botonRendicionRef.current.getBoundingClientRect()
      setRendicionPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 })
    }
    setRendicionAbierta(v => !v)
  }

  return (
    <section id="logros" className="relative py-24 pb-36 bg-azul overflow-hidden -mt-px scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase mb-3">
            {seccionLogros.etiqueta}
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-white">
            {seccionLogros.titulo}{' '}
            <span className="text-oro">{seccionLogros.tituloDestacado}</span>
          </h2>
        </div>

        {/* Primera cuadrícula — 4 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seccionLogros.logros.map((logro, index) => (
            <TarjetaLogro
              key={index}
              logro={logro}
              abierto={logroAbierto === index}
              onToggle={() => setLogroAbierto(logroAbierto === index ? null : index)}
            />
          ))}
        </div>

        {/* Galería con flip al hover */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {seccionLogros.galeria.map((img, i) => (
            <ImagenFlip key={i} frente={img.frente} reverso={img.reverso} alt={`Galería ${i + 1}`} />
          ))}
        </div>

        {/* Segunda cuadrícula — 4 tarjetas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {seccionLogros.logros2.map((logro, index) => (
            <TarjetaLogro
              key={index}
              logro={logro}
              abierto={logroAbierto === index + 100}
              onToggle={() => setLogroAbierto(logroAbierto === index + 100 ? null : index + 100)}
            />
          ))}
        </div>

        {/* Botón rendición de cuentas */}
        <div className="mt-12 flex justify-center">
          <button
            ref={botonRendicionRef}
            onClick={alternarRendicion}
            className="inline-flex items-center gap-2 bg-oro hover:bg-oro-oscuro text-azul font-titulo font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-oro/30 hover:scale-105 text-sm tracking-wide"
          >
            {seccionLogros.botonRendicion.texto}
            <svg className={`w-4 h-4 transition-transform duration-200 ${rendicionAbierta ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {rendicionAbierta && rendicionPos && createPortal(
          <>
            <div className="fixed inset-0 z-40" onClick={() => setRendicionAbierta(false)} />
            <div
              className="fixed -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
              style={{ top: rendicionPos.top, left: rendicionPos.left }}
            >
              {seccionLogros.botonRendicion.opciones.map((opcion, i) => (
                <a
                  key={i}
                  href={opcion.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setRendicionAbierta(false)}
                  className="block px-5 py-3 text-azul text-sm font-medium hover:bg-oro-claro transition-colors border-b border-gray-100 last:border-b-0"
                >
                  {opcion.texto}
                </a>
              ))}
            </div>
          </>,
          document.body
        )}

      </div>

      {/* Ola divisora — transición hacia sección azul-muy-claro */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
