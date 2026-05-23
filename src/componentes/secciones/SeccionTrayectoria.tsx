import { seccionTrayectoria } from '../../contenido/textos'

function ListaItems({ items }: { items: { titulo: string; descripcion: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-oro/30 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-oro flex items-center justify-center text-azul text-xs font-titulo font-black mt-0.5">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-titulo font-bold text-azul text-base leading-tight mb-1">
                {item.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SeccionTrayectoria() {
  return (
    <section id="trayectoria" className="relative py-24 pb-36 bg-azul-muy-claro overflow-hidden -mt-px">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Columna 1 */}
          <div>
            <h4 className="font-titulo font-black text-azul text-lg mb-5 pb-3 border-b-2 border-oro/40">
              {seccionTrayectoria.columna1.titulo}
            </h4>
            <ListaItems items={seccionTrayectoria.columna1.items} />
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="font-titulo font-black text-azul text-lg mb-5 pb-3 border-b-2 border-oro/40">
              {seccionTrayectoria.columna2.titulo}
            </h4>
            <ListaItems items={seccionTrayectoria.columna2.items} />
          </div>

        </div>
      </div>

      {/* Ola divisora — transición hacia sección oscura */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#21243D" />
        </svg>
      </div>
    </section>
  )
}
