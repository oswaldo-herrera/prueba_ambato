import { useState } from 'react'
import { seccionRegistro } from '../../contenido/textos'

type CamposFormulario = {
  nombre: string
  correo: string
  celular: string
  parroquia: string
  propuesta: string
}

export default function SeccionRegistroBackup() {
  const [formulario, setFormulario] = useState<CamposFormulario>({
    nombre: '',
    correo: '',
    celular: '',
    parroquia: '',
    propuesta: '',
  })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const alCambiar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const alEnviar = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    await new Promise((r) => setTimeout(r, 1200))
    setEnviando(false)
    setEnviado(true)
    setFormulario({ nombre: '', correo: '', celular: '', parroquia: '', propuesta: '' })
  }

  return (
    <section id="registro-backup" className="relative bg-white py-24 overflow-hidden scroll-mt-20">

      {/* Ola superior — transición desde sección azul */}
      <div className="absolute top-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,0 L0,0 Z" fill="#21243D" />
        </svg>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-azul/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-oro/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — Formulario azul */}
          <div className="order-1">
            {enviado ? (
              <div className="bg-azul rounded-3xl p-10 text-center shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-oro/20 flex items-center justify-center text-4xl mx-auto mb-6">
                  🎉
                </div>
                <h3 className="font-titulo font-black text-white text-2xl mb-3">¡Bienvenido!</h3>
                <p className="text-white/70 leading-relaxed">{seccionRegistro.mensajeExito}</p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-6 text-sm text-white/40 hover:text-white underline"
                >
                  Registrar otra persona
                </button>
              </div>
            ) : (
              <form
                onSubmit={alEnviar}
                className="bg-azul rounded-3xl p-8 shadow-2xl space-y-5"
              >
                <h3 className="font-titulo font-bold text-white text-xl mb-2">
                  Completa tu registro
                </h3>
                <div className="w-10 h-0.5 bg-oro mb-6" />

                {/* Campo Nombre */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.nombre.etiqueta}
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.nombre.placeholder}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Correo */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.correo.etiqueta}
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.correo.placeholder}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Celular */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.celular.etiqueta}
                  </label>
                  <input
                    type="tel"
                    name="celular"
                    value={formulario.celular}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.celular.placeholder}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Parroquia */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">
                    Parroquia
                  </label>
                  <input
                    type="text"
                    name="parroquia"
                    value={formulario.parroquia}
                    onChange={alCambiar}
                    placeholder="Tu parroquia"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Propuesta */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">
                    Propuesta
                  </label>
                  <input
                    type="text"
                    name="propuesta"
                    value={formulario.propuesta}
                    onChange={alCambiar}
                    placeholder="Tu propuesta para Ambato"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-oro hover:bg-oro-oscuro disabled:opacity-60 disabled:cursor-not-allowed text-azul font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-oro/20 mt-2"
                >
                  {enviando ? 'Enviando...' : seccionRegistro.botonEnviar}
                </button>

                <p className="text-center text-white/30 text-xs pt-1">
                  Tu información es privada y no será compartida.
                </p>
              </form>
            )}
          </div>

          {/* Columna derecha — Texto */}
          <div className="order-2 space-y-6">
            <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase">
              {seccionRegistro.etiqueta}
            </span>
            <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul leading-tight">
              {seccionRegistro.titulo}{' '}
              <span className="text-oro">{seccionRegistro.tituloDestacado}</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {seccionRegistro.descripcion}
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Recibe información directa de la campaña',
                'Entérate de eventos en tu barrio',
                'Sé los primeros en conocer las novedades',
              ].map((beneficio) => (
                <li key={beneficio} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-oro/20 border border-oro/40 flex items-center justify-center text-oro text-xs flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-500 text-sm">{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#21243D" />
        </svg>
      </div>
    </section>
  )
}
