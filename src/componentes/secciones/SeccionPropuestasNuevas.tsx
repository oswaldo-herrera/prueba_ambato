import { useState } from 'react'
import { seccionPropuestasNuevas } from '../../contenido/textos'

function IconoPropuesta({ titulo }: { titulo: string }) {
  const t = titulo.toLowerCase()
  if (t.includes('seguridad'))
    return (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
      </svg>
    )
  if (t.includes('salud'))
    return (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  if (t.includes('empleo'))
    return (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    )
  // Movilidad (default)
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  )
}

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
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-azul flex items-center justify-center">
            <IconoPropuesta titulo={tarjeta.titulo} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-titulo font-bold text-azul text-lg leading-tight mb-1">
              {tarjeta.titulo}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed text-justify">{tarjeta.resumen}</p>
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


export default function SeccionPropuestasNuevas() {
  const [abierta, setAbierta] = useState<number | null>(null)

  return (
    <section id="propuestas-nuevas" className="relative py-24 pb-36 bg-white overflow-hidden -mt-px scroll-mt-20">
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

        {/* Fila 1: Seguridad + Salud */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1].map((index) => (
            <TarjetaPropuesta
              key={index}
              tarjeta={seccionPropuestasNuevas.tarjetas[index]}
              abierto={abierta === index}
              onToggle={() => setAbierta(abierta === index ? null : index)}
            />
          ))}
        </div>

        {/* Fila 2: Empleo + Movilidad */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <TarjetaPropuesta
            tarjeta={seccionPropuestasNuevas.tarjetas[2]}
            abierto={abierta === 2}
            onToggle={() => setAbierta(abierta === 2 ? null : 2)}
          />
          <TarjetaPropuesta
            tarjeta={seccionPropuestasNuevas.tarjetas[3]}
            abierto={abierta === 3}
            onToggle={() => setAbierta(abierta === 3 ? null : 3)}
          />
        </div>

      </div>

      {/* Ola divisora — transición hacia SeccionMundial (dark) */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#07091a" />
        </svg>
      </div>
    </section>
  )
}
