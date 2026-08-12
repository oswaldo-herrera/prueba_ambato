import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

const PARROQUIAS_URBANAS = [
  'Atocha - Ficoa', 'Celiano Monge', 'Huachi Chico', 'Huachi Loreto',
  'La Matriz', 'La Merced', 'La Península', 'Pishilata', 'San Francisco',
]
const PARROQUIAS_RURALES = [
  'Ambatillo', 'Atahualpa', 'Augusto Nicolás Martínez', 'Constantino Fernández',
  'Cunchibamba', 'Huachi Grande', 'Izamba', 'Juan Benigno Vela', 'Montalvo',
  'Pasa', 'Picaihua', 'Pilahuín', 'Quisapincha', 'San Bartolomé de Pinllo',
  'San Fernando', 'Santa Rosa', 'Totoras', 'Unamuncho',
]

function limpiarTel(v: string) { return v.replace(/\D/g, '').slice(0, 10) }

export default function BuzonFlotante() {
  const [visible, setVisible] = useState(false)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4400)
    return () => clearTimeout(t)
  }, [])
  const [propuesta, setPropuesta] = useState('')
  const [parroquia, setParroquia] = useState('')
  const [whatsapp,  setWhatsapp]  = useState('')
  const [enviando,  setEnviando]  = useState(false)
  const [enviado,   setEnviado]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!propuesta.trim() || !parroquia) return
    setEnviando(true)
    setError(null)
    const { error: sbErr } = await supabase.from('buzon_propuestas').insert([{
      propuesta: propuesta.trim(),
      parroquia,
      whatsapp: whatsapp.trim() ? '+593' + whatsapp.trim() : null,
    }])
    setEnviando(false)
    if (sbErr) setError('Ocurrió un error. Intenta nuevamente.')
    else setEnviado(true)
  }

  const cerrar = () => {
    setAbierto(false)
    if (enviado) {
      setTimeout(() => {
        setEnviado(false); setPropuesta(''); setParroquia(''); setWhatsapp(''); setError(null)
      }, 400)
    }
  }

  return (
    <>
      <style>{`
        .buzon-btn {
          right: 20px;
        }
        .buzon-btn img { width: 100px; }
        @media (max-width: 768px) {
          .buzon-btn {
            right: 95px;
          }
          .buzon-btn img { width: 38px; }
        }
      `}</style>

      {/* ── Botón flotante (aparece después de la intro) ── */}
      <button
        className="buzon-btn"
        onClick={() => setAbierto(true)}
        title="Javier te escucha — Mándanos tu propuesta"
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 900,
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.6s ease',
        }}
      >
        <img
          src="/imagenes/buzon_javier_imagen.png"
          alt="Javier te escucha"
          style={{ height: 'auto', display: 'block' }}
        />
      </button>

      {/* ── Modal con formulario ── */}
      {abierto && (
        <div
          onClick={e => { if (e.target === e.currentTarget) cerrar() }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div style={{
            background: '#21243D',
            borderRadius: '20px',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '440px',
            maxHeight: '92dvh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
          }}>

            {/* Barra superior */}
            <div style={{
              padding: '14px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/imagenes/buzon_javier_imagen.png" alt="" style={{ width: '36px', borderRadius: '6px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#fff' }}>Buzón de Javier</div>
                  <div style={{ fontSize: '11px', color: '#D4A86A', letterSpacing: '.06em' }}>MÁNDANOS TU PROPUESTA</div>
                </div>
              </div>
              <button
                onClick={cerrar}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
                  width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer',
                  fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >✕</button>
            </div>

            {/* Cuerpo */}
            <div style={{ overflowY: 'auto', padding: '20px 24px 24px', flex: 1 }}>
              {enviado ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '52px', marginBottom: '12px' }}>🙌</div>
                  <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '20px', marginBottom: '8px' }}>¡Gracias!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.6 }}>
                    Tu propuesta fue recibida. Javier y su equipo la leerán personalmente.
                  </p>
                  <button
                    onClick={() => { setEnviado(false); setPropuesta(''); setParroquia(''); setWhatsapp('') }}
                    style={{ marginTop: '20px', color: '#D4A86A', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}
                  >
                    Enviar otra propuesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                  {/* Propuesta */}
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      ¿Qué propones? *
                    </label>
                    <textarea
                      value={propuesta}
                      onChange={e => setPropuesta(e.target.value)}
                      placeholder="Describe tu idea o necesidad para Ambato..."
                      required
                      rows={4}
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px',
                        padding: '12px 14px', fontSize: '14px', color: '#fff',
                        resize: 'none', outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Parroquia */}
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Parroquia *
                    </label>
                    <select
                      value={parroquia}
                      onChange={e => setParroquia(e.target.value)}
                      required
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px',
                        padding: '12px 14px', fontSize: '14px',
                        color: parroquia ? '#fff' : 'rgba(255,255,255,0.35)',
                        outline: 'none', boxSizing: 'border-box', appearance: 'none',
                      }}
                    >
                      <option value="" style={{ background: '#21243D' }}>— Selecciona tu parroquia —</option>
                      <optgroup label="Urbanas" style={{ background: '#21243D', color: '#AC7C3F' }}>
                        {PARROQUIAS_URBANAS.map(p => <option key={p} value={p} style={{ background: '#21243D', color: '#fff' }}>{p}</option>)}
                      </optgroup>
                      <optgroup label="Rurales" style={{ background: '#21243D', color: '#AC7C3F' }}>
                        {PARROQUIAS_RURALES.map(p => <option key={p} value={p} style={{ background: '#21243D', color: '#fff' }}>{p}</option>)}
                      </optgroup>
                    </select>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      WhatsApp <span style={{ fontWeight: 400, textTransform: 'none', opacity: .6 }}>(opcional)</span>
                    </label>
                    <div style={{ display: 'flex', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <span style={{ background: 'rgba(255,255,255,0.08)', padding: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.7)', borderRight: '1px solid rgba(255,255,255,0.12)', whiteSpace: 'nowrap' }}>
                        🇪🇨 +593
                      </span>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={e => setWhatsapp(limpiarTel(e.target.value))}
                        placeholder="987654321"
                        inputMode="numeric"
                        maxLength={10}
                        style={{
                          flex: 1, background: 'rgba(255,255,255,0.06)',
                          border: 'none', padding: '12px', fontSize: '14px',
                          color: '#fff', outline: 'none', minWidth: 0,
                        }}
                      />
                    </div>
                  </div>

                  {error && <p style={{ color: '#f87171', fontSize: '12px', textAlign: 'center', margin: 0 }}>{error}</p>}

                  <button
                    type="submit"
                    disabled={enviando}
                    style={{
                      width: '100%', padding: '14px',
                      background: 'linear-gradient(135deg, #AC7C3F 0%, #D4A86A 50%, #AC7C3F 100%)',
                      border: 'none', borderRadius: '12px',
                      color: '#fff', fontWeight: 700, fontSize: '14px',
                      cursor: enviando ? 'not-allowed' : 'pointer',
                      opacity: enviando ? 0.65 : 1,
                      letterSpacing: '.04em',
                    }}
                  >
                    {enviando ? 'Enviando...' : '📬 Enviar propuesta a Javier'}
                  </button>

                  <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', textAlign: 'center', margin: 0 }}>
                    Tu información es confidencial y no se comparte con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
