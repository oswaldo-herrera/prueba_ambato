const pilares = [
  {
    icono: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    titulo: 'TIEMPO',
    texto: 'Toda su trayectoria de vida y servicio público dedicada a Ambato y sus ciudadanos.',
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-3.5-7-8-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    titulo: 'PASIÓN',
    texto: 'El motor que impulsa cada acción, cada proyecto y cada compromiso con la ciudad.',
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    titulo: 'CORAZÓN',
    texto: 'El compromiso genuino y humano que conecta a Javier Altamirano con cada ambateño.',
  },
]

export default function SeccionValores() {
  return (
    <section className="relative bg-azul py-20 overflow-hidden -mt-px">

      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-oro/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-oro/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cita */}
        <div className="flex justify-center mb-14">
          <blockquote className="border-l-4 border-oro pl-6 max-w-3xl">
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              "Javier Altamirano, no solo como Alcalde, sino a través de la historia de su vida, ha entregado su{' '}
              <strong className="text-oro font-bold">TIEMPO</strong>, ha puesto toda su{' '}
              <strong className="text-oro font-bold">PASIÓN</strong> y ha hecho las cosas desde el{' '}
              <strong className="text-oro font-bold">CORAZÓN</strong> por tener y vivir en un{' '}
              <strong className="text-white font-bold">AMBATO JUSTO, SEGURO, CON CALMA Y LLENO DE OPORTUNIDADES PARA TODOS LOS AMBATEÑOS</strong>"
            </p>
          </blockquote>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pilares.map((pilar) => (
            <div
              key={pilar.titulo}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-oro/40 rounded-2xl p-7 transition-all duration-300"
            >
              {/* Icono */}
              <div className="w-14 h-14 rounded-xl bg-oro/10 group-hover:bg-oro/20 flex items-center justify-center text-oro mb-5 transition-colors duration-300">
                {pilar.icono}
              </div>

              {/* Línea dorada */}
              <div className="w-8 h-0.5 bg-oro mb-4" />

              <h3 className="text-oro font-black text-lg tracking-wider mb-2">{pilar.titulo}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{pilar.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ola inferior para transición a la sección Propuestas */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
