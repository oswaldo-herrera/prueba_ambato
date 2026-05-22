// ============================================================
// APP.TSX — LA PÁGINA PRINCIPAL
// ============================================================
// Este archivo organiza todas las secciones de la página.
// El orden en que aparecen aquí es el orden en la página web.
// Para agregar o quitar una sección, solo agrega/quita
// la línea correspondiente dentro del <main>.
// ============================================================

import BarraNavegacion from './componentes/diseno/BarraNavegacion'
import PieDePagina from './componentes/diseno/PieDePagina'
import BotonWhatsApp from './componentes/diseno/BotonWhatsApp'
import AvatarFlotante from './componentes/diseno/AvatarFlotante'

import SeccionInicio from './componentes/secciones/SeccionInicio'
import SeccionQuienSoy from './componentes/secciones/SeccionQuienSoy'
import SeccionTrayectoria from './componentes/secciones/SeccionTrayectoria'
import SeccionValores from './componentes/secciones/SeccionValores'
import SeccionPropuestas from './componentes/secciones/SeccionPropuestas'
import SeccionWhatsApp from './componentes/secciones/SeccionWhatsApp'
import SeccionRegistro from './componentes/secciones/SeccionRegistro'
import SeccionRegistroBackup from './componentes/secciones/SeccionRegistroBackup'

export default function App() {
  return (
    <div className="font-sans text-gray-800 antialiased">

      {/* ── MENÚ DE NAVEGACIÓN (siempre visible arriba) ── */}
      <BarraNavegacion />

      {/* ── CONTENIDO PRINCIPAL ── */}
      <main>
        {/* 1. Sección de inicio / Hero */}
        <SeccionInicio />

        {/* 2. Quién soy / Conóceme */}
        <SeccionQuienSoy />

        {/* 3. Trayectoria / Experiencia */}
        <SeccionTrayectoria />

        {/* 4. Valores — Tiempo, Pasión y Corazón */}
        <SeccionValores />

        {/* 5. Propuestas */}
        <SeccionPropuestas />

        {/* 5. Canal de WhatsApp */}
        <SeccionWhatsApp />

        {/* 6. Formulario de registro */}
        <SeccionRegistro />

        {/* 7. Sección de registro alternativa */}
        <SeccionRegistroBackup />
      </main>

      {/* ── PIE DE PÁGINA ── */}
      <PieDePagina />

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <BotonWhatsApp />

      {/* ── AVATAR FLOTANTE ── */}
      <AvatarFlotante />

    </div>
  )
}
