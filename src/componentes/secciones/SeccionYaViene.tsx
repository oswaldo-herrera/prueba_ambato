import { useRef } from 'react'

export default function SeccionYaViene() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    const x = (clientX - rect.left) / rect.width  - 0.5  // -0.5 a 0.5
    const y = (clientY - rect.top)  / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg) scale3d(1.04,1.04,1.04)`
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
  }

  return (
    <section style={{
      background: 'linear-gradient(135deg, #012857 0%, #001F70 100%)',
      padding: '60px 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ position: 'relative', maxWidth: '760px', width: '100%' }}>

        {/* Halo difuminado detrás */}
        <div style={{
          position: 'absolute', inset: '-30px',
          background: 'radial-gradient(ellipse at center, rgba(212,168,106,0.35) 0%, rgba(33,36,61,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(28px)',
          pointerEvents: 'none',
        }} />

        {/* Tarjeta con efecto 3D */}
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onTouchMove={handleMove}
          onTouchEnd={handleLeave}
          style={{
            position: 'relative',
            borderRadius: '20px',
            padding: '3px',
            background: 'linear-gradient(135deg, rgba(212,168,106,0.7) 0%, rgba(255,255,255,0.15) 40%, rgba(172,124,63,0.6) 100%)',
            boxShadow: '0 0 40px rgba(212,168,106,0.4), 0 0 80px rgba(212,168,106,0.15)',
            transition: 'transform 0.12s ease-out',
            cursor: 'pointer',
            willChange: 'transform',
          }}
        >
          <img
            src="/imagenes/ya_viene_2050.png"
            alt="Ya viene 2050"
            style={{ width: '100%', display: 'block', borderRadius: '18px' }}
            draggable={false}
          />
        </div>

        {/* Grid 2 filas × 3 columnas */}
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '760px', margin: '32px auto 0' }}>

          {/* 1 — Hospital Municipal */}
          <div style={{ borderRadius: '20px', padding: '3px', background: 'linear-gradient(135deg, rgba(255,102,0,0.6) 0%, rgba(255,255,255,0.15) 40%, rgba(1,40,87,0.5) 100%)', boxShadow: '0 0 30px rgba(255,102,0,0.2)' }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', borderRadius: '18px', overflow: 'hidden', background: '#000' }}>
              <video src="/imagenes/reels/hospital_municpal.mp4" controls playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* 2 — YouTube Shorts */}
          <div style={{ borderRadius: '20px', padding: '3px', background: 'linear-gradient(135deg, rgba(212,168,106,0.7) 0%, rgba(255,255,255,0.15) 40%, rgba(172,124,63,0.6) 100%)', boxShadow: '0 0 30px rgba(212,168,106,0.3)' }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', borderRadius: '18px', overflow: 'hidden', background: '#000' }}>
              <iframe src="https://www.youtube.com/embed/mhlVCpgZRro" title="Ambato 2050" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} />
            </div>
          </div>

          {/* 3 — Nuevo Estadio */}
          <div style={{ borderRadius: '20px', padding: '3px', background: 'linear-gradient(135deg, rgba(1,40,87,0.5) 0%, rgba(255,255,255,0.15) 40%, rgba(255,102,0,0.6) 100%)', boxShadow: '0 0 30px rgba(255,102,0,0.2)' }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', borderRadius: '18px', overflow: 'hidden', background: '#000' }}>
              <video src="/imagenes/reels/nuevo_estadio.mp4" controls playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* 4 — No Hice Nada */}
          <div style={{ borderRadius: '20px', padding: '3px', background: 'linear-gradient(135deg, rgba(255,102,0,0.6) 0%, rgba(255,255,255,0.15) 40%, rgba(1,40,87,0.5) 100%)', boxShadow: '0 0 30px rgba(255,102,0,0.2)' }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', borderRadius: '18px', overflow: 'hidden', background: '#000' }}>
              <video src="/imagenes/reels/no_hice_nada.mp4" controls playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* 5 — Cierre 1 */}
          <div style={{ borderRadius: '20px', padding: '3px', background: 'linear-gradient(135deg, rgba(212,168,106,0.7) 0%, rgba(255,255,255,0.15) 40%, rgba(172,124,63,0.6) 100%)', boxShadow: '0 0 30px rgba(212,168,106,0.3)' }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', borderRadius: '18px', overflow: 'hidden', background: '#000' }}>
              <video controls playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="/imagenes/videos_cierre_campa%C3%B1a/cierre_1.MOV" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* 6 — Cierre 2 */}
          <div style={{ borderRadius: '20px', padding: '3px', background: 'linear-gradient(135deg, rgba(1,40,87,0.5) 0%, rgba(255,255,255,0.15) 40%, rgba(255,102,0,0.6) 100%)', boxShadow: '0 0 30px rgba(255,102,0,0.2)' }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', borderRadius: '18px', overflow: 'hidden', background: '#000' }}>
              <video controls playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="/imagenes/videos_cierre_campa%C3%B1a/cierre_2.MP4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
