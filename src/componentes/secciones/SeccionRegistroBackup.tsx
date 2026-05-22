// ============================================================
// BACKUP DE SeccionRegistro — NO BORRAR
// Clon guardado el 2026-05-21 para reutilizar en el futuro.
// Para activarlo: importarlo en App.tsx y reemplazar
// o agregar junto a <SeccionRegistro />.
// ============================================================

import { useState } from 'react'
import { seccionRegistro } from '../../contenido/textos'
import ContadorVisitas from '../diseno/ContadorVisitas'

type CamposFormulario = {
  nombre: string
  correo: string
  celular: string
}

export default function SeccionRegistroBackup() {
  const [formulario, setFormulario] = useState<CamposFormulario>({
    nombre: '',
    correo: '',
    celular: '',
  })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const alCambiar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const alEnviar = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    // ─────────────────────────────────────────────────────
    // AQUÍ CONECTAS TU BACKEND O SERVICIO DE FORMULARIOS
    // Opciones recomendadas:
    //   · Formspree.io (gratis, sin backend)
    //   · EmailJS
    //   · Tu propia API
    //
    // Ejemplo con Formspree:
    //   await fetch('https://formspree.io/f/TU_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formulario),
    //   })
    // ─────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 1200))

    setEnviando(false)
    setEnviado(true)
    setFormulario({ nombre: '', correo: '', celular: '' })
  }

  return (
    <section id="registro-backup" className="py-24 bg-azul relative overflow-hidden -mt-px">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-oro/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-azul-claro/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — Texto */}
          <div className="text-white space-y-6">
            <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase">
              {seccionRegistro.etiqueta}
            </span>
            <h2 className="font-titulo font-black text-4xl sm:text-5xl leading-tight">
              {seccionRegistro.titulo}{' '}
              <span className="text-oro">{seccionRegistro.tituloDestacado}</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
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
                  <span className="text-white/70 text-sm">{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha — Formulario */}
          <div>
            {enviado ? (
              <div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-oro/10 flex items-center justify-center text-4xl mx-auto mb-6">
                  🎉
                </div>
                <h3 className="font-titulo font-black text-azul text-2xl mb-3">
                  ¡Bienvenido!
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {seccionRegistro.mensajeExito}
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-6 text-sm text-azul/50 hover:text-azul underline"
                >
                  Registrar otra persona
                </button>
              </div>
            ) : (
              <form
                onSubmit={alEnviar}
                className="bg-white rounded-3xl p-8 shadow-2xl space-y-5"
              >
                <h3 className="font-titulo font-bold text-azul text-xl mb-6">
                  Completa tu registro
                </h3>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.nombre.etiqueta}
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.nombre.placeholder}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-oro/40 focus:border-oro transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.correo.etiqueta}
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.correo.placeholder}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-oro/40 focus:border-oro transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1.5">
                    {seccionRegistro.campos.celular.etiqueta}
                  </label>
                  <input
                    type="tel"
                    name="celular"
                    value={formulario.celular}
                    onChange={alCambiar}
                    placeholder={seccionRegistro.campos.celular.placeholder}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-oro/40 focus:border-oro transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-oro hover:bg-oro-oscuro disabled:opacity-60 disabled:cursor-not-allowed text-azul font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-oro/20 mt-2"
                >
                  {enviando ? 'Enviando...' : seccionRegistro.botonEnviar}
                </button>

                <p className="text-center text-gray-400 text-xs pt-1">
                  Tu información es privada y no será compartida.
                </p>

                <ContadorVisitas />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
