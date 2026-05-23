import ContadorVisitas from '../diseno/ContadorVisitas'

const WHATSAPP_NUMERO = '593963197900'
const WHATSAPP_MENSAJE = encodeURIComponent(
  '¡Hola Javier! Yo continúo contigo 🔵✊ Por un Ambato Justo, Seguro con Alma y lleno de Oportunidades. ¡Aquí va mi video!'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`

const pasos = [
  {
    icono: '🔵',
    texto: 'Píntate de azul',
  },
  {
    icono: '✋',
    texto: 'Dibuja una "J" en tu mano',
  },
  {
    icono: '🎥',
    texto: (
      <>
        Graba tu video expresando {' '}
        <strong className="text-azul">"YO CONTINÚO CON JAVIER"</strong>{' '}
        por un Ambato Justo, Seguro con Alma y lleno de Oportunidades
      </>
    ),
  },
  {
    icono: '📲',
    texto: (
      <>
        Envía tu video al WhatsApp{' '}
        <strong className="text-azul">963 197 900</strong>
      </>
    ),
  },
]

export default function SeccionRegistro() {
  return (
    <section id="registro" className="py-24 pb-36 bg-azul-muy-claro relative overflow-hidden -mt-px scroll-mt-20">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-oro/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-azul-claro/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título principal centrado */}
        <div className="text-center mb-14">
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul">
            Yo continúo con <span className="text-oro">Javier</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda */}
          <div className="text-azul space-y-6">
            <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase">
              Continua con Javier
            </span>

            {/* Video campaña */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-azul/10 max-w-sm">
              <video
                src="/imagenes/continuo_javier.mp4"
                controls
                playsInline
                className="w-full h-auto block"
              />
            </div>

            <h2 className="font-titulo font-black text-4xl sm:text-5xl leading-tight">
              Cada día somos{' '}
              <span className="text-oro">más</span> los que continuamos con{' '}
              <span className="text-oro">Javier Altamirano</span>
            </h2>
            <p className="text-azul/70 text-lg leading-relaxed">
              ¿Y Tú? ¿<strong className="text-azul">Continúas</strong>… o Retrocedes?
            </p>

            {/* Etiqueta motivacional */}
            <div className="inline-flex items-center gap-3 bg-azul/10 border border-azul/20 rounded-2xl px-5 py-4 mt-2">
              <span className="text-3xl">🔵</span>
              <p className="text-azul/90 text-sm leading-snug font-medium">
                Pinta Ambato de azul.<br />
                <span className="text-oro font-bold">#YoContinúoConJavier</span>
              </p>
            </div>
          </div>

          {/* Columna derecha — Tarjeta blanca */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl space-y-6">

            {/* Encabezado de la tarjeta */}
            <div className="text-center pb-2 border-b border-gray-100">
              <h3 className="font-titulo font-black text-azul text-xl leading-snug">
                Continúa con Javier
              </h3>
              <p className="text-gray-400 text-xs mt-1">sigue estos 4 pasos y manda tu video</p>
            </div>

            {/* Pasos */}
            <ol className="space-y-4">
              {pasos.map((paso, i) => (
                <li key={i} className="flex items-start gap-4">
                  {/* Número */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-azul flex items-center justify-center">
                    <span className="text-oro font-black text-xs">{i + 1}</span>
                  </div>
                  {/* Contenido */}
                  <div className="flex items-start gap-2 pt-1">
                    <span className="text-lg leading-none">{paso.icono}</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{paso.texto}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Botón WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-green-500/20"
            >
              {/* Ícono WhatsApp */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar mi video al WhatsApp
            </a>

            <p className="text-center text-gray-400 text-xs">
              963 197 900 · Solo WhatsApp
            </p>

            <ContadorVisitas />
          </div>
        </div>
      </div>

      {/* Ola divisora — transición hacia SeccionWhatsApp (oro-claro) */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#eaeaf2" />
        </svg>
      </div>
    </section>
  )
}
