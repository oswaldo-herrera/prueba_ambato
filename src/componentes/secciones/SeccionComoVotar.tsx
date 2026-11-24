import { useState } from 'react'

export default function SeccionComoVotar() {
  const [imgAbierta, setImgAbierta] = useState<string | null>(null)

  const abrirImg = (src: string) => setImgAbierta(src)
  const cerrarImg = () => setImgAbierta(null)

  return (
    <section className="bg-[#012857] py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-white font-titulo font-black text-3xl sm:text-4xl">
            ¡Así vota <span className="text-oro">Ambato!</span>
          </h2>
        </div>

        {/* Boleta — columna centrada */}
        <div className="flex flex-col items-center gap-6">

          {/* Boleta horizontal — solo escritorio */}
          <img
            src="/imagenes/campa%C3%B1a/volantes/boleta_pc.jpeg"
            alt="Cómo votar por Javier Altamirano - escritorio"
            onClick={() => abrirImg('/imagenes/campa%C3%B1a/volantes/boleta_pc.jpeg')}
            className="hidden lg:block w-full max-w-xl rounded-2xl shadow-2xl shadow-black/40 ring-2 ring-oro/20 cursor-zoom-in hover:scale-[1.02] transition-transform duration-200"
          />

          {/* Boleta vertical — solo móvil */}
          <img
            src="/imagenes/campa%C3%B1a/volantes/boleta_web.jpeg"
            alt="Cómo votar por Javier Altamirano - móvil"
            onClick={() => abrirImg('/imagenes/campa%C3%B1a/volantes/boleta_web.jpeg')}
            className="block lg:hidden w-full max-w-sm rounded-2xl shadow-2xl shadow-black/40 ring-2 ring-oro/20 cursor-zoom-in hover:scale-[1.02] transition-transform duration-200"
          />

          {/* Imagen mensajes — oculta temporalmente */}
          {/* <img
            src="/imagenes/campa%C3%B1a/volantes/javier_altamirano_mensajes.png"
            alt="Javier Altamirano mensajes"
            onClick={() => abrirImg('/imagenes/campa%C3%B1a/volantes/javier_altamirano_mensajes.png')}
            className="w-full max-w-sm lg:max-w-xl rounded-2xl shadow-2xl shadow-black/40 ring-2 ring-oro/20 cursor-zoom-in hover:scale-[1.02] transition-transform duration-200"
          /> */}
        </div>


      </div>

      {/* Lightbox */}
      {imgAbierta && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={cerrarImg}
        >
          <button
            onClick={cerrarImg}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
          >
            ✕
          </button>
          <img
            src={imgAbierta}
            alt="Imagen ampliada"
            onClick={e => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  )
}
