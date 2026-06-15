import { useState } from 'react'
import { seccionRegistro } from '../../contenido/textos'
import { supabase } from '../../lib/supabase'

type CamposFormulario = {
  nombre: string
  correo: string
  celular: string
  parroquia: string
  propuesta: string
}

export default function SeccionRegistroBackup({ onPolitica }: { onPolitica?: () => void }) {
  const [formulario, setFormulario] = useState<CamposFormulario>({
    nombre: '',
    correo: '',
    celular: '',
    parroquia: '',
    propuesta: '',
  })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [aceptaPolitica, setAceptaPolitica] = useState(false)

  const alCambiar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const alEnviar = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    setError(null)

    const { error: sbError } = await supabase.from('registros_ambato_formulario').insert([{
      nombre: formulario.nombre,
      correo: formulario.correo,
      celular: formulario.celular,
      parroquia: formulario.parroquia,
      propuesta: formulario.propuesta,
      acepta_politica: aceptaPolitica,
    }])

    setEnviando(false)

    if (sbError) {
      setError('Hubo un problema al enviar. Intenta de nuevo.')
      console.error(sbError)
    } else {
      setEnviado(true)
      setFormulario({ nombre: '', correo: '', celular: '', parroquia: '', propuesta: '' })
    }
  }

  return (
    <section id="registro-backup" className="relative bg-azul py-24 overflow-hidden scroll-mt-20">

      {/* Ola superior — transición desde oro-claro */}
      <div className="absolute top-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,0 L0,0 Z" fill="#eaeaf2" />
        </svg>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-oro/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-oro/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

        {/* Título principal centrado */}
        <div className="text-center mb-14">
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-white">
            Regístrate y <span className="text-oro">Continúa</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — Formulario azul */}
          <div className="order-1">
            {enviado ? (
              <div className="bg-azul-muy-claro rounded-3xl p-10 text-center shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-oro/20 flex items-center justify-center text-4xl mx-auto mb-6">
                  🎉
                </div>
                <h3 className="font-titulo font-black text-azul text-2xl mb-3">¡Bienvenido!</h3>
                <p className="text-azul/70 leading-relaxed">{seccionRegistro.mensajeExito}</p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-6 text-sm text-azul/40 hover:text-azul underline"
                >
                  Registrar otra persona
                </button>
              </div>
            ) : (
              <form
                onSubmit={alEnviar}
                className="bg-azul-muy-claro rounded-3xl p-8 shadow-2xl space-y-5"
              >
                <h3 className="font-titulo font-bold text-azul text-xl mb-2">
                  Completa tu registro
                </h3>
                <div className="w-10 h-0.5 bg-oro mb-6" />

                {/* Campo Nombre */}
                <div>
                  <label className="block text-azul/70 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.nombre.etiqueta}
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.nombre.placeholder}
                    required
                    className="w-full bg-white border border-azul/20 rounded-xl px-4 py-3 text-sm text-azul placeholder:text-azul/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Correo */}
                <div>
                  <label className="block text-azul/70 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.correo.etiqueta}
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.correo.placeholder}
                    className="w-full bg-white border border-azul/20 rounded-xl px-4 py-3 text-sm text-azul placeholder:text-azul/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Celular */}
                <div>
                  <label className="block text-azul/70 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.celular.etiqueta}
                  </label>
                  <input
                    type="tel"
                    name="celular"
                    value={formulario.celular}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.celular.placeholder}
                    required
                    className="w-full bg-white border border-azul/20 rounded-xl px-4 py-3 text-sm text-azul placeholder:text-azul/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Parroquia */}
                <div>
                  <label className="block text-azul/70 text-sm font-medium mb-1.5">
                    Parroquia
                  </label>
                  <input
                    type="text"
                    name="parroquia"
                    value={formulario.parroquia}
                    onChange={alCambiar}
                    placeholder="Tu parroquia"
                    className="w-full bg-white border border-azul/20 rounded-xl px-4 py-3 text-sm text-azul placeholder:text-azul/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Campo Propuesta */}
                <div>
                  <label className="block text-azul/70 text-sm font-medium mb-1.5">
                    Propuesta
                  </label>
                  <input
                    type="text"
                    name="propuesta"
                    value={formulario.propuesta}
                    onChange={alCambiar}
                    placeholder="Tu propuesta para Ambato"
                    className="w-full bg-white border border-azul/20 rounded-xl px-4 py-3 text-sm text-azul placeholder:text-azul/30 focus:outline-none focus:ring-2 focus:ring-oro/50 focus:border-oro transition-all"
                  />
                </div>

                {/* Checkbox política de privacidad */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="acepta-politica"
                    checked={aceptaPolitica}
                    onChange={e => setAceptaPolitica(e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 accent-oro flex-shrink-0 cursor-pointer"
                  />
                  <label htmlFor="acepta-politica" className="text-azul/60 text-xs leading-relaxed cursor-pointer">
                    He leído y acepto la{' '}
                    <button
                      type="button"
                      onClick={onPolitica}
                      className="text-oro hover:text-oro-oscuro underline underline-offset-2 font-semibold transition-colors"
                    >
                      Política de Privacidad
                    </button>
                    {' '}y autorizo el tratamiento de mis datos personales conforme a la LOPDP.
                  </label>
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  disabled={enviando || !aceptaPolitica}
                  className="w-full bg-oro hover:bg-oro-oscuro disabled:opacity-40 disabled:cursor-not-allowed text-azul font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-oro/20 mt-1"
                >
                  {enviando ? 'Enviando...' : seccionRegistro.botonEnviar}
                </button>
                {error && (
                  <p className="text-red-500 text-sm text-center mt-3">{error}</p>
                )}

                <p className="text-center text-azul/30 text-xs pt-1">
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
            <h2 className="font-titulo font-black text-4xl sm:text-5xl text-white leading-tight">
              {seccionRegistro.titulo}
              <span className="block text-oro">{seccionRegistro.tituloDestacado}</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Regístrate y recibe información directa sobre actividades, eventos y cómo puedes participar en tu parroquia, barrio o sector.
            </p>

            <div className="pt-4 space-y-3">
              <p className="text-oro font-semibold text-xl italic leading-snug">
                Seguridad, Salud y Empleo.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                ¡Ya lo hicimos! <strong className="text-white font-semibold">continuemos el trabajo...</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#f5edd9" />
        </svg>
      </div>
    </section>
  )
}
