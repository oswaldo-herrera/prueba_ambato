import { useEffect, useRef } from 'react'

export default function AudioFondo() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const reproducidoRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/imagenes/mensaje_javier.mp3')
    audio.loop = false
    audioRef.current = audio

    const reproducir = () => {
      if (reproducidoRef.current) return
      reproducidoRef.current = true
      audio.play().catch(() => {})
      limpiarListeners()
    }

    const limpiarListeners = () => {
      window.removeEventListener('click',      reproducir)
      window.removeEventListener('touchend',   reproducir)
      window.removeEventListener('keydown',    reproducir)
    }

    // Chrome solo permite audio tras gestos reales: click, touch o tecla
    window.addEventListener('click',    reproducir, { once: true })
    window.addEventListener('touchend', reproducir, { once: true })
    window.addEventListener('keydown',  reproducir, { once: true })

    return () => {
      audio.pause()
      limpiarListeners()
    }
  }, [])

  return null
}
