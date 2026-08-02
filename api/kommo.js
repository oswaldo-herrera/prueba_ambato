export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'x-kommo-token')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const token = req.headers['x-kommo-token']

  // Modo diagnóstico: /api/kommo?test=1
  if (req.query.test) {
    if (!token) return res.status(200).json({ ok: false, error: 'SIN_TOKEN', msg: 'El token no llegó al proxy' })
    try {
      const r = await fetch('https://hersaambato.kommo.com/api/v4/account', {
        headers: { Authorization: `Bearer ${token.trim()}` }
      })
      if (r.ok) {
        const d = await r.json()
        return res.status(200).json({ ok: true, cuenta: d?.name, token_len: token.length })
      }
      const body = await r.text()
      return res.status(200).json({ ok: false, error: 'TOKEN_INVALIDO', kommo_status: r.status, kommo_body: body.slice(0, 200) })
    } catch (e) {
      return res.status(200).json({ ok: false, error: 'ERROR_RED', msg: e.message })
    }
  }

  if (!token) return res.status(401).json({ error: 'SIN_TOKEN' })

  const { url } = req.query
  if (!url) return res.status(400).json({ error: 'SIN_URL' })

  try {
    const kommoUrl = `https://hersaambato.kommo.com/api/v4${url}`
    const response = await fetch(kommoUrl, {
      headers: { Authorization: `Bearer ${token.trim()}` }
    })
    const data = await response.json()
    res.status(response.status).json(data)
  } catch (e) {
    res.status(500).json({ error: 'ERROR_RED', msg: e.message })
  }
}
