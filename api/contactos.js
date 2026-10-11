const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY
const API_TOKEN    = process.env.BUZON_API_TOKEN

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  if (API_TOKEN) {
    const auth = req.headers['authorization'] || req.query.token
    const provided = auth?.startsWith('Bearer ') ? auth.slice(7) : auth
    if (provided !== API_TOKEN) return res.status(401).json({ error: 'No autorizado' })
  }

  try {
    const sbRes = await fetch(
      `${SUPABASE_URL}/rest/v1/buzon_propuestas?select=id,nombre,whatsapp,parroquia,creado_en&order=creado_en.desc&limit=1000`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    )
    const rows = await sbRes.json()
    if (!Array.isArray(rows)) return res.status(500).json({ error: 'Error al leer contactos' })

    res.status(200).json({ total: rows.length, contactos: rows })
  } catch (e) {
    res.status(500).json({ error: 'Error interno', detalle: e.message })
  }
}
