import { useState } from 'react'
import { seccionPropuestasNuevas } from '../../contenido/textos'

function TarjetaPropuesta({
  tarjeta,
  abierto,
  onToggle,
}: {
  tarjeta: { icono: string; titulo: string; resumen: string; puntos: string[] }
  abierto: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        abierto
          ? 'border-oro bg-oro-claro shadow-lg'
          : 'border-gray-100 bg-white hover:border-oro/40 hover:shadow-md'
      }`}
    >
      <button onClick={onToggle} className="w-full text-left p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-azul flex items-center justify-center text-2xl">
            {tarjeta.icono}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-titulo font-bold text-azul text-lg leading-tight mb-1">
              {tarjeta.titulo}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{tarjeta.resumen}</p>
          </div>
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-azul/20 flex items-center justify-center text-azul transition-transform duration-300 ${
              abierto ? 'rotate-45 bg-azul text-white border-azul' : ''
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
          <div className="border-t border-oro/30 pt-4 space-y-2">
            {tarjeta.puntos.map((punto, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-oro flex items-center justify-center text-azul text-xs font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-azul text-sm leading-relaxed">{punto}</span>
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
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-sm"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={frente} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-sm"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img src={reverso} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default function SeccionPropuestasNuevas() {
  const [abierta, setAbierta] = useState<number | null>(null)

  return (
    <section id="propuestas-nuevas" className="relative py-24 pb-36 bg-white overflow-hidden -mt-px">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase mb-3">
            {seccionPropuestasNuevas.etiqueta}
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul">
            {seccionPropuestasNuevas.titulo}{' '}
            <span className="text-oro">{seccionPropuestasNuevas.tituloDestacado}</span>
          </h2>
        </div>

        {/* 4 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seccionPropuestasNuevas.tarjetas.map((tarjeta, index) => (
            <TarjetaPropuesta
              key={index}
              tarjeta={tarjeta}
              abierto={abierta === index}
              onToggle={() => setAbierta(abierta === index ? null : index)}
            />
          ))}
        </div>

        {/* 4 fotos con flip — fila única */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {seccionPropuestasNuevas.galeria.map((img, i) => (
            <ImagenFlip key={i} frente={img.frente} reverso={img.reverso} alt={`Propuesta ${i + 1}`} />
          ))}
        </div>

      </div>

      {/* Ola divisora — transición hacia Trayectoria (azul-muy-claro) */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#eaeaf2" />
        </svg>
      </div>
    </section>
  )
}
