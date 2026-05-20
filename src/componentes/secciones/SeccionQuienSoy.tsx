import { useState } from 'react'
import { seccionQuienSoy } from '../../contenido/textos'

const galeria = [
  '/imagenes/calle.jpg',
  '/imagenes/abrazo.jpg',
  '/imagenes/abrazo_1.jpg',
  '/imagenes/abrazo_2.jpg',
  '/imagenes/abrazo4.jpg',
  '/imagenes/hablando.jpg',
]

export default function SeccionQuienSoy() {
  const [girada, setGirada] = useState(false)
  const [galeriaAbierta, setGaleriaAbierta] = useState(false)
  const [indiceActivo, setIndiceActivo] = useState(0)

  const anterior = () => setIndiceActivo(i => (i - 1 + galeria.length) % galeria.length)
  const siguiente = () => setIndiceActivo(i => (i + 1) % galeria.length)

  const cerrar = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setGaleriaAbierta(false)
  }

  return (
    <section id="quiensoy" className="relative py-24 pb-36 bg-white overflow-hidden -mt-px">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase mb-3">
            {seccionQuienSoy.etiqueta}
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul">
            {seccionQuienSoy.titulo}{' '}
            <span className="text-oro">{seccionQuienSoy.tituloDestacado}</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            {seccionQuienSoy.descripcion}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Imagen con flip 3D al hover */}
          <div
            className="relative order-2 lg:order-1 cursor-pointer"
            onMouseEnter={() => setGirada(true)}
            onMouseLeave={() => setGirada(false)}
          >
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl bg-oro/10 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-azul/5 pointer-events-none" />

            <div className="relative w-full aspect-[4/5]" style={{ perspective: '1000px' }}>
              <div
                className="relative w-full h-full transition-transform duration-700 pointer-events-none"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: girada ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-100 border border-gray-200"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img src={seccionQuienSoy.imagen} alt={seccionQuienSoy.imagenAlt} className="w-full h-full object-cover" />
                </div>
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-100 border border-gray-200"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img src="/imagenes/trabajando.jpg" alt="Candidato trabajando" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Tres pilares + botón galería */}
          <div className="order-1 lg:order-2 space-y-6">
            {seccionQuienSoy.pilares.map((pilar) => (
              <div
                key={pilar.numero}
                className="group flex gap-5 p-5 rounded-2xl hover:bg-azul-muy-claro transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-oro/10 group-hover:bg-oro flex items-center justify-center transition-colors duration-200">
                  <span className="font-titulo font-black text-oro group-hover:text-azul text-sm transition-colors duration-200">
                    {pilar.numero}
                  </span>
                </div>
                <div>
                  <h3 className="font-titulo font-bold text-azul text-lg mb-1">{pilar.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pilar.texto}</p>
                </div>
              </div>
            ))}

            {/* Botón galería */}
            <div className="pt-2">
              <button
                onClick={() => { setIndiceActivo(0); setGaleriaAbierta(true) }}
                className="inline-flex items-center gap-3 bg-azul hover:bg-azul-claro text-white font-titulo font-bold px-7 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-azul/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Trabajo para la gente
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal galería */}
      {galeriaAbierta && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={cerrar}
        >
          <div className="relative w-full max-w-3xl" onClick={e => e.stopPropagation()}>

            {/* Botón cerrar */}
            <button
              onClick={() => setGaleriaAbierta(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl leading-none z-10"
            >
              ✕
            </button>

            {/* Imagen principal */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3]">
              <img
                key={indiceActivo}
                src={galeria[indiceActivo]}
                alt={`Foto ${indiceActivo + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Flechas */}
              <button
                onClick={anterior}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors text-xl"
              >
                ‹
              </button>
              <button
                onClick={siguiente}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors text-xl"
              >
                ›
              </button>

              {/* Contador */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                {indiceActivo + 1} / {galeria.length}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="flex gap-2 mt-3 justify-center flex-wrap">
              {galeria.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setIndiceActivo(i)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    i === indiceActivo ? 'border-oro scale-110' : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Ola divisora */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#eaeaf2" />
        </svg>
      </div>
    </section>
  )
}
