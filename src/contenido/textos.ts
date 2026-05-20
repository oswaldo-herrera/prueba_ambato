// ============================================================
// ARCHIVO DE CONTENIDO — AQUÍ EDITAS TODOS LOS TEXTOS
// ============================================================
// Este archivo contiene TODOS los textos de la página.
// No necesitas tocar ningún otro archivo para cambiar el contenido.
// Simplemente busca la sección que quieres editar y cambia el texto.
// ============================================================

// ── BARRA DE NAVEGACIÓN ──────────────────────────────────────
export const navegacion = {
  logo: 'HERSA',          // Nombre o logo en texto del partido/candidato
  eslogan: 'Ambato',      // Subtítulo del logo
  enlaces: [
    { texto: 'Conóceme',    href: '#quiensoy' },
    { texto: 'Trayectoria', href: '#trayectoria' },
    { texto: 'Propuestas',  href: '#propuestas' },
    { texto: 'Regístrate',  href: '#registro' },
  ],
  botonPrincipal: {
    texto: 'Apoya la campaña',
    href: '#registro',
  },
}

// ── SECCIÓN INICIO (HERO) ────────────────────────────────────
export const seccionInicio = {
  etiqueta: 'Candidato al Congreso · Ambato 2026',    // Texto pequeño arriba del título
  titulo: 'Por un Ambato',    // Primera línea del título grande
  // Palabras que rotan en color oro — edítalas libremente
  titulosRotativos: [
    'con futuro',
    'con seguridad',
    'con empleo',
    'con educación',
    'con integridad',
  ],
  descripcion:
    'Construyamos juntos una ciudad más justa, con oportunidades reales para todos. Con experiencia, visión y compromiso ciudadano.',
  boton1: { texto: 'Ver propuestas', href: '#propuestas' },
  boton2: { texto: 'Regístrate aquí', href: '#registro' },
  // IMAGEN: coloca tu foto en /public/imagenes/candidato.png
  imagenCandidato: '/imagenes/candidato.png',
  imagenAlt: 'Fotografía del candidato',
  // Números destacados debajo del hero
  estadisticas: [
    { numero: '15+', descripcion: 'Años de experiencia' },
    { numero: '50K', descripcion: 'Vecinos comprometidos' },
    { numero: '12',  descripcion: 'Propuestas concretas' },
  ],
}

// ── SECCIÓN QUIÉN SOY ────────────────────────────────────────
export const seccionQuienSoy = {
  etiqueta: 'Conóceme',
  titulo: 'Una vida al',
  tituloDestacado: 'servicio público',
  descripcion:
    'Nací en Ambato, crecí entre su gente y dediqué mi carrera a construir instituciones más justas y eficientes.',
  pilares: [
    {
      numero: '01',
      titulo: 'Origen',
      texto:
        'Ambateño de corazón. Crecí en los barrios del sur, conozco de cerca las necesidades de las familias trabajadoras.',
    },
    {
      numero: '02',
      titulo: 'Preparación',
      texto:
        'Abogado con Maestría en Gestión Pública y certificación internacional en Gobernanza y Políticas Públicas.',
    },
    {
      numero: '03',
      titulo: 'Compromiso',
      texto:
        'Más de 15 años trabajando en proyectos de desarrollo local, resolución de conflictos e integridad institucional.',
    },
  ],
  // IMAGEN: coloca tu foto en /public/imagenes/candidato-sobre.png
  imagen: '/imagenes/casual.jpg',
  imagenAlt: 'Candidato con la comunidad',
}

// ── SECCIÓN TRAYECTORIA ──────────────────────────────────────
export const seccionTrayectoria = {
  etiqueta: 'Trayectoria',
  titulo: 'Experiencia que',
  tituloDestacado: 'respalda',
  items: [
    {
      titulo: 'Derecho — Universidad Central del Ecuador',
      descripcion:
        'Especialización en Derecho Público y Constitucional. Participación en clínicas jurídicas de acceso a la justicia.',
    },
    {
      titulo: 'Maestría en Gestión Pública',
      descripcion:
        'Enfocada en modernización del Estado, presupuesto participativo y rendición de cuentas a la ciudadanía.',
    },
    {
      titulo: 'Certificación Internacional en Gobernanza',
      descripcion:
        'Formación avalada por organismos internacionales en transparencia, anticorrupción y buen gobierno.',
    },
    {
      titulo: 'Director de Gestión Municipal — GAD Ambato',
      descripcion:
        'Lideró proyectos de infraestructura, atención ciudadana y digitalización de trámites por más de 8 años.',
    },
    {
      titulo: 'Mediador en resolución de conflictos',
      descripcion:
        'Más de 200 casos resueltos en disputas comunitarias, laborales e institucionales en Tungurahua.',
    },
  ],
}

