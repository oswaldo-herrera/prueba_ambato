import { useState, useRef, useEffect } from 'react'

const VIDEOS_DEFAULT = [
  { src: '/imagenes/video_1.mp4',  titulo: 'Yo con Javier' },
  { src: '/imagenes/video_2_.mp4', titulo: 'Yo con Javier' },
  { src: '/imagenes/video_3.mp4',  titulo: 'Yo con Javier' },
]

interface VideoItem { src: string; titulo: string }

interface Props {
  onCerrar: () => void
  videos?: VideoItem[]
}

export default function CarruselVideos({ onCerrar, videos = VIDEOS_DEFAULT }: Props) {
  const [indice, setIndice] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const anterior = () => {
    setIndice((i) => (i - 1 + videos.length) % videos.length)
  }
  const siguiente = () => {
    setIndice((i) => (i + 1) % videos.length)
  }

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.load()
  }, [indice])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onCerrar() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onCerrar])

  const video = videos[indice]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onCerrar}
    >
      <div
        className="relative w-full max-w-3xl bg-azul rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <div>
            <h2 className="text-white font-bold text-base leading-tight">{video.titulo}</h2>
          </div>
          <button
            onClick={onCerrar}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-lg leading-none"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Video */}
        <div className="relative bg-black aspect-video">
          <video
            ref={videoRef}
            key={video.src}
            src={video.src}
            controls
            className="w-full h-full object-contain"
          />

          {/* Flechas — solo si hay más de 1 video */}
          {videos.length > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-oro text-white hover:text-azul flex items-center justify-center transition-all shadow-lg"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={siguiente}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-oro text-white hover:text-azul flex items-center justify-center transition-all shadow-lg"
                aria-label="Siguiente"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Pie: puntos indicadores + contador */}
        <div className="flex items-center justify-center gap-3 py-3 bg-azul">
          {videos.length > 1 && videos.map((_: VideoItem, i: number) => (
            <button
              key={i}
              onClick={() => setIndice(i)}
              className={`rounded-full transition-all duration-200 ${
                i === indice ? 'w-4 h-2 bg-oro' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Video ${i + 1}`}
            />
          ))}
          <span className="text-white/40 text-xs ml-1">{indice + 1} / {videos.length}</span>
        </div>
      </div>
    </div>
  )
}
