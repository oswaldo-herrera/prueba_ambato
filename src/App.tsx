// ============================================================
// APP.TSX — LA PÁGINA PRINCIPAL
// ============================================================
// Este archivo organiza todas las secciones de la página.
// El orden en que aparecen aquí es el orden en la página web.
// Para agregar o quitar una sección, solo agrega/quita
// la línea correspondiente dentro del <main>.
// ============================================================

import { useState } from 'react'
import BarraNavegacion from './componentes/diseno/BarraNavegacion'
import IntroAnimacion from './componentes/diseno/IntroAnimacion'
// import AudioFondo from './componentes/diseno/AudioFondo' // ← desactivado temporalmente
import PoliticaPrivacidad from './componentes/secciones/PoliticaPrivacidad'
import PieDePagina from './componentes/diseno/PieDePagina'
// import BotonWhatsApp from './componentes/diseno/BotonWhatsApp'
import AvatarFlotante from './componentes/diseno/AvatarFlotante'
import BuzonFlotante from './componentes/diseno/BuzonFlotante'

// import SeccionInicio from './componentes/secciones/SeccionInicio'      // ← fondo oscuro
// import SeccionInicioClaro from './componentes/secciones/SeccionInicioClaro' // ← fondo claro (oculta)
import SeccionInicioNueva from './componentes/secciones/SeccionInicioNueva' // ← inicio_nueva (activa)
import SeccionQuienSoy from './componentes/secciones/SeccionQuienSoy'
import SeccionTrayectoria from './componentes/secciones/SeccionTrayectoria'
// import SeccionValores from './componentes/secciones/SeccionValores'
import SeccionLogros from './componentes/secciones/SeccionLogros'
import SeccionJavierEnTuCasa from './componentes/secciones/SeccionJavierEnTuCasa'
import SeccionTop5 from './componentes/secciones/SeccionTop5'
// import SeccionAgenda from './componentes/secciones/SeccionAgenda'
import SeccionPropuestasNuevas from './componentes/secciones/SeccionPropuestasNuevas'
import SeccionYaViene from './componentes/secciones/SeccionYaViene'
// import SeccionMundial from './componentes/secciones/SeccionMundial'
import SeccionInicioCampana from './componentes/secciones/SeccionInicioCampana'
import SeccionVideoObra from './componentes/secciones/SeccionVideoObra'
// import SeccionWhatsApp from './componentes/secciones/SeccionWhatsApp'
// import SeccionFacebookLive from './componentes/secciones/SeccionFacebookLive'
// import SeccionRegistro from './componentes/secciones/SeccionRegistro'
import SeccionRegistroBackup from './componentes/secciones/SeccionRegistroBackup'
import SeccionBuzonJavier from './componentes/secciones/SeccionBuzonJavier'
import SeccionComoVotar from './componentes/secciones/SeccionComoVotar'

export default function App() {
  const [politicaAbierta, setPoliticaAbierta] = useState(false)
  const [mensajesAbierto, setMensajesAbierto] = useState(false)

  return (
    <div className="font-sans text-gray-800 antialiased">

      {/* ── MENÚ DE NAVEGACIÓN (siempre visible arriba) ── */}
      <BarraNavegacion />

      {/* ── CONTENIDO PRINCIPAL ── */}
      <main>
        {/* 1. Sección de inicio / Hero — CAMBIA ENTRE LAS DOS OPCIONES */}
        {/* INICIO NUEVA (activa) — para volver a la anterior ver los imports comentados arriba */}
        <SeccionInicioNueva />

        {/* 2. Quién soy / Conóceme */}
        <SeccionQuienSoy />

        {/* 2.5 Cómo votar */}
        <SeccionComoVotar />

        {/* 2.5 Inicio de Campaña */}
        <SeccionInicioCampana />

        {/* 4.1 Ya viene 2050 — antes de Javier te escucha */}
        <SeccionYaViene />

        {/* Imagen mensajes — entre Ya Viene y Javier te escucha */}
        <div className="bg-gray-100 flex justify-center px-4 py-10">
          <img
            src="/imagenes/campa%C3%B1a/volantes/javier_altamirano_mensajes.png"
            alt="Javier Altamirano mensajes"
            onClick={() => setMensajesAbierto(true)}
            className="w-full max-w-2xl rounded-2xl shadow-2xl shadow-black/20 cursor-zoom-in hover:scale-[1.02] transition-transform duration-200"
          />
        </div>

        {/* Lightbox mensajes */}
        {mensajesAbierto && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setMensajesAbierto(false)}
          >
            <button
              onClick={() => setMensajesAbierto(false)}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
            >
              ✕
            </button>
            <img
              src="/imagenes/campa%C3%B1a/volantes/javier_altamirano_mensajes.png"
              alt="Javier Altamirano mensajes"
              onClick={e => e.stopPropagation()}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            />
          </div>
        )}

        {/* 2.6 Javier te escucha */}
        <SeccionBuzonJavier />

        {/* 3.2 Javier en Tu Casa */}
        <SeccionJavierEnTuCasa />

        {/* 3.25 Top 5 preocupaciones */}
        <SeccionTop5 />

        {/* 3.3 Logros 2019-2023 */}
        <SeccionLogros />

        {/* 3.5 Agenda de eventos */}
        {/* <SeccionAgenda /> */}

        {/* 4. Propuestas */}
        <SeccionPropuestasNuevas />

        {/* 4.5 Mundial 2026 */}
        {/* <SeccionMundial /> */}

        {/* 5. Trayectoria / Experiencia */}
        <SeccionTrayectoria />

        {/* 4. Valores — oculto temporalmente */}
        {/* <SeccionValores /> */}

        {/* 5. Propuestas — oculta temporalmente */}
        {/* <SeccionPropuestas /> */}

        {/* 5. Formulario de registro — oculto temporalmente */}
        {/* <SeccionRegistro /> */}

        {/* 6. Formulario de registro alternativo */}
        <SeccionRegistroBackup onPolitica={() => setPoliticaAbierta(true)} />

        {/* 7. Facebook Live */}
        {/*<SeccionFacebookLive /> */}

        {/* 8. Canal de WhatsApp — oculto temporalmente */}
        {/* <SeccionWhatsApp /> */}

        {/* 9. Video obra destacada — antes del footer */}
        <SeccionVideoObra />
      </main>

      {/* ── PIE DE PÁGINA ── */}
      <PieDePagina onPolitica={() => setPoliticaAbierta(true)} />

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      {/* <BotonWhatsApp /> */}

      {/* ── AVATAR FLOTANTE ── */}
      <AvatarFlotante />

      {/* ── BUZÓN FLOTANTE — Javier te escucha ── */}
      <BuzonFlotante />

      {/* ── INTRO ANIMACIÓN ── */}
      <IntroAnimacion />

      {/* ── POLÍTICA DE PRIVACIDAD ── */}
      {politicaAbierta && <PoliticaPrivacidad onCerrar={() => setPoliticaAbierta(false)} />}

      {/* ── AUDIO DE FONDO (una sola vez al cargar) — desactivado temporalmente ── */}
      {/* <AudioFondo /> */}

    </div>
  )
}