// ── SECCIÓN PROPUESTAS ───────────────────────────────────────
export const seccionPropuestas = {
  etiqueta: 'Propuestas',
  titulo: 'Lo que vamos',
  tituloDestacado: 'a lograr',
  propuestas: [
    {
      icono: '🏛️',
      titulo: 'Descentralización del Estado',
      resumen: 'Autonomía regional y rediseño administrativo para un gobierno más cercano.',
      puntos: [
        'Transferencia real de competencias a los GAD provinciales',
        'Presupuesto participativo en todas las parroquias',
        'Ventanillas únicas de atención ciudadana',
      ],
    },
    {
      icono: '📚',
      titulo: 'Reforma Educativa Integral',
      resumen: 'Educación con valores, calidad y acceso equitativo para todos.',
      puntos: [
        'Mejora de infraestructura escolar en zonas rurales',
        'Programas de becas para talentos de escasos recursos',
        'Educación técnica y digital desde secundaria',
      ],
    },
    {
      icono: '🤝',
      titulo: 'Alianza por la Integridad',
      resumen: 'Transparencia y control ciudadano para erradicar la corrupción.',
      puntos: [
        'Auditorías ciudadanas a obras públicas',
        'Portal de transparencia en tiempo real',
        'Veeduría tripartita: Estado, empresa y sociedad civil',
      ],
    },
    {
      icono: '🌱',
      titulo: 'Desarrollo Económico Local',
      resumen: 'Apoyo al comercio, emprendimiento y empleo formal en Ambato.',
      puntos: [
        'Fondo de crédito para micro y pequeñas empresas',
        'Feria permanente de emprendedores ambateños',
        'Incentivos a empresas que contraten jóvenes locales',
      ],
    },
  ],
}

// ── SECCIÓN REGISTRO ─────────────────────────────────────────
export const seccionRegistro = {
  etiqueta: 'Únete',
  titulo: 'Sé parte del',
  tituloDestacado: 'cambio',
  descripcion:
    'Regístrate y recibe información directa sobre la campaña, eventos y cómo puedes participar en tu barrio.',
  campos: {
    nombre: { etiqueta: 'Nombre completo', placeholder: 'Tu nombre y apellido' },
    correo: { etiqueta: 'Correo electrónico', placeholder: 'tu@correo.com' },
    celular: { etiqueta: 'Número de celular', placeholder: '09XXXXXXXX' },
  },
  botonEnviar: 'Quiero unirme',
  mensajeExito: '¡Gracias por registrarte! Pronto recibirás noticias de la campaña.',
}

// ── SECCIÓN WHATSAPP ─────────────────────────────────────────
export const seccionWhatsApp = {
  titulo: 'Información oficial,',
  tituloDestacado: 'sin intermediarios',
  descripcion:
    'Únete a nuestro canal de WhatsApp y recibe actualizaciones directas, eventos y novedades de primera mano.',
  boton: {
    texto: 'Unirse al canal de WhatsApp',
    // CAMBIA ESTE ENLACE por el link real de tu canal de WhatsApp
    href: 'https://wa.me/593000000000',
  },
}

// ── PIE DE PÁGINA ─────────────────────────────────────────────
export const pieDePagina = {
  logo: 'HERSA',
  eslogan: 'Ambato',
  descripcion: 'Campaña política comprometida con el desarrollo de Ambato y Tungurahua.',
  // Derechos de autor — el año se actualiza automáticamente
  derechos: 'HERSA Campaña Ambato',
  enlacesRapidos: [
    { texto: 'Conóceme',    href: '#quiensoy' },
    { texto: 'Trayectoria', href: '#trayectoria' },
    { texto: 'Propuestas',  href: '#propuestas' },
    { texto: 'Regístrate',  href: '#registro' },
  ],
  redesSociales: [
    // CAMBIA estos enlaces por tus redes reales
    { nombre: 'Facebook',  href: '#', icono: 'fb' },
    { nombre: 'Instagram', href: '#', icono: 'ig' },
    { nombre: 'Twitter/X', href: '#', icono: 'tw' },
    { nombre: 'YouTube',   href: '#', icono: 'yt' },
  ],
}
