import { useEffect, useRef, useState } from 'react'

// ── Imágenes carousel campaña ───────────────────────────────
const BASE_2DA = '/imagenes/campa%C3%B1a/campa%C3%B1a_2da_fase'
const CAROUSEL_IMGS = [
  // Campaña 2da fase — portada siempre primera
  `${BASE_2DA}/portada.jpeg`,
  `${BASE_2DA}/001.jpeg`,
  `${BASE_2DA}/002.jpeg`,
  `${BASE_2DA}/003.jpeg`,
  `${BASE_2DA}/005.jpeg`,
  `${BASE_2DA}/006.jpeg`,
  `${BASE_2DA}/007.jpeg`,
  `${BASE_2DA}/008.jpeg`,
  `${BASE_2DA}/009.jpeg`,
  `${BASE_2DA}/010.jpeg`,
  // Campaña 1ra fase
  '/imagenes/campa%C3%B1a/1.jpeg',
  '/imagenes/campa%C3%B1a/2.png',
  '/imagenes/campa%C3%B1a/3.png',
  '/imagenes/campa%C3%B1a/4.png',
  '/imagenes/campa%C3%B1a/5.png',
  '/imagenes/campa%C3%B1a/6.png',
  '/imagenes/campa%C3%B1a/7.png',
  '/imagenes/campa%C3%B1a/8.jpeg',
  '/imagenes/campa%C3%B1a/9.jpeg',
  '/imagenes/campa%C3%B1a/10.jpeg',
  '/imagenes/campa%C3%B1a/11.jpeg',
  '/imagenes/campa%C3%B1a/12.jpeg',
]

// ── Slider de fondo: todas las imágenes de octubre + septiembre ──
function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const OCT_IMGS = Array.from({ length: 30 }, (_, i) =>
  `/imagenes/octubre/oct_${String(i + 1).padStart(2, '0')}.jpeg`
)
const SEP_IMGS = [
  'IMG_20260923_155640.jpeg','IMG_20260930_111045.jpeg',
  'IMG_2045.jpg','IMG_2046.jpg','IMG_2047.jpg','IMG_2055.jpg','IMG_2060.jpg',
  'IMG_2106.jpg','IMG_2126.jpg','IMG_2133.jpg','IMG_2144.jpg','IMG_2153.jpg',
  'IMG_2159.jpg','IMG_2202.jpg','IMG_2216.jpg','IMG_2222.jpg','IMG_2389.jpg',
  'IMG_2392.jpg','IMG_2393.jpg','IMG_2394.jpg','IMG_2405.jpg','IMG_2406.jpg',
  'IMG_2409.jpg','IMG_2411.jpg','IMG_2414.jpg','IMG_2419.jpg','IMG_2423.jpg',
  'IMG_2470.jpg','IMG_2490.jpg','IMG_2554.jpg','IMG_2571.jpg','IMG_2584.jpg',
  'IMG_2586.jpg','IMG_2588.jpg','IMG_2604.jpg',
].map(f => `/imagenes/septiembre/${f}`)
const BG_IMGS = shuffleArr([...OCT_IMGS, ...SEP_IMGS])

// ── Videos ──────────────────────────────────────────────────
const YT_ID = '4QIj9mivv48'
const FB_VIDEO_SRC = 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FJavierAltamiranoec%2Fvideos%2F1881502196341739%2F&show_text=false&width=267&t=0'

// ── Estilos de animaciones globales ─────────────────────────
const CSS = `
@keyframes ic-glow {
  0%,100% { text-shadow: 0 0 20px rgba(255,102,0,0.8), 0 0 60px rgba(255,102,0,0.4); }
  50%      { text-shadow: 0 0 40px rgba(255,170,0,1),   0 0 100px rgba(255,102,0,0.7); }
}
@keyframes ic-scan {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
@keyframes ic-pulse-line {
  0%,100% { opacity: 1; transform: scaleX(1); }
  50%     { opacity: 0.6; transform: scaleX(0.95); }
}
@keyframes ic-flicker {
  0%,96%,100% { opacity:1; } 97%,99% { opacity:0.85; }
}
@keyframes ic-reveal {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0% 0 0); }
}
@keyframes ic-rise {
  from { opacity:0; transform: translateY(40px); }
  to   { opacity:1; transform: translateY(0); }
}
@keyframes ic-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes ic-spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes ic-bounce-dot {
  0%,100% { transform: scale(1); opacity:1; }
  50%     { transform: scale(1.6); opacity:0.7; }
}
.ic-glow-title { animation: ic-glow 2.5s ease-in-out infinite; }
.ic-flicker    { animation: ic-flicker 8s infinite; }
.ic-shimmer-text {
  background: linear-gradient(90deg,
    #FF6600 0%, #FFB300 20%, #FFE0A0 40%, #FFB300 60%, #FF6600 80%, #FFB300 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ic-shimmer 3s linear infinite;
}
.ic-card { transition: transform 0.45s cubic-bezier(.22,1,.36,1), box-shadow 0.45s ease; }
.ic-card:hover {
  transform: scale(1.03) translateY(-6px);
  box-shadow: 0 30px 70px rgba(0,0,0,0.7), 0 0 40px rgba(255,102,0,0.45);
}
.ic-card:hover .ic-img { transform: scale(1.08); }
.ic-img { transition: transform 0.6s cubic-bezier(.22,1,.36,1); }
.ic-reveal { animation: ic-reveal 0.9s cubic-bezier(.77,0,.18,1) forwards; }
.ic-rise   { animation: ic-rise 0.7s cubic-bezier(.22,1,.36,1) forwards; }
.ic-pulse-line { animation: ic-pulse-line 3s ease-in-out infinite; }
`

