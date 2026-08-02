export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'x-kommo-token')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const token = req.headers['x-kommo-token']
  if (!token) return res.status(401).json({ error: 'Token requerido' })

  const { url } = req.query
  if (!url) return res.status(400).json({ error: 'Parámetro url requerido' })

  try {
    const kommoUrl = `https://hersaambato.kommo.com/api/v4${url}`
    const response = await fetch(kommoUrl, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = await response.json()
    res.status(response.status).json(data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
