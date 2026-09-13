const KOMMO_BASE = `https://${process.env.KOMMO_SUBDOMAIN}.kommo.com/api/v4`
const KOMMO_TOKEN = process.env.KOMMO_TOKEN
const PIPELINE_ID = parseInt(process.env.KOMMO_PIPELINE_ID || '13958807')
const STATUS_ID   = parseInt(process.env.KOMMO_STATUS_ID   || '107727131')

const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { nombre, propuesta, parroquia, whatsapp, fuente = 'Web',
          seguridad, empleo, movilidad, salud, agua_servicios, otra } = req.body || {}

  if (!parroquia) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  const resultados = { supabase: null, kommo: null }

  // 1. Guardar en Supabase
  try {
    const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/buzon_propuestas`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        nombre:    nombre    || null,
        propuesta: propuesta || null,
        parroquia,
        whatsapp: whatsapp || null,
        seguridad:      seguridad      ?? false,
        empleo:         empleo         ?? false,
        movilidad:      movilidad      ?? false,
        salud:          salud          ?? false,
        agua_servicios: agua_servicios ?? false,
        otra:           otra           || null,
        creado_en: new Date().toISOString(),
      }),
    })
    resultados.supabase = sbRes.ok ? 'ok' : `error ${sbRes.status}`
  } catch (e) {
    resultados.supabase = `error: ${e.message}`
  }

  // 2. Crear lead en Kommo
  try {
    const leadName = nombre
      ? `${nombre} — ${fuente}`
      : `Propuesta web — ${parroquia}`

    const telefono = whatsapp
      ? whatsapp.replace(/\D/g, '').replace(/^0/, '593')
      : null

    const kommoBody = [
      {
        name: leadName,
        pipeline_id: PIPELINE_ID,
        status_id: STATUS_ID,
        _embedded: {
          contacts: [
            {
              name: nombre || 'Sin nombre',
              ...(telefono && {
                custom_fields_values: [
                  {
                    field_code: 'PHONE',
                    values: [{ value: telefono, enum_code: 'WORK' }],
                  },
                ],
              }),
            },
          ],
        },
      },
    ]

    // Agregar nota con la propuesta
    const kommoRes = await fetch(`${KOMMO_BASE}/leads/complex`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KOMMO_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kommoBody),
    })

    const kommoData = await kommoRes.json().catch(() => ({}))

    if (kommoRes.ok && kommoData?.[0]?.id) {
      const leadId = kommoData[0].id

      // Agregar nota con el contenido de la propuesta y parroquia
      await fetch(`${KOMMO_BASE}/leads/${leadId}/notes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${KOMMO_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            note_type: 'common',
            params: {
              text: `📍 Parroquia: ${parroquia}\n💬 Propuesta: ${propuesta}${whatsapp ? `\n📱 WhatsApp: ${whatsapp}` : ''}`,
            },
          },
        ]),
      })

      resultados.kommo = 'ok'
    } else {
      resultados.kommo = `error ${kommoRes.status}: ${JSON.stringify(kommoData).slice(0, 200)}`
    }
  } catch (e) {
    resultados.kommo = `error: ${e.message}`
  }

  const allOk = resultados.supabase === 'ok' && resultados.kommo === 'ok'
  return res.status(allOk ? 200 : 207).json({ ok: allOk, ...resultados })
}