export default function SeccionInicioCampana() {
  const sectionRef = useRef<HTMLElement>(null)

  // ── Slider de fondo ──────────────────────────────────────
  const [bgIdx, setBgIdx] = useState(0)
  const [fading, setFading] = useState(false)

  // ── Carousel de fotos campaña ─────────────────────────────
  const [carIdx, setCarIdx] = useState(0)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const prev = () => setCarIdx(i => (i - 1 + CAROUSEL_IMGS.length) % CAROUSEL_IMGS.length)
  const next = () => setCarIdx(i => (i + 1) % CAROUSEL_IMGS.length)

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setBgIdx(i => (i + 1) % BG_IMGS.length)
        setFading(false)
      }, 3000)
    }, 8000)
    return () => clearInterval(t)
  }, [])

  // Intersection Observer — activa clases al entrar en viewport
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          const delay = el.dataset.delay || '0'
          setTimeout(() => {
            el.style.opacity = '1'
            el.classList.add(el.dataset.reveal || '')
          }, parseInt(delay))
          io.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    els.forEach(el => { (el as HTMLElement).style.opacity = '0'; io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{CSS}</style>

      <section
        ref={sectionRef}
        id="inicio-campana"
        style={{
          background: 'linear-gradient(to bottom, #001F70 0%, #001255 20%, #000A3C 55%, #00041E 100%)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '100px',
          paddingBottom: '110px',
          marginTop: '-1px',
          marginBottom: '-2px',
        }}
      >
        {/* ── Ola superior: tapa blanca invertida para transición desde SeccionQuienSoy ── */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', lineHeight: 0, pointerEvents: 'none', zIndex: 5 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* ── BG slider: capa A (actual) ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url(${BG_IMGS[bgIdx]})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.55) saturate(0.9)',
          transform: 'scale(1.0)',
          opacity: fading ? 0 : 1,
          transition: 'opacity 3s ease',
          pointerEvents: 'none',
        }} />
        {/* ── BG slider: capa B (siguiente) ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url(${BG_IMGS[(bgIdx + 1) % BG_IMGS.length]})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.55) saturate(0.9)',
          transform: 'scale(1.0)',
          opacity: fading ? 1 : 0,
          transition: 'opacity 3s ease',
          pointerEvents: 'none',
        }} />
        {/* ── Overlay semitransparente sobre las fotos ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(1,28,70,0.45) 0%, rgba(1,15,50,0.62) 100%)',
        }} />

        {/* ── Orbes de luz de fondo ── */}
        <div style={{
          position: 'absolute', top: '-15%', left: '-10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(255,102,0,0.18) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 2,
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(1,40,87,0.25) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 2,
        }} />

        <div style={{ position: 'relative', zIndex: 3, maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

          {/* ── ENCABEZADO ── */}
          <div
            data-reveal="ic-rise" data-delay="0"
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            {/* Etiqueta superior */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'linear-gradient(to right, transparent, #FF6600)' }} />
              <span style={{
                fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase',
                color: '#FF9900', border: '1px solid rgba(255,102,0,0.5)',
                padding: '5px 14px', borderRadius: '20px',
                background: 'rgba(255,102,0,0.1)',
              }}>
                ◆ Javier Altamirano ◆
              </span>
              <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'linear-gradient(to left, transparent, #FF6600)' }} />
            </div>

            {/* Imagen vota_todo */}
            <img
              src="/imagenes/campa%C3%B1a/vota_todo.png"
              alt="Vota Todo Javier Altamirano"
              style={{ width: '100%', maxWidth: '480px', objectFit: 'contain', margin: '0 auto 12px', display: 'block', filter: 'drop-shadow(0 4px 24px rgba(255,102,0,0.4))' }}
            />

            {/* Línea decorativa animada */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '20px 0 24px' }}>
              <div className="ic-pulse-line" style={{ width: '60px', height: '3px', background: 'linear-gradient(to right, transparent, #FF6600)' }} />
              <div style={{
                width: '10px', height: '10px', border: '2px solid #FF6600', transform: 'rotate(45deg)',
                animation: 'ic-bounce-dot 2s ease-in-out infinite',
              }} />
              <div style={{
                width: '6px', height: '6px', background: '#FF6600', borderRadius: '50%',
                animation: 'ic-bounce-dot 2s ease-in-out infinite 0.3s',
              }} />
              <div style={{
                width: '10px', height: '10px', border: '2px solid #FF6600', transform: 'rotate(45deg)',
                animation: 'ic-bounce-dot 2s ease-in-out infinite 0.6s',
              }} />
              <div className="ic-pulse-line" style={{ width: '60px', height: '3px', background: 'linear-gradient(to left, transparent, #FF6600)' }} />
            </div>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px', margin: '0 auto',
              letterSpacing: '0.5px',
            }}>
              La voz del pueblo de Ambato se hace escuchar.
              <br />
              <strong style={{ color: '#FF9900' }}>Juntos construimos el Ambato que merecemos.</strong>
            </p>
          </div>

          {/* ── VIDEO FACEBOOK — retrato, centrado sobre las fotos ── */}
          <div
            data-reveal="ic-rise" data-delay="180"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '320px',
              borderRadius: '22px',
              padding: '3px',
              background: 'linear-gradient(135deg, #1877F2 0%, #42A5F5 40%, rgba(255,255,255,0.15) 60%, #1877F2 100%)',
              boxShadow: '0 0 50px rgba(24,119,242,0.45), 0 0 100px rgba(24,119,242,0.18)',
            }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#000', display: 'flex', flexDirection: 'column' }}>
                {/* Barra tipo broadcast Facebook */}
                <div style={{
                  background: 'linear-gradient(90deg, #0a1628, #0d1f3c)',
                  padding: '10px 14px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  borderBottom: '1px solid rgba(24,119,242,0.3)',
                }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28CA41', display: 'inline-block' }} />
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#1877F2" style={{ flexShrink: 0 }}>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span style={{ color: '#90CAF9', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    Facebook · Reel
                  </span>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF3B30', display: 'inline-block', animation: 'ic-bounce-dot 1.5s ease-in-out infinite' }} />
                    <span style={{ color: '#FF3B30', fontSize: '10px', fontWeight: 700, letterSpacing: '1px' }}>EN VIVO</span>
                  </div>
                </div>
                {/* iframe Facebook retrato 9:16 */}
                <div style={{ position: 'relative', paddingBottom: '177.5%' }}>
                  <iframe
                    src={FB_VIDEO_SRC}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── CAROUSEL DE FOTOS CAMPAÑA ── */}
          <div data-reveal="ic-rise" data-delay="300" style={{ marginBottom: '32px' }}>
            {/* Pista del carousel */}
            <div style={{ position: 'relative', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

              {/* Imagen izquierda */}
              <div
                onClick={prev}
                style={{
                  position: 'absolute', left: 0, width: '44%', height: '300px',
                  borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
                  transform: 'scale(0.82)', opacity: 0.5, zIndex: 1,
                  transition: 'all 0.45s cubic-bezier(.22,1,.36,1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <img src={CAROUSEL_IMGS[(carIdx - 1 + CAROUSEL_IMGS.length) % CAROUSEL_IMGS.length]}
                  alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>

              {/* Imagen central */}
              <div
                onClick={() => setLightbox(CAROUSEL_IMGS[carIdx])}
                style={{
                  position: 'relative', width: '56%', height: '370px',
                  borderRadius: '20px', overflow: 'hidden', cursor: 'zoom-in',
                  zIndex: 2, transition: 'all 0.45s cubic-bezier(.22,1,.36,1)',
                  boxShadow: '0 24px 70px rgba(0,0,0,0.65)',
                  border: '2px solid rgba(255,102,0,0.55)',
                }}
              >
                <img src={CAROUSEL_IMGS[carIdx]}
                  alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>

              {/* Imagen derecha */}
              <div
                onClick={next}
                style={{
                  position: 'absolute', right: 0, width: '44%', height: '300px',
                  borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
                  transform: 'scale(0.82)', opacity: 0.5, zIndex: 1,
                  transition: 'all 0.45s cubic-bezier(.22,1,.36,1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <img src={CAROUSEL_IMGS[(carIdx + 1) % CAROUSEL_IMGS.length]}
                  alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Flechas */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '18px' }}>
              {[{ fn: prev, icon: '‹' }, { fn: next, icon: '›' }].map(({ fn, icon }, i) => (
                <button key={i} onClick={fn} style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  border: '1px solid rgba(255,102,0,0.45)',
                  background: 'rgba(255,255,255,0.07)', color: '#FF9900',
                  fontSize: '1.5rem', lineHeight: 1, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,102,0,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#FF6600' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,102,0,0.45)' }}
                >{icon}</button>
              ))}
            </div>
          </div>

          {/* ── LIGHTBOX ── */}
          {lightbox && (
            <div
              onClick={() => setLightbox(null)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                background: 'rgba(0,0,0,0.93)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'zoom-out',
              }}
            >
              <img src={lightbox} alt=""
                style={{ maxWidth: '92vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '14px', boxShadow: '0 0 80px rgba(0,0,0,0.8)' }} />
              <button onClick={() => setLightbox(null)} style={{
                position: 'absolute', top: '20px', right: '28px',
                background: 'none', border: 'none', color: '#fff',
                fontSize: '2.2rem', cursor: 'pointer', lineHeight: 1, opacity: 0.8,
              }}>✕</button>
            </div>
          )}

          {/* ── SEPARADOR DECORATIVO — oculto temporalmente ── */}
          <div
            data-reveal="ic-rise" data-delay="350"
            style={{ display: 'none', alignItems: 'center', gap: '16px', margin: '40px 0 36px' }}
          >
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,102,0,0.5), transparent)' }} />
            <span style={{ color: '#FF9900', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              ▶ &nbsp;VIDEOS OFICIALES
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,102,0,0.5), transparent)' }} />
          </div>

          {/* ── VIDEO YOUTUBE — oculto temporalmente ── */}
          <div
            data-reveal="ic-rise" data-delay="450"
            style={{
              display: 'none',
              borderRadius: '20px',
              padding: '3px',
              background: 'linear-gradient(135deg, #FF6600 0%, #FFB300 30%, rgba(255,255,255,0.15) 50%, #FF6600 70%, #FF9900 100%)',
              boxShadow: '0 0 60px rgba(255,102,0,0.4), 0 0 120px rgba(255,102,0,0.15)',
            }}
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden', background: '#000' }}>
              <div style={{
                background: 'linear-gradient(90deg, #07091a, #131840)',
                padding: '10px 18px',
                display: 'flex', alignItems: 'center', gap: '10px',
                borderBottom: '1px solid rgba(255,102,0,0.2)',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28CA41', display: 'inline-block' }} />
                </div>
                <span style={{ color: '#FF9900', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  🎬 &nbsp;Los años que nos cambiaron — Javier Altamirano
                </span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF3B30', display: 'inline-block', animation: 'ic-bounce-dot 1.5s ease-in-out infinite' }} />
                  <span style={{ color: '#FF3B30', fontSize: '10px', fontWeight: 700, letterSpacing: '1px' }}>EN VIVO</span>
                </div>
              </div>
              <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1&color=white`}
                  title="Los años que nos cambiaron — Javier Altamirano"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            </div>
          </div>

          {/* ── ESTADÍSTICAS / BADGES — ocultos temporalmente ── */}
          <div
            data-reveal="ic-rise" data-delay="550"
            style={{
              display: 'none', flexWrap: 'wrap', gap: '12px',
              justifyContent: 'center', marginTop: '48px',
            }}
          >
            {[
              { icon: '🏙️', label: 'Ambato', value: '25 parroquias' },
              { icon: '🤝', label: 'Compromisos', value: 'Cumplidos' },
              { icon: '🗳️', label: 'Campaña', value: '2025' },
              { icon: '⭐', label: 'Liderazgo', value: '#1 en encuestas' },
            ].map((b, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,102,0,0.2)',
                backdropFilter: 'blur(12px)',
                borderRadius: '14px',
                padding: '14px 22px',
                textAlign: 'center',
                minWidth: '130px',
                flex: '1',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,102,0,0.6)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,102,0,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,102,0,0.2)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
              }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{b.icon}</div>
                <div style={{ color: '#FF9900', fontWeight: 700, fontSize: '0.95rem' }}>{b.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>{b.label}</div>
              </div>
            ))}
          </div>

        </div>


        {/* ── Ola inferior → transición a sección blanca ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0, pointerEvents: 'none', zIndex: 4 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>

      </section>
    </>
  )
}
