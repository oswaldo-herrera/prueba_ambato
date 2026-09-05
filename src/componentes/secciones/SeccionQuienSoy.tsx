import { useState } from 'react'
import { seccionQuienSoy } from '../../contenido/textos'

const galeria = [
  '/imagenes/new_images/53.jpeg',
  //'/imagenes/new_images/j2.jpg',
  //'/imagenes/new_images/j3.jpg',
  //'/imagenes/new_images/j4.PNG',
  '/imagenes/new_images/30.jpg',
  //'/imagenes/new_images/j6.jpg',
  //'/imagenes/new_images/j7.jpg',
  '/imagenes/new_images/j5.PNG',
  '/imagenes/new_images/50.jpeg',
  '/imagenes/new_images/51.jpeg',
  '/imagenes/new_images/52.jpeg',
  '/imagenes/new_images/54.jpeg',
  '/imagenes/new_images/55.jpeg',
  '/imagenes/new_images/56.jpeg',
  '/imagenes/new_images/57.jpeg',
  '/imagenes/new_images/58.jpeg',
  '/imagenes/new_images/59.jpeg',
  '/imagenes/new_images/60.jpeg',
  '/imagenes/new_images/22.jpeg',
  '/imagenes/new_images/25.jpeg',
  '/imagenes/new_images/2.jpeg',
  '/imagenes/new_images/20.jpeg',
  '/imagenes/new_images/24.jpeg',
  '/imagenes/new_images/23.jpeg',
  '/imagenes/new_images/j8.jpg',
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

            <div className="relative w-full aspect-[4/3]" style={{ perspective: '1000px' }}>
              <div
                className="relative w-full h-full transition-transform duration-700 pointer-events-none"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: girada ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-100"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img src={seccionQuienSoy.imagen} alt={seccionQuienSoy.imagenAlt} className="w-full h-full object-cover object-top" />
                </div>
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-100 border border-gray-200"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img src="/imagenes/new_images/21.jpeg" alt="Candidato trabajando" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Biografía + botón galería */}
          <div className="order-1 lg:order-2 space-y-5">

            {/* Nombre destacado */}
            <div className="border-l-4 border-oro pl-4">
              <p className="text-oro font-black text-base leading-snug uppercase tracking-wide">

              </p>
              <h3 className="font-titulo font-black text-azul text-xl leading-tight mt-1">
                Javier Francisco Altamirano Sánchez
              </h3>
            </div>

            {/* Texto biográfico */}
            <div className="text-gray-600 text-sm leading-relaxed space-y-3 text-justify">
              <p>
                Conocido en Ambato como <strong className="text-azul">"Javier Altamirano"</strong>, es un ciudadano
                que creció en el barrio <strong className="text-azul">"La Merced"</strong>. Es hijo de Jaime Altamirano
                Chico y Clelia Sánchez Arias. Durante el trayecto de su vida sufrió injusticias, vivió carencias y
                padeció como muchos: problemas económicos, laborales, de desigualdad y falta de oportunidades.
              </p>
              <p>
                Desde muy temprana edad Javier apoyó a su familia; comenzó a trabajar desde los{' '}
                <strong className="text-azul">12 años de edad</strong> en el negocio familiar. Se preparó
                profesionalmente con mucho esfuerzo y sacrificio, recibiéndose como{' '}
                <strong className="text-azul">Doctor en Jurisprudencia por la Universidad Central del Ecuador</strong>.
              </p>
              <p>
                Fue <strong className="text-azul">Concejal en el Gobierno Municipal de Ambato</strong> en el período
                2004–2008. Trabajó en el período 2014–2019 como{' '}
                <strong className="text-azul">Decano de la Facultad de Jurisprudencia</strong> en la Universidad
                Tecnológica Indoamérica.
              </p>
              <p>
                Con el apoyo de más de <strong className="text-azul">95,000 Ambateños</strong>, fue electo{' '}
                <strong className="text-azul">Alcalde en el período 2019–2023</strong>, construyendo grandes obras como
                los <em>"Pasos a desnivel de Huachi Chico e Izamba"</em>,{' '}
                <em>"Centro de Revisión Técnica Vehicular CRTV"</em>, <em>"Casa de la Música"</em>, los{' '}
                <em>"Mercados Chibuleo y Pilahuin"</em>, y la regeneración de parques como el{' '}
                <em>"Del Deporte, Quebrada Los Gallinazos e Infantil de Atocha"</em>, entre otras obras. Como Alcalde
                en pleno <strong className="text-azul">COVID</strong> cuidó la salud y la vida de todos los Ambateños
                con responsabilidad y acciones concretas.
              </p>
              <p className="font-semibold text-azul">
                El <span className="text-oro">PASADO</span> le dio la experiencia, el{' '}
                <span className="text-oro">PRESENTE</span> nos exige evolución — vamos por la{' '}
                <span className="text-oro">CONTINUIDAD</span> de nuestras grandes metas con{' '}
                <span className="text-oro">JAVIER ALTAMIRANO.</span>
              </p>
            </div>

            {/* Carrusel inline */}
            <div className="pt-2 w-full select-none">
              <div className="relative flex items-center gap-2 w-full">

                {/* Flecha izquierda */}
                <button
                  onClick={anterior}
                  className="absolute left-0 z-10 -translate-x-1/2 w-9 h-9 rounded-full bg-azul hover:bg-oro text-white flex items-center justify-center shadow-lg transition-all duration-200 text-lg font-bold"
                  aria-label="Anterior"
                >
                  ‹
                </button>

                {/* Imagen izquierda */}
                <button
                  onClick={anterior}
                  className="shrink-0 w-[22%] aspect-[3/4] rounded-xl overflow-hidden opacity-40 hover:opacity-60 transition-all duration-300 scale-95"
                  aria-label="Anterior"
                >
                  <img
                    src={galeria[(indiceActivo - 1 + galeria.length) % galeria.length]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Imagen central — clic abre galería */}
                <button
                  onClick={() => setGaleriaAbierta(true)}
                  className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-oro shadow-xl transition-all duration-300 group"
                  aria-label="Ver galería"
                >
                  <img
                    key={indiceActivo}
                    src={galeria[indiceActivo]}
                    alt={`Foto ${indiceActivo + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                    <span className="text-white text-xs font-semibold tracking-wide">Ver galería</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                    {indiceActivo + 1} / {galeria.length}
                  </div>
                </button>

                {/* Imagen derecha */}
                <button
                  onClick={siguiente}
                  className="shrink-0 w-[22%] aspect-[3/4] rounded-xl overflow-hidden opacity-40 hover:opacity-60 transition-all duration-300 scale-95"
                  aria-label="Siguiente"
                >
                  <img
                    src={galeria[(indiceActivo + 1) % galeria.length]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Flecha derecha */}
                <button
                  onClick={siguiente}
                  className="absolute right-0 z-10 translate-x-1/2 w-9 h-9 rounded-full bg-azul hover:bg-oro text-white flex items-center justify-center shadow-lg transition-all duration-200 text-lg font-bold"
                  aria-label="Siguiente"
                >
                  ›
                </button>
              </div>

              {/* Puntos de navegación */}
              <div className="flex justify-center gap-1.5 mt-3">
                {galeria.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndiceActivo(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === indiceActivo
                        ? 'w-5 h-1.5 bg-oro'
                        : 'w-1.5 h-1.5 bg-azul/20 hover:bg-azul/40'
                    }`}
                    aria-label={`Foto ${i + 1}`}
                  />
                ))}
              </div>
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
          <div className="relative w-full max-w-xl" onClick={e => e.stopPropagation()}>

            {/* Imagen principal */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3]">

              {/* Botón cerrar */}
              <button
                onClick={() => setGaleriaAbierta(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-oro border border-white/30 hover:border-oro text-white text-base font-bold flex items-center justify-center z-20 transition-all duration-200 shadow-lg"
              >
                ✕
              </button>
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
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#21243D" />
        </svg>
      </div>
    </section>
  )
}
