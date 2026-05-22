import { seccionTrayectoria } from '../../contenido/textos'

export default function SeccionTrayectoria() {
  return (
    <section id="trayectoria" className="relative py-24 pb-36 bg-azul-muy-claro overflow-hidden -mt-px">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase mb-3">
            {seccionTrayectoria.etiqueta}
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul">
            {seccionTrayectoria.titulo}{' '}
            <span className="text-oro">{seccionTrayectoria.tituloDestacado}</span>
          </h2>
        </div>

        {/* Línea de tiempo */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-oro via-azul to-oro/20 hidden sm:block" />

          <div className="space-y-6">
            {seccionTrayectoria.items.map((item, index) => (
              <div key={index} className="relative sm:pl-16 group">
                {/* Punto en la línea */}
                <div className="absolute left-0 top-6 hidden sm:flex w-12 h-12 rounded-full bg-white border-4 border-oro items-center justify-center shadow-md group-hover:bg-oro transition-colors duration-200">
                  <span className="font-titulo font-black text-azul text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Tarjeta */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-oro/30 hover:shadow-md transition-all duration-200">
                  <h3 className="font-titulo font-bold text-azul text-lg mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ola divisora — transición hacia sección blanca */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#21243D" />
        </svg>
      </div>
    </section>
  )
}
