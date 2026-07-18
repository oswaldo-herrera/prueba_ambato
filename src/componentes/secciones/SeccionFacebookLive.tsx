import { seccionFacebookLive } from '../../contenido/textos'

export default function SeccionFacebookLive() {
  const { urlLive, paginaFacebook } = seccionFacebookLive
  const paginaEncoded = encodeURIComponent(paginaFacebook)

  return (
    <section id="en-vivo" className="bg-[#0d1117] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Encabezado */}
        <div className="mb-10">
          {urlLive ? (
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full inline-block" />
              En Vivo
            </span>
          ) : (
            <span className="inline-block bg-gray-700 text-gray-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Facebook Live
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Síguenos en <span className="text-[#1877F2]">Facebook</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            {urlLive
              ? 'Estamos transmitiendo en vivo. ¡Únete ahora!'
              : 'Cuando estemos en vivo, el video aparecerá aquí automáticamente.'}
          </p>
        </div>

        {/* Page Plugin — muestra el live automáticamente al transmitir */}
        <div className="flex justify-center mb-4">
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${paginaEncoded}&tabs=timeline%2Cvideos&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
            width="500"
            height="600"
            style={{ border: 'none', overflow: 'hidden', borderRadius: '12px' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        {/* Botón directo al live si hay URL */}
        {urlLive && (
          <a
            href={urlLive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 animate-pulse"
          >
            <span className="w-2 h-2 bg-white rounded-full inline-block" />
            Ver transmisión en vivo
          </a>
        )}

        {/* Botón a la página */}
        <div>
          <a
            href={paginaFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 bg-[#1877F2] hover:bg-[#1565d8] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.883v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Seguir en Facebook
          </a>
        </div>

      </div>
    </section>
  )
}
