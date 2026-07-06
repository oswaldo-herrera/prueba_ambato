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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-yellow-400/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4">

        {/* Título */}
        <div>
          <h2 className="font-titulo font-black text-5xl sm:text-7xl text-white uppercase tracking-tight leading-none">
            Gracias
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
            Ecuador
          </h2>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-3xl blur-2xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(255,215,0,0.18) 0%, transparent 70%)' }}
          />
          <img
            src="/imagenes/ecuador_gracias.png"
            alt="Gracias Ecuador"
            className="relative z-10 w-full max-w-2xl rounded-3xl object-cover"
            style={{ filter: 'drop-shadow(0 8px 40px rgba(255,215,0,0.3))' }}
          />
        </div>

      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#eaeaf2" />
        </svg>
      </div>
    </section>
  )
}
