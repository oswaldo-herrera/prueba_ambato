export type EventoAgenda = {
  titulo: string
  fecha: string       // 'YYYY-MM-DD'
  horaInicio: string  // 'HH:MM'
  horaFin: string     // 'HH:MM'
  lugar: string
  descripcion: string
}

function aFechaCompacta(fecha: string, hora: string) {
  return `${fecha.replace(/-/g, '')}T${hora.replace(':', '')}00`
}

export function linkGoogleCalendar(evento: EventoAgenda) {
  const inicio = aFechaCompacta(evento.fecha, evento.horaInicio)
  const fin = aFechaCompacta(evento.fecha, evento.horaFin)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: evento.titulo,
    dates: `${inicio}/${fin}`,
    location: evento.lugar,
    details: evento.descripcion,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function descargarICS(evento: EventoAgenda) {
  const inicio = aFechaCompacta(evento.fecha, evento.horaInicio)
  const fin = aFechaCompacta(evento.fecha, evento.horaFin)
  const ahora = aFechaCompacta(
    new Date().toISOString().slice(0, 10),
    new Date().toISOString().slice(11, 16)
  )

  const contenido = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `UID:${inicio}-${Math.random().toString(36).slice(2)}@hersa-ambato`,
    `DTSTAMP:${ahora}`,
    `DTSTART:${inicio}`,
    `DTEND:${fin}`,
    `SUMMARY:${evento.titulo}`,
    `LOCATION:${evento.lugar}`,
    `DESCRIPTION:${evento.descripcion}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([contenido], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${evento.titulo.replace(/[^a-z0-9]+/gi, '-')}.ics`
  a.click()
  URL.revokeObjectURL(url)
}
