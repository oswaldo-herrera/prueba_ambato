import { useState } from 'react'
import { seccionQuienSoy } from '../../contenido/textos'

type VideoItem = { titulo: string; url: string }

// Para agregar más videos de la carpeta consejo_consultivo:
// { titulo: 'Nombre', url: '/imagenes/videos/consejo_consultivo/' + encodeURIComponent('archivo.mp4') }

const videos: VideoItem[] = [
  //v('Consejo Consultivo de Género','quebrada_los_gallinazos.mp4'),
  // Descomenta los que quieras agregar:
  //v('Consejo Consultivo de Jóvenes', 'Consejo Consultivo de Jóvenes _ CCPDA - Consejo de Protección de Derechos de Ambato (720p, h264, youtube).mp4'),
  // v('Consejo Consultivo de Movilidad Humana', 'Consejo Consultivo de Movilidad Humana _ CCPDA - Consejo de Protección de Derechos de Ambato (720p, h264, youtube).mp4'),
  // v('Consejo Consultivo de Personas Adultas Mayores', 'Consejo Consultivo de Personas Adultas Mayores _ CCPDA - Consejo de Protección de Derechos de Ambato (720p, h264, youtube).mp4'),
  // v('Consejo Consultivo de Personas con Discapacidad', 'Consejo Consultivo de Personas con Discapacidad _ CCPDA - Consejo de Protección de Derechos de Ambato (720p, h264, youtube).mp4'),
  // v('Consejo Consultivo de Pueblos y Nacionalidades', 'Consejo Consultivo de Pueblos y Nacionalidades Indígenas - Consejo de Protección de Derechos de Ambato (720p, h264, youtube).mp4'),
  // v('Consejo Consultivo del Pueblo Afro y Montubio', 'Consejo Consultivo del Pueblo Afro y Montubio _CCPDA - Consejo de Protección de Derechos de Ambato (720p, h264, youtube).mp4'),
  // v('Consejo Consultivo LGBTIQ+', 'Consejo Consultivo LGBTIQ+ _ CCPDA - Consejo de Protección de Derechos de Ambato (720p, h264, youtube).mp4'),
  // v('Colector Quebrada Los Gallinazos y Parque Infantil', 'Colector Quebrada Los Gallinazos y Parque Infantil de Atocha - Rendición de Cuentas 2021 - GAD Municipalidad de Ambato (1080p, h264, youtube).mp4'),
  // v('Construiremos la Casa de la Música', 'Construiremos la Casa de la Música -  Rendición de Cuentas 2021 - GAD Municipalidad de Ambato (1080p, h264, youtube).mp4'),
  //v('Hemos ejecutado cerca de 200 obras', 'ejecutado_cerca_de_200_obras-Rendición_de Cuentas_2021.mp4'),
  { titulo: 'Quebrada los gallinazos', url: '/imagenes/quebrada_los_gallinazos.mp4' },
]

const galeria = [
  '/imagenes/new_images/j1.jpg',
  //'/imagenes/new_images/j2.jpg',
  //'/imagenes/new_images/j3.jpg',
  //'/imagenes/new_images/j4.PNG',
  '/imagenes/new_images/j5.PNG',
  //'/imagenes/new_images/j6.jpg',
  //'/imagenes/new_images/j7.jpg',
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
  const [videosAbierto, setVideosAbierto] = useState(false)
  const [videoActivo, setVideoActivo] = useState(0)

  const anterior = () => setIndiceActivo(i => (i - 1 + galeria.length) % galeria.length)
  const siguiente = () => setIndiceActivo(i => (i + 1) % galeria.length)
  const anteriorVideo = () => setVideoActivo(i => (i - 1 + videos.length) % videos.length)
  const siguienteVideo = () => setVideoActivo(i => (i + 1) % videos.length)

  const cerrar = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setGaleriaAbierta(false)
  }
  const cerrarVideos = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setVideosAbierto(false)
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

            {/* Botones galería y videos */}
            <div className="pt-1 flex flex-wrap gap-3">
              <button
                onClick={() => { setIndiceActivo(0); setGaleriaAbierta(true) }}
                className="inline-flex items-center gap-3 bg-azul hover:bg-azul-claro text-white font-titulo font-bold px-7 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-azul/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Galería
              </button>
              <button
                onClick={() => { setVideoActivo(0); setVideosAbierto(true) }}
                className="inline-flex items-center gap-3 bg-oro hover:bg-oro-oscuro text-azul font-titulo font-bold px-7 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-oro/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal videos */}
      {videosAbierto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={cerrarVideos}
        >
          <div className="relative w-full max-w-2xl" onClick={e => e.stopPropagation()}>

            {/* Botón cerrar */}
            <button
              onClick={() => setVideosAbierto(false)}
              className="absolute -top-10 right-0 w-9 h-9 rounded-full bg-black/60 hover:bg-oro border border-white/30 hover:border-oro text-white text-base font-bold flex items-center justify-center z-20 transition-all duration-200 shadow-lg"
            >
              ✕
            </button>

            {videos.length === 0 ? (
              <div className="bg-azul rounded-2xl p-10 text-center">
                <p className="text-white/60 text-lg">No hay videos disponibles aún.</p>
              </div>
            ) : (
              <>
                {/* Video principal */}
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                  <video
                    key={videoActivo}
                    src={videos[videoActivo].url}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full"
                    preload="metadata"
                  />

                  {/* Flechas */}
                  {videos.length > 1 && (
                    <>
                      <button
                        onClick={anteriorVideo}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors text-xl"
                      >
                        ‹
                      </button>
                      <button
                        onClick={siguienteVideo}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors text-xl"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Título y contador */}
                <div className="flex items-center justify-between mt-3 px-1">
                  <p className="text-white font-semibold text-sm">{videos[videoActivo].titulo}</p>
                  <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                    {videoActivo + 1} / {videos.length}
                  </span>
                </div>

                {/* Miniaturas de títulos */}
                {videos.length > 1 && (
                  <div className="flex gap-2 mt-3 justify-center flex-wrap">
                    {videos.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setVideoActivo(i)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          i === videoActivo
                            ? 'bg-oro text-azul border-oro font-bold'
                            : 'bg-white/10 text-white/60 border-white/20 hover:text-white hover:border-white/40'
                        }`}
                      >
                        {v.titulo}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal galería */}
      {galeriaAbierta && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={cerrar}
        >
          <div className="relative w-full max-w-xl" onClick={e => e.stopPropagation()}>

            {/* Imagen principal */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3]">

              {/* Botón cerrar — dentro de la imagen, esquina superior derecha */}
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
