import { useState, useEffect, useRef } from 'react'

const AUDIO_SALUDO = '/imagenes/prueba_fidel.mp3'

export default function AvatarFlotante() {
  const [burbujaVisible, setBurbujaVisible] = useState(false)
  const [cerrado, setCerrado] = useState(false)
  const [hablando, setHablando] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function reproducir() {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  useEffect(() => {
    const audio = new Audio(AUDIO_SALUDO)
    audio.preload = 'auto'
    audio.onplay  = () => setHablando(true)
    audio.onended = () => setHablando(false)
    audio.onerror = () => setHablando(false)
    audioRef.current = audio

    const timer = setTimeout(() => setBurbujaVisible(true), 1500)

    return () => {
      clearTimeout(timer)
      audio.pause()
    }
  }, [])

  if (cerrado) return null

  return (
    <div className="fixed bottom-0 left-4 z-50 flex flex-col items-start">

      {/* Burbuja */}
      <div className={`mb-2 ml-8 transition-all duration-500 origin-bottom-left ${
        burbujaVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
      }`}>
        <div className="relative bg-white rounded-2xl rounded-bl-sm shadow-xl border border-gray-100 px-4 py-3 max-w-[220px]">
          <button
            onClick={() => setCerrado(true)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-500 text-xs flex items-center justify-center transition-colors leading-none"
          >
            ✕
          </button>
          <p className="text-azul font-semibold text-sm leading-snug">¡Hola! 👋 Soy Javier Altamirano.</p>
          <p className="text-gray-500 text-xs mt-1 leading-relaxed">Bienvenido, estoy para servirte.</p>
          <div className="absolute -bottom-2 left-5 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      </div>

      {/* Avatar */}
      <button
        onMouseEnter={() => setBurbujaVisible(true)}
        onClick={() => { if (!hablando) reproducir() }}
        className="relative focus:outline-none"
        style={{ animation: 'flotar 3s ease-in-out infinite' }}
        title="¡Haz clic para escucharme!"
      >
        <img
          src="/imagenes/candidato_avatar.png"
          alt="Avatar del candidato"
          className={`w-28 sm:w-36 drop-shadow-2xl select-none transition-all duration-150 ${hablando ? 'brightness-110 scale-105' : ''}`}
          draggable={false}
        />

        {/* Indicador de audio activo */}
        {hablando && (
          <div className="absolute -top-1 -right-1 flex gap-0.5 items-end h-5 bg-azul rounded-full px-2 py-1">
            {[8, 14, 8].map((h, i) => (
              <span key={i} className="w-0.5 bg-oro rounded-full"
                style={{ height: `${h}px`, animation: `onda 0.6s ease-in-out ${i * 0.15}s infinite alternate` }} />
            ))}
          </div>
        )}

        {/* Indicador de clic — junto a la cabeza */}
        {!hablando && (
          <div
            className="absolute top-[4%] flex items-center gap-1"
            style={{ right: '-22px', animation: 'flotar 2s ease-in-out infinite' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 drop-shadow-md" fill="#AC7C3F">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            <svg viewBox="0 0 24 24" className="w-6 h-6 drop-shadow-md" fill="none">
              <path d="M9 11V6a2 2 0 1 1 4 0v5" stroke="#AC7C3F" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M13 10a2 2 0 1 1 4 0v1" stroke="#AC7C3F" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M17 11a2 2 0 1 1 4 0v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-1a2 2 0 1 1 4 0" stroke="#AC7C3F" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M7 14V6a2 2 0 1 1 4 0v5" stroke="#AC7C3F" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <span
              className="text-[10px] font-bold text-oro bg-azul px-2 py-0.5 rounded-full shadow-md tracking-wide"
              style={{ animation: 'pulso 1.5s ease-in-out infinite' }}
            >
              clic
            </span>
          </div>
        )}
      </button>

      <style>{`
        @keyframes flotar {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes onda {
          0%   { transform: scaleY(0.5); }
          100% { transform: scaleY(1.5); }
        }
        @keyframes pulso {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(0.92); }
        }
      `}</style>
    </div>
  )
}
