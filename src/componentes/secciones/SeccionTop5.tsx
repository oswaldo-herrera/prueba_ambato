import { useEffect, useState } from 'react'

const SB_URL = import.meta.env.VITE_SUPABASE_URL as string
const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string

type Item = { num: number; label: string; pct: number }

const STATIC: Item[] = [
  { num: 1, label: 'Seguridad',       pct: 31 },
  { num: 2, label: 'Empleo',           pct: 24 },
  { num: 3, label: 'Movilidad',        pct: 18 },
  { num: 4, label: 'Salud',            pct: 14 },
  { num: 5, label: 'Agua / Servicios', pct: 13 },
  { num: 6, label: 'Otra',             pct:  8 },
]

type Row = {
  seguridad: boolean
  empleo: boolean
  movilidad: boolean
  salud: boolean
  agua_servicios: boolean
  otra: string | null
}

export default function SeccionTop5() {
  const [items, setItems] = useState<Item[]>(STATIC)

  useEffect(() => {
    if (!SB_URL || !SB_KEY) return

    fetch(
      `${SB_URL}/rest/v1/buzon_propuestas?select=seguridad,empleo,movilidad,salud,agua_servicios,otra`,
      { headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` } }
    )
      .then(r => r.json())
      .then((rows: Row[]) => {
        if (!Array.isArray(rows) || rows.length === 0) return
        const total = rows.length
        const pct = (key: keyof Row) =>
          Math.round((rows.filter(r => r[key]).length / total) * 100)

        const pctOtra = Math.round(
          (rows.filter(r => r.otra && r.otra.trim() !== '').length / total) * 100
        )

        const computed = [
          { label: 'Seguridad',       pct: pct('seguridad') },
          { label: 'Empleo',           pct: pct('empleo') },
          { label: 'Movilidad',        pct: pct('movilidad') },
          { label: 'Salud',            pct: pct('salud') },
          { label: 'Agua / Servicios', pct: pct('agua_servicios') },
          { label: 'Otra',             pct: pctOtra },
        ]
          .sort((a, b) => b.pct - a.pct)
          .map((item, i) => ({ num: i + 1, ...item }))

        if (computed.every(i => i.pct === 0)) return
        setItems(computed)
      })
      .catch(() => {})
  }, [])

  return (
    <section className="relative bg-azul py-20 pb-28 -mt-px">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="/imagenes/new_images/top_5.jpeg"
              alt="Top 5 preocupaciones de Ambato"
              className="w-full max-w-sm rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Barras */}
          <div>
            <div className="space-y-5">
              {items.map(({ num, label, pct }) => (
                <div key={num}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-oro/20 text-oro font-black text-xs flex items-center justify-center shrink-0">
                        {num}
                      </span>
                      <span className="text-white font-semibold text-base">{label}</span>
                    </div>
                    <span className="text-oro font-black text-2xl tabular-nums leading-none">{pct}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-oro rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Ola divisora hacia blanco */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
