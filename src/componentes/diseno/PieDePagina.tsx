import { pieDePagina } from '../../contenido/textos'
import BolaBillar from './BolaBillar'

// Iconos simples para redes sociales (SVG inline)
const iconosRedes: Record<string, JSX.Element> = {
  fb: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  ig: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  tw: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  yt: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
  tt: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  ),
}

export default function PieDePagina({ onPolitica }: { onPolitica?: () => void }) {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="bg-azul text-white">
      {/* Franja dorada decorativa */}
      <div className="h-1 bg-gradient-to-r from-oro via-oro-oscuro to-oro" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Columna 1 — Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* Para volver al 63: <BolaBillar texto="63" className="h-14 w-auto" /> */}
              <BolaBillar texto="J" className="h-14 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {pieDePagina.descripcion}
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3 pt-2">
              {pieDePagina.redesSociales.map((red) => (
                <a
                  key={red.icono}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.nombre}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-oro hover:text-azul flex items-center justify-center text-white/70 transition-all duration-200"
                >
                  {iconosRedes[red.icono]}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 — Enlaces rápidos */}
          <div>
            <h3 className="font-titulo font-bold text-oro text-sm tracking-widest uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {pieDePagina.enlacesRapidos.map((enlace) => (
                <li key={enlace.href}>
                  <a
                    href={enlace.href}
                    className="text-white/60 hover:text-oro text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-oro/40">→</span>
                    {enlace.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Llamado a la acción */}
          <div>
            <h3 className="font-titulo font-bold text-oro text-sm tracking-widest uppercase mb-4">
              Únete Ambato con Javier
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Tu participación marca la diferencia. Regístrate y unete con Javier Altamirano.
            </p>
            <a
              href="#registro"
              className="inline-block bg-oro hover:bg-oro-oscuro text-azul font-bold text-sm px-6 py-3 rounded-full transition-all duration-200"
            >
              Regístrate ahora
            </a>
          </div>
        </div>

        {/* Línea de derechos */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>© {anioActual} Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <button
              onClick={onPolitica}
              className="hover:text-oro transition-colors duration-200 underline underline-offset-2"
            >
              Política de Privacidad
            </button>
            <span>Hecho con ❤️ para Ambato</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
