import { useState, useRef } from 'react'

const PARROQUIAS_URBANAS = [
  'Atocha - Ficoa', 'Celiano Monge', 'Huachi Chico', 'Huachi Loreto',
  'La Matriz', 'La Merced', 'La Península', 'Pishilata', 'San Francisco',
]
const PARROQUIAS_RURALES = [
  'Ambatillo', 'Atahualpa', 'Augusto Nicolás Martínez', 'Constantino Fernández',
  'Cunchibamba', 'Huachi Grande', 'Izamba', 'Juan Benigno Vela', 'Montalvo',
  'Pasa', 'Picaihua', 'Pilahuín', 'Quisapincha', 'San Bartolomé de Pinllo',
  'San Fernando', 'Santa Rosa', 'Totoras', 'Unamuncho',
]

function limpiarTel(v: string) { return v.replace(/\D/g, '').slice(0, 10) }

const TEMAS = ['Seguridad', 'Empleo', 'Movilidad', 'Salud', 'Agua / Servicios']

export default function SeccionBuzonJavier() {
  const [nombre,    setNombre]      = useState('')
  const [temas,     setTemas]       = useState<string[]>([])
  const [otra,      setOtra]        = useState('')
  const [parroquia, setParroquia]   = useState('')
  const [whatsapp,  setWhatsapp]    = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reproduciendo, setReproduciendo] = useState(false)
  const [enviando,  setEnviando]    = useState(false)
  const [enviado,   setEnviado]     = useState(false)
  const [error,     setError]       = useState<string | null>(null)

  const toggleTema = (t: string) =>
    setTemas(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if ((temas.length === 0 && !otra.trim()) || !parroquia) return
    const propuesta = [
      temas.length ? temas.join(', ') : '',
      otra.trim() ? otra.trim() : '',
    ].filter(Boolean).join(' | ')
    setEnviando(true)
    setError(null)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre.trim() || undefined,
          propuesta,
          parroquia,
          whatsapp: whatsapp.trim() ? '+593' + whatsapp.trim() : '',
          fuente: 'Buzón Web',
          seguridad:      temas.includes('Seguridad'),
          empleo:         temas.includes('Empleo'),
          movilidad:      temas.includes('Movilidad'),
          salud:          temas.includes('Salud'),
          agua_servicios: temas.includes('Agua / Servicios'),
          otra:           otra.trim() || null,
        }),
      })
      const data = await res.json()
      setEnviando(false)
      if (data.ok || data.supabase === 'ok') {
        setEnviado(true)
        setNombre(''); setTemas([]); setOtra(''); setParroquia(''); setWhatsapp('')
      } else {
        setError('Ocurrió un error al enviar. Intenta nuevamente.')
      }
    } catch {
      setEnviando(false)
      setError('Ocurrió un error al enviar. Intenta nuevamente.')
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 -mt-px">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#21243D]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#AC7C3F]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #21243D 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de sección */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#AC7C3F] font-bold text-xs tracking-[0.28em] uppercase mb-3">
            Participa · Tu voz importa
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-[#21243D] leading-tight">
            Javier <span className="text-[#AC7C3F]">te escucha</span>
          </h2>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Columna derecha: video + mensaje ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">

            {/* Video con marco decorativo */}
            <div className="relative mb-8 w-full max-w-sm mx-auto lg:mx-0">

              {/* Sombra desplazada oro */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-[#AC7C3F]/25 blur-sm" />

              {/* Borde gradiente */}
              <div
                className="relative rounded-3xl p-[2.5px] shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #D4A86A 0%, #21243D 45%, #AC7C3F 100%)' }}
              >
                {/* Esquinas decorativas */}
                <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#D4A86A] shadow-lg z-10" />
                <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[#AC7C3F]/60 z-10" />
                <span className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#AC7C3F]/60 z-10" />

                <div className="rounded-[22px] overflow-hidden bg-[#21243D] relative">
                  <video
                    ref={videoRef}
                    src="/imagenes/video_buzon_javier.mp4"
                    playsInline
                    className="w-full object-contain block"
                    style={{ maxHeight: '420px' }}
                    onPlay={() => setReproduciendo(true)}
                    onEnded={() => setReproduciendo(false)}
                  />
                  {/* Botón replay — aparece cuando el video termina o está pausado */}
                  {!reproduciendo && (
                    <button
                      onClick={() => {
                        const v = videoRef.current
                        if (!v) return
                        v.muted = false
                        v.currentTime = 0
                        v.play()
                      }}
                      className="absolute inset-0 flex items-center justify-center group"
                      style={{ background: 'rgba(0,0,0,0.28)' }}
                    >
                      <span
                        className="flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-transform group-hover:scale-110"
                        style={{ background: 'linear-gradient(135deg,#D4A86A,#AC7C3F)' }}
                      >
                        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-5 -right-5 bg-[#21243D] text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 z-10">
                <span className="text-2xl">📬</span>
                <div>
                  <div className="font-bold text-sm leading-tight">Buzón de</div>
                  <div className="text-[#D4A86A] text-xs font-semibold">Javier</div>
                </div>
              </div>
            </div>

            {/* Texto descriptivo */}
            <div className="mt-6 space-y-4 max-w-sm">
              <h3 className="font-titulo font-black text-2xl sm:text-3xl text-[#21243D] leading-tight">
                Mándanos tu <span className="text-[#AC7C3F]">propuesta</span>
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Tu opinión construye Ambato, cuéntanos qué necesita tu parroquia y cómo podemos trabajar juntos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                {['🏗 Seguridad', '🏥 Salud', '💼 Empleo', '🎓 Educación', '💼 Movilidad', '🏗 Infraestructura' ].map(t => (
                  <span key={t} className="text-xs font-semibold bg-[#21243D]/6 text-[#21243D] rounded-full px-3 py-1.5 border border-[#21243D]/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Columna derecha: formulario ── */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#21243D] rounded-3xl p-7 sm:p-9 shadow-2xl">

              {enviado ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#AC7C3F]/20 flex items-center justify-center text-5xl mx-auto">
                    🙌
                  </div>
                  <h3 className="font-titulo font-black text-white text-2xl">¡Gracias!</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                    Tu propuesta fue recibida. Javier te escucha.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="mt-4 text-[#D4A86A] text-sm hover:underline"
                  >
                    Enviar otra propuesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="mb-6">
                    <h3 className="font-titulo font-bold text-white text-lg">Javier te escucha</h3>
                    <div className="w-10 h-0.5 bg-[#AC7C3F] mt-2" />
                  </div>

                  {/* Nombre */}
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                      placeholder="Ej: María García"
                      autoComplete="off"
                      className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#AC7C3F]/60 focus:border-[#AC7C3F] transition-all"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    />
                  </div>

                  {/* Temas */}
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
                      ¿Qué te preocupa? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TEMAS.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleTema(t)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                            temas.includes(t)
                              ? 'bg-[#AC7C3F] border-[#AC7C3F] text-white shadow-md scale-105'
                              : 'bg-white/6 border-white/20 text-white/70 hover:border-[#AC7C3F]/60 hover:text-white'
                          }`}
                          style={{ background: temas.includes(t) ? '#AC7C3F' : 'rgba(255,255,255,0.06)' }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Otra */}
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                      Otra
                    </label>
                    <textarea
                      value={otra}
                      onChange={e => setOtra(e.target.value)}
                      placeholder="Describe otra idea o necesidad para Ambato..."
                      rows={3}
                      className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#AC7C3F]/60 focus:border-[#AC7C3F] transition-all resize-none"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    />
                  </div>

                  {/* Parroquia */}
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                      Parroquia *
                    </label>
                    <select
                      value={parroquia}
                      onChange={e => setParroquia(e.target.value)}
                      required
                      className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#AC7C3F]/60 focus:border-[#AC7C3F] transition-all appearance-none"
                      style={{ background: 'rgba(255,255,255,0.06)', color: parroquia ? '#fff' : 'rgba(255,255,255,0.35)' }}
                    >
                      <option value="" style={{ background: '#21243D', color: '#fff' }}>— Selecciona tu parroquia —</option>
                      <optgroup label="Urbanas" style={{ background: '#21243D', color: '#AC7C3F' }}>
                        {PARROQUIAS_URBANAS.map(p => (
                          <option key={p} value={p} style={{ background: '#21243D', color: '#fff' }}>{p}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Rurales" style={{ background: '#21243D', color: '#AC7C3F' }}>
                        {PARROQUIAS_RURALES.map(p => (
                          <option key={p} value={p} style={{ background: '#21243D', color: '#fff' }}>{p}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                      WhatsApp <span className="normal-case font-normal opacity-60"></span>
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-white/15 focus-within:ring-2 focus-within:ring-[#AC7C3F]/60 focus-within:border-[#AC7C3F] transition-all">
                      <span className="flex items-center gap-1.5 px-3 py-3 text-sm font-bold text-white/70 border-r border-white/15 whitespace-nowrap flex-shrink-0"
                        style={{ background: 'rgba(255,255,255,0.08)' }}>
                        🇪🇨 +593
                      </span>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={e => setWhatsapp(limpiarTel(e.target.value))}
                        placeholder="987654321"
                        inputMode="numeric"
                        maxLength={10}
                        className="flex-1 min-w-0 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none"
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 mt-2 disabled:opacity-60"
                    style={{
                      background: 'linear-gradient(135deg, #AC7C3F 0%, #D4A86A 50%, #AC7C3F 100%)',
                      backgroundSize: '200% 100%',
                      color: '#fff',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {enviando ? 'Enviando...' : '📬 Enviar propuesta a Javier'}
                  </button>

                  <p className="text-white/25 text-center text-xs mt-3">
                    Tu información es confidencial y no se comparte con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
