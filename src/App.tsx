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
import BotonWhatsApp from './componentes/diseno/BotonWhatsApp'
import AvatarFlotante from './componentes/diseno/AvatarFlotante'

// import SeccionInicio from './componentes/secciones/SeccionInicio'      // ← fondo oscuro
// import SeccionInicioClaro from './componentes/secciones/SeccionInicioClaro' // ← fondo claro (oculta)
import SeccionInicioNueva from './componentes/secciones/SeccionInicioNueva' // ← inicio_nueva (activa)
import SeccionQuienSoy from './componentes/secciones/SeccionQuienSoy'
import SeccionTrayectoria from './componentes/secciones/SeccionTrayectoria'
import SeccionValores from './componentes/secciones/SeccionValores'
import SeccionLogros from './componentes/secciones/SeccionLogros'
import SeccionAgenda from './componentes/secciones/SeccionAgenda'
import SeccionPropuestasNuevas from './componentes/secciones/SeccionPropuestasNuevas'
import SeccionMundial from './componentes/secciones/SeccionMundial'
import SeccionVideoObra from './componentes/secciones/SeccionVideoObra'
import SeccionWhatsApp from './componentes/secciones/SeccionWhatsApp'
// import SeccionFacebookLive from './componentes/secciones/SeccionFacebookLive'
import SeccionRegistro from './componentes/secciones/SeccionRegistro'
import SeccionRegistroBackup from './componentes/secciones/SeccionRegistroBackup'

export default function App() {
  const [politicaAbierta, setPoliticaAbierta] = useState(false)

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

        {/* 3. Video obra destacada */}
        <SeccionVideoObra />

        {/* 3.2 Logros 2019-2023 */}
        <SeccionLogros />

        {/* 3.5 Agenda de eventos */}
        {/* <SeccionAgenda /> */}

        {/* 4. Propuestas */}
        <SeccionPropuestasNuevas />

        {/* 4.5 Mundial 2026 */}
        {/* <SeccionMundial /> */}

        {/* 5. Trayectoria / Experiencia */}
        <SeccionTrayectoria />

        {/* 4. Valores — Tiempo, Pasión y Corazón */}
        <SeccionValores />

        {/* 5. Propuestas — oculta temporalmente */}
        {/* <SeccionPropuestas /> */}

        {/* 5. Formulario de registro */}
        <SeccionRegistro />

        {/* 6. Formulario de registro alternativo */}
        <SeccionRegistroBackup onPolitica={() => setPoliticaAbierta(true)} />

        {/* 7. Facebook Live */}
        {/*<SeccionFacebookLive /> */}

        {/* 8. Canal de WhatsApp */}
        <SeccionWhatsApp />
      </main>

      {/* ── PIE DE PÁGINA ── */}
      <PieDePagina onPolitica={() => setPoliticaAbierta(true)} />

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <BotonWhatsApp />

      {/* ── AVATAR FLOTANTE ── */}
      <AvatarFlotante />

      {/* ── INTRO ANIMACIÓN ── */}
      <IntroAnimacion />

      {/* ── POLÍTICA DE PRIVACIDAD ── */}
      {politicaAbierta && <PoliticaPrivacidad onCerrar={() => setPoliticaAbierta(false)} />}

      {/* ── AUDIO DE FONDO (una sola vez al cargar) — desactivado temporalmente ── */}
      {/* <AudioFondo /> */}

    </div>
  )
}
