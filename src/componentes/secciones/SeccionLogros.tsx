import { useState } from 'react'
import { seccionLogros } from '../../contenido/textos'

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
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-azul-claro flex items-center justify-center text-2xl">
            {logro.icono}
          </div>
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
          <a
            href={seccionLogros.botonRendicion.href}
            className="bg-oro hover:bg-oro-oscuro text-azul font-titulo font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-oro/30 hover:scale-105 text-sm tracking-wide"
          >
            {seccionLogros.botonRendicion.texto}
          </a>
        </div>

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
