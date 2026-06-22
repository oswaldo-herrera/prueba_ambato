import { seccionAgenda } from '../../contenido/textos'
import { linkGoogleCalendar, descargarICS } from '../../lib/calendario'

const MESES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

function TarjetaEvento({ evento }: { evento: typeof seccionAgenda.eventos[number] }) {
  const fecha = new Date(`${evento.fecha}T00:00:00`)
  const dia = fecha.getDate()
  const mes = MESES[fecha.getMonth()]
  const esPasado = fecha < new Date(new Date().toDateString())

  return (
    <div className="flex gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5">

      {/* Fecha */}
      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-azul flex flex-col items-center justify-center text-white">
        <span className="text-2xl font-black leading-none">{dia}</span>
        <span className="text-xs font-semibold tracking-wide text-oro">{mes}</span>
      </div>

      {/* Contenido */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
              esPasado ? 'bg-gray-100 text-gray-400' : 'bg-oro-claro text-oro-oscuro'
            }`}
          >
            {esPasado ? 'Realizado' : 'Próximo'}
          </span>
          <span className="text-gray-400 text-xs">{evento.horaInicio} – {evento.horaFin}</span>
        </div>

        <h3 className="font-titulo font-bold text-azul text-lg leading-tight">{evento.titulo}</h3>
        <p className="text-gray-500 text-sm mt-0.5">{evento.lugar}</p>
        <p className="text-gray-500 text-sm leading-relaxed mt-2">{evento.descripcion}</p>

        {!esPasado && (
          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href={linkGoogleCalendar(evento)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-azul bg-azul-muy-claro hover:bg-azul/10 px-3 py-2 rounded-full transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Google Calendar
            </a>
            <button
              onClick={() => descargarICS(evento)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-oro-oscuro bg-oro-claro hover:bg-oro/20 px-3 py-2 rounded-full transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Agregar a mi calendario
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SeccionAgenda() {
  const eventosOrdenados = [...seccionAgenda.eventos].sort((a, b) => a.fecha.localeCompare(b.fecha))

  return (
    <section id="agenda" className="relative py-24 pb-32 bg-azul-muy-claro overflow-hidden -mt-px scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block text-oro font-semibold text-sm tracking-widest uppercase mb-3">
            {seccionAgenda.etiqueta}
          </span>
          <h2 className="font-titulo font-black text-4xl sm:text-5xl text-azul">
            {seccionAgenda.titulo}{' '}
            <span className="text-oro">{seccionAgenda.tituloDestacado}</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            {seccionAgenda.descripcion}
          </p>
        </div>

        {/* Lista de eventos */}
        <div className="space-y-4">
          {eventosOrdenados.map((evento, i) => (
            <TarjetaEvento key={i} evento={evento} />
          ))}
        </div>
      </div>
    </section>
  )
}
