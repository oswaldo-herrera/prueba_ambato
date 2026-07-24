export default function SeccionVideoObra() {
  return (
    <section className="relative bg-azul py-20 overflow-hidden -mt-px">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(172,124,63,0.4) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block text-oro font-semibold text-xs tracking-widest uppercase mb-3">
            Obra realizada
          </span>
          <h2 className="font-titulo font-black text-3xl sm:text-4xl text-white">
            Quebrada Los <span className="text-oro">Gallinazos</span>
          </h2>
          <p className="mt-3 text-white/50 text-sm max-w-lg mx-auto">
            Recuperación del espacio público y parque infantil de Atocha — una de las grandes obras ejecutadas durante la alcaldía 2019–2023.
          </p>
        </div>

        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-oro/20">
          <video
            src="/imagenes/quebrada_los_gallinazos.mp4"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="w-full aspect-video bg-black"
            preload="metadata"
          />
        </div>

      </div>

    </section>
  )
}
