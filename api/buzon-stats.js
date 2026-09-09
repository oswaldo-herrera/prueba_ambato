const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY
const API_TOKEN    = process.env.BUZON_API_TOKEN // token opcional para proteger el endpoint

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  // Verificar token si está configurado
  if (API_TOKEN) {
    const auth = req.headers['authorization'] || req.query.token
    const provided = auth?.startsWith('Bearer ') ? auth.slice(7) : auth
    if (provided !== API_TOKEN) return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const sbRes = await fetch(
      `${SUPABASE_URL}/rest/v1/buzon_propuestas?select=seguridad,empleo,movilidad,salud,agua_servicios,otra,parroquia,creado_en&limit=10000`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    )
    const rows = await sbRes.json()

    if (!Array.isArray(rows)) return res.status(500).json({ error: 'Error al leer datos' })

    const total = rows.length

    // 1. Totales por tema
    const temas = {
      seguridad:      rows.filter(r => r.seguridad).length,
      empleo:         rows.filter(r => r.empleo).length,
      movilidad:      rows.filter(r => r.movilidad).length,
      salud:          rows.filter(r => r.salud).length,
      agua_servicios: rows.filter(r => r.agua_servicios).length,
      otra:           rows.filter(r => r.otra && r.otra.trim()).length,
    }
    const totalSelecciones = Object.values(temas).reduce((s, v) => s + v, 0)

    // Porcentajes con Largest Remainder Method
    const temasConPct = Object.entries(temas).map(([label, votos]) => {
      const exacto = totalSelecciones ? (votos / totalSelecciones) * 100 : 0
      return { label, votos, exacto, pct: Math.floor(exacto), resto: exacto - Math.floor(exacto) }
    })
    let faltantes = 100 - temasConPct.reduce((s, t) => s + t.pct, 0)
    temasConPct.sort((a, b) => b.resto - a.resto).forEach((t, i) => { if (i < faltantes) t.pct++ })
    temasConPct.sort((a, b) => b.votos - a.votos)

    // 2. Registros por parroquia
    const porParroquia = {}
    rows.forEach(r => {
      if (!r.parroquia) return
      porParroquia[r.parroquia] = (porParroquia[r.parroquia] || 0) + 1
    })
    const parroquias = Object.entries(porParroquia)
      .map(([parroquia, registros]) => ({ parroquia, registros }))
      .sort((a, b) => b.registros - a.registros)

    // 3. Evolución diaria (últimos 30 días)
    const porDia = {}
    rows.forEach(r => {
      if (!r.creado_en) return
      const dia = r.creado_en.slice(0, 10)
      porDia[dia] = (porDia[dia] || 0) + 1
    })
    const evolucionDiaria = Object.entries(porDia)
      .map(([fecha, registros]) => ({ fecha, registros }))
      .sort((a, b) => a.fecha.localeCompare(b.fecha))
      .slice(-30)

    // 4. Textos del campo "Otra"
    const propuestasOtra = rows
      .filter(r => r.otra && r.otra.trim())
      .map(r => ({ texto: r.otra.trim(), parroquia: r.parroquia, fecha: r.creado_en?.slice(0, 10) }))

    res.status(200).json({
      generado_en: new Date().toISOString(),
      total_registros: total,
      total_selecciones: totalSelecciones,
      temas: temasConPct.map(({ label, votos, pct }) => ({ tema: label, votos, porcentaje: pct })),
      parroquias,
      evolucion_diaria: evolucionDiaria,
      propuestas_otra: propuestasOtra,
    })
  } catch (e) {
    res.status(500).json({ error: 'Error interno', detalle: e.message })
  }
}
