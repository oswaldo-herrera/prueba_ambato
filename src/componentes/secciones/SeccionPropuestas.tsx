import { useState } from 'react'
import { seccionPropuestas } from '../../contenido/textos'

export default function SeccionPropuestas() {
  const [propuestaAbierta, setPropuestaAbierta] = useState<number | null>(null)

  return (
    <section id="propuestas" className="relative py-24 pb-36 bg-white overflow-hidden -mt-px">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase mb-3">
            {seccionPropuestas.etiqueta}
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul">
            {seccionPropuestas.titulo}{' '}
            <span className="text-oro">{seccionPropuestas.tituloDestacado}</span>
          </h2>
        </div>

        {/* Cuadrícula de propuestas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seccionPropuestas.propuestas.map((propuesta, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                propuestaAbierta === index
                  ? 'border-oro bg-oro-claro shadow-lg'
                  : 'border-gray-100 bg-white hover:border-oro/40 hover:shadow-md'
              }`}
            >
              {/* Cabecera de la tarjeta */}
              <button
                onClick={() => setPropuestaAbierta(propuestaAbierta === index ? null : index)}
                className="w-full text-left p-6"
              >
                <div className="flex items-start gap-4">
                  {/* Icono */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-azul flex items-center justify-center text-2xl">
                    {propuesta.icono}
                  </div>

                  {/* Título y resumen */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-titulo font-bold text-azul text-lg leading-tight mb-1">
                      {propuesta.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {propuesta.resumen}
                    </p>
                  </div>

                  {/* Indicador expandir/colapsar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-azul/20 flex items-center justify-center text-azul transition-transform duration-300 ${
                    propuestaAbierta === index ? 'rotate-45 bg-azul text-white border-azul' : ''
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Puntos del detalle (desplegable) */}
              {propuestaAbierta === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-oro/30 pt-4 space-y-2">
                    {propuesta.puntos.map((punto, i) => (
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
          ))}
        </div>
      </div>

      {/* Ola divisora — transición hacia sección dorada */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#f5edd9" />
        </svg>
      </div>
    </section>
  )
}
