const partidos = [
  {
    jornada: 'Jornada 1',
    grupo: 'Grupo E',
    fecha: 'Domingo, 14 Jun 2026',
    hora: '5:00 PM',
    equipoA: { nombre: 'Costa de Marfil', img: '/imagenes/new_images/costa_de_marfil.jfif', codigo: 'CIV' },
    equipoB: { nombre: 'Ecuador',         img: '/imagenes/new_images/ecuador.jfif',         codigo: 'ECU' },
  },
  {
    jornada: 'Jornada 2',
    grupo: 'Grupo E',
    fecha: 'Sábado, 20 Jun 2026',
    hora: '6:00 PM',
    equipoA: { nombre: 'Ecuador', img: '/imagenes/new_images/ecuador.jfif',  codigo: 'ECU' },
    equipoB: { nombre: 'Curazao', img: '/imagenes/new_images/curazao.jpg',   codigo: 'CUW' },
  },
  {
    jornada: 'Jornada 3',
    grupo: 'Grupo E',
    fecha: 'Jueves, 25 Jun 2026',
    hora: '2:00 PM',
    equipoA: { nombre: 'Ecuador',  img: '/imagenes/new_images/ecuador.jfif',  codigo: 'ECU' },
    equipoB: { nombre: 'Alemania', img: '/imagenes/new_images/alemania.jfif', codigo: 'GER' },
  },
  {
    jornada: 'Jornada 4',
    grupo: null,
    fecha: null,
    hora: null,
    equipoA: { nombre: 'Ecuador', img: '/imagenes/new_images/ecuador.jfif', codigo: 'ECU' },
    equipoB: { nombre: 'Por definir', img: null, codigo: '?' },
  },
]

export default function SeccionMundial() {
  return (
    <section id="mundial" className="relative bg-[#07091a] py-28 overflow-hidden -mt-px">

      {/* Patrón campo de fútbol */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, rgba(255,215,0,0.04) 0%, transparent 70%), ' +
            'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.03) 79px, rgba(255,255,255,0.03) 80px), ' +
            'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.03) 79px, rgba(255,255,255,0.03) 80px)',
        }}
      />

      {/* Halo central dorado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-yellow-400/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">

          {/* Balón girando */}
          <div className="flex justify-center mb-6">
            <div className="relative flex items-center justify-center">
              {/* Halo pulsante */}
              <div
                className="absolute rounded-full animate-pulse"
                style={{
                  width: '160px',
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(255,215,0,0.22) 0%, transparent 70%)',
                  animationDuration: '2s',
                }}
              />
              {/* Segundo halo más grande */}
              <div
                className="absolute rounded-full animate-pulse"
                style={{
                  width: '240px',
                  height: '240px',
                  background: 'radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)',
                  animationDuration: '2.5s',
                  animationDelay: '0.4s',
                }}
              />
              {/* Imagen PNG del balón girando */}
              <img
                src="/imagenes/balon.png"
                alt="Balón FIFA World Cup 2026"
                className="animate-spin relative z-10"
                style={{
                  width: '120px',
                  height: '120px',
                  animationDuration: '6s',
                  filter: 'drop-shadow(0 0 24px rgba(255,215,0,0.55)) drop-shadow(0 4px 12px rgba(0,0,0,0.6))',
                }}
              />
            </div>
          </div>

          {/* Badge FIFA */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 rounded-full px-5 py-2 mb-6">
            <span className="text-xl">🌍</span>
            <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase">FIFA World Cup 2026™ · Grupo E</span>
          </div>

          {/* Título */}
          <h2 className="font-titulo font-black text-5xl sm:text-7xl text-white uppercase tracking-tight leading-none">
            Ecuador 
          </h2>
          <h2
            className="font-titulo font-black text-5xl sm:text-7xl uppercase tracking-tight leading-none mt-1"
            style={{
              background: 'linear-gradient(130deg, #e6b800 0%, #fff176 45%, #e6b800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 35px rgba(255,215,0,0.45))',
            }}
          >
            Mundial 2026
          </h2>

          {/* Bandera + subtítulo */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400/40" />
            <span className="text-white/70 text-xs tracking-[0.35em] uppercase font-semibold">🇪🇨 ¡Vamos Ecuador!</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400/40" />
          </div>
        </div>

        {/* Match cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partidos.map((partido, i) => (
            <div key={i} className="group relative">

              {/* Glow hover */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/20 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              <div className="relative bg-white/[0.07] hover:bg-white/[0.11] border border-white/20 hover:border-yellow-400/50 rounded-3xl p-6 transition-all duration-300 h-full flex flex-col overflow-hidden">

                {/* Top: jornada + grupo */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-semibold">{partido.jornada}</span>
                  {partido.grupo && (
                    <span className="bg-yellow-400/20 text-yellow-300 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-yellow-400/30">
                      {partido.grupo}
                    </span>
                  )}
                </div>

                {/* Equipos */}
                <div className="flex items-center justify-between gap-3 flex-1">

                  {/* Equipo A */}
                  <div className="flex flex-col items-center gap-3 flex-1">
                    <img
                      src={partido.equipoA.img}
                      alt={partido.equipoA.nombre}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                      style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.6))' }}
                    />
                    <p className="text-white font-bold text-sm text-center leading-snug">{partido.equipoA.nombre}</p>
                    <p className="text-white/50 text-[10px] font-mono tracking-widest">{partido.equipoA.codigo}</p>
                  </div>

                  {/* VS */}
                  <div className="flex flex-col items-center shrink-0">
                    <span
                      className="font-titulo font-black text-3xl leading-none"
                      style={{ color: '#FFD700', textShadow: '0 0 25px rgba(255,215,0,0.8)' }}
                    >
                      VS
                    </span>
                  </div>

                  {/* Equipo B */}
                  <div className="flex flex-col items-center gap-3 flex-1">
                    {partido.equipoB.img ? (
                      <img
                        src={partido.equipoB.img}
                        alt={partido.equipoB.nombre}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                        style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.6))' }}
                      />
                    ) : (
                      <div
                        className="w-16 h-16 rounded-full bg-white/10 border-2 border-yellow-400/40 flex items-center justify-center"
                        style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.6))' }}
                      >
                        <span className="font-titulo font-black text-2xl text-yellow-400">?</span>
                      </div>
                    )}
                    <p className="text-white font-bold text-sm text-center leading-snug">{partido.equipoB.nombre}</p>
                    <p className="text-white/50 text-[10px] font-mono tracking-widest">{partido.equipoB.codigo}</p>
                  </div>
                </div>

                {/* Fecha y hora */}
                <div className="mt-5 pt-4 border-t border-white/15 text-center">
                  {partido.fecha ? (
                    <>
                      <p className="text-white/70 text-[11px] uppercase tracking-[0.25em] font-semibold">{partido.fecha}</p>
                      <p
                        className="font-titulo font-black text-2xl mt-1"
                        style={{ color: '#FFD700', textShadow: '0 0 15px rgba(255,215,0,0.4)' }}
                      >
                        {partido.hora}
                      </p>
                    </>
                  ) : (
                    <p className="text-white/50 text-xs uppercase tracking-[0.25em] font-semibold py-1.5">Fecha por confirmar</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/50 text-xs tracking-widest uppercase mt-10">
          🏆 Horarios corresponden a hora estándar de Ecuador (ECT · UTC−5)
        </p>
      </div>

      {/* Ola inferior → SeccionTrayectoria (azul-muy-claro) */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#eaeaf2" />
        </svg>
      </div>
    </section>
  )
}
