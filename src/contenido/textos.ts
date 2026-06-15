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
    { texto: '¿Quién es?',  href: '#quiensoy' },
    { texto: 'Trayectoria', href: '#trayectoria' },
    { texto: 'Logros',      href: '#logros' },
    { texto: 'Propuestas',  href: '#propuestas-nuevas' },
    { texto: 'Regístrate',  href: '#registro-backup' },
  ],
  botonPrincipal: {
    texto: 'Continua con Javier',
    href: '#registro',
  },
}

// ── SECCIÓN INICIO (HERO) ────────────────────────────────────
export const seccionInicio = {
  etiqueta: 'Continúo X Ambato',    // Texto pequeño arriba del título
  titulo: 'X un Ambato con ',    // Primera línea del título grande
  // Palabras que rotan en color oro — edítalas libremente
  titulosRotativos: [
    '+ Seguridad',
    '+ Empleo',
    '+ Salud',
  ],
  descripcion:
    'Construyamos juntos una ciudad más justa, con oportunidades reales para todos. Con experiencia, visión futura y compromiso ciudadano.',
  boton1: { texto: 'Videos', href: '#propuestas' },
  boton2: { texto: 'Regístrate aquí', href: '#registro-backup' },
  // IMAGEN: coloca tu foto en /public/imagenes/candidato.png
  imagenCandidato: '/imagenes/perfil_1.jpeg',
  imagenAlt: 'Fotografía del candidato',
  // Números destacados debajo del hero
  estadisticas: [
    { numero: '15+', descripcion: 'Años de experiencia' },
    { numero: '50K', descripcion: 'Vecinos comprometidos' },
    { numero: '63',  descripcion: 'Motivos para ganar' },
  ],
}

// ── SECCIÓN QUIÉN SOY ────────────────────────────────────────
export const seccionQuienSoy = {
  etiqueta: '',
  titulo: '¿Quién es',
  tituloDestacado: 'Javier Altamirano?',
  descripcion: '',
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
  imagen: '/imagenes/presidente.jpeg',
  imagenAlt: 'Candidato con la comunidad',
}

// ── SECCIÓN LOGROS 2019-2023 ─────────────────────────────────
export const seccionLogros = {
  etiqueta: 'Logros 2019-2023',
  titulo: 'Lo que ya',
  tituloDestacado: 'logramos',
  galeria: [
    { frente: '/imagenes/new_images/3.jpeg',  reverso: '/imagenes/new_images/10.jpeg' },
    { frente: '/imagenes/new_images/9.jpeg',  reverso: '/imagenes/new_images/4.jpeg'  },
    { frente: '/imagenes/new_images/5.jpeg',  reverso: '/imagenes/new_images/12.jpeg' },
    { frente: '/imagenes/new_images/15.jpeg', reverso: '/imagenes/new_images/7.jpeg'  },
    { frente: '/imagenes/new_images/8.jpeg',  reverso: '/imagenes/new_images/3.jpeg'  },
    { frente: '/imagenes/new_images/4.jpeg',  reverso: '/imagenes/new_images/9.jpeg'  },
    { frente: '/imagenes/new_images/7.jpeg',  reverso: '/imagenes/new_images/5.jpeg'  },
    { frente: '/imagenes/new_images/12.jpeg', reverso: '/imagenes/new_images/15.jpeg' },
  ],
  botonRendicion: {
    texto: 'Enlace a rendición de cuentas',
    href: 'https://ambato.gob.ec/rendicion-de-cuentas-2022/',
  },
  logros2: [
    {
      icono: '🚰',
      titulo: 'Casa de la Música',
      resumen: 'Acceso a servicios básicos para comunidades históricamente olvidadas.',
      puntos: [
        'Instalación de redes de agua potable en 6 comunidades rurales',
        'Mejoramiento de sistemas de saneamiento en barrios periféricos',
        'Gestión de tanques comunitarios para sectores sin cobertura',
      ],
    },
    {
      icono: '🏥',
      titulo: 'Mercado de Chibuleo',
      resumen: 'Atención médica de calidad para quienes más lo necesitan.',
      puntos: [
        'Más de 4.000 consultas médicas gratuitas entregadas',
        'Dotación de medicamentos a familias de escasos recursos',
        'Acuerdos con centros de salud para atención prioritaria',
      ],
    },
    {
      icono: '🤲',
      titulo: 'Quebrada los Gallinazos y Parque Infantil de Atocha',
      resumen: 'Programas directos de asistencia a grupos vulnerables.',
      puntos: [
        'Entrega de canastas básicas a más de 800 familias',
        'Programa de apoyo a adultos mayores en situación de riesgo',
        'Red de voluntarios para atención de emergencias locales',
      ],
    },
    {
      icono: '🛣️',
      titulo: 'Sistema de Agua Potable Chibuleo San Francisco',
      resumen: 'Vías y accesos mejorados para una ciudad más ágil.',
      puntos: [
        'Adoquinado y reparcheo en más de 8 km de vías urbanas',
        'Señalización vial renovada en zonas de alto flujo',
        'Gestión de rutas de transporte para sectores periféricos',
      ],
    },
  ],
  logros: [
    {
      icono: '🏗️',
      titulo: 'Paso a desnivel de Huachi Chico',
      resumen: 'Obras concretas que transformaron barrios y comunidades de Ambato.',
      puntos: [
        'Rehabilitación de vías en 12 barrios del sur de la ciudad',
        'Construcción del parque comunitario La Merced',
        'Mejoramiento del sistema de alcantarillado en zonas rurales',
      ],
    },
    {
      icono: '🎓',
      titulo: 'Paso a desnivel de Izamba',
      resumen: 'Inversión directa en la educación de niños y jóvenes ambateños.',
      puntos: [
        'Entrega de más de 2.000 kits escolares en zonas vulnerables',
        'Convenios con universidades para becas parciales locales',
        'Programas de alfabetización digital en parroquias rurales',
      ],
    },
    {
      icono: '💼',
      titulo: 'Centro de Revisión Técnica Vehicular CRTV',
      resumen: 'Apoyo directo a emprendedores y trabajadores de la ciudad.',
      puntos: [
        'Feria de emprendimiento con más de 300 negocios participantes',
        'Gestión de créditos accesibles para microempresarios',
        'Capacitaciones técnicas para más de 1.500 ciudadanos',
      ],
    },
    {
      icono: '🌿',
      titulo: 'Parque del Deporte',
      resumen: 'Acciones concretas por un Ambato más limpio y saludable.',
      puntos: [
        'Campaña de reforestación con 5.000 árboles plantados',
        'Brigadas médicas gratuitas en 20 comunidades',
        'Gestión de agua potable para sectores desatendidos',
      ],
    },
  ],
}

// ── SECCIÓN PROPUESTAS NUEVAS (antes de Trayectoria) ─────────
export const seccionPropuestasNuevas = {
  etiqueta: 'Propuestas y Compromisos',
  titulo: 'Lo que',
  tituloDestacado: 'lograremos',
  galeria: [
    { frente: '/imagenes/new_images/22.jpeg', reverso: '/imagenes/new_images/25.jpeg' },
    { frente: '/imagenes/new_images/2.jpeg',  reverso: '/imagenes/new_images/23.jpeg' },
    { frente: '/imagenes/new_images/20.jpeg', reverso: '/imagenes/new_images/24.jpeg' },
    { frente: '/imagenes/new_images/24.jpeg', reverso: '/imagenes/new_images/20.jpeg' },
  ],
  tarjetas: [
    {
      icono: '🏙️',
      titulo: 'Seguridad',
      resumen: 'La seguridad en Ambato puede fortalecerse mediante prevención del delito, control del espacio público y tecnología. Estas acciones deben ejecutarse conforme a las competencias establecidas por el COOTAD para los GAD.',
      puntos: [
        'Modernización de las Salas de Monitoreo e Integración con Inteligencia Artificial',
        'Recuperación y Activación Cultural/Económica de Espacios Públicos Críticos',
        'Programa de "Mercados Seguros" y Control de la Informalidad Comercial',
      ],
    },
    {
      icono: '🛡️',
      titulo: 'Salud',
      resumen: 'La salud en Ambato debe fortalecerse mediante la prevención y la mejora de los servicios locales. Aunque el MSP dirige el sistema de salud, el municipio cumple un papel importante a través del hospital municipal.',
      puntos: [
        'Unidades Médicas Móviles para Parroquias Rurales y Zonas Periféricas',
        'Construcción del Nuevo Hospital Municipal',
        'Programa Cantonal de Prevención y Manejo de la Desnutrición Crónica Infantil (DCI)',
      ],
    },
    {
      icono: '💡',
      titulo: 'Empleo',
      resumen: 'Tomando como referencia las competencias de desarrollo productivo local que el COOTAD otorga a los municipios, las propuestas estratégicas en materia de empleo y reactivación económica para el cantón:',
      puntos: [
        'Creación de una Incubadora y Aceleradora Municipal de Empresas',
        'Programa de Educación Técnica y Tecnológica Alineada a la Industria Local',
        'Modernización del Comercio Autónomo e Informal hacia el Empleo Formal',
      ],
    },
    {
      icono: '🌱',
      titulo: 'Movilidad',
      resumen: 'Para abordar la movilidad en Ambato se deben considerar sus desafíos particulares: la alta congestión en los "días de feria", la compleja topografía de la ciudad, la necesidad de conectar las parroquias rurales con el casco urbano y el acelerado crecimiento del parque automotor.',
      puntos: [
        'Plan Maestro de Movilidad',
        'Reordenamiento y Rediseño de Rutas de Transporte Público',
        'Caja Común',
      ],
    },
  ],
}

// ── SECCIÓN TRAYECTORIA ──────────────────────────────────────
export const seccionTrayectoria = {
  etiqueta: 'Trayectoria',
  titulo: 'Experiencia que',
  tituloDestacado: 'respalda',
  columna1: {
    titulo: 'Principales Cargos',
    items: [
      {
        titulo: 'Concejal en el Gobierno Municipal de Ambato en el periodo 2004-2008',
        descripcion:
          '',
      },
      {
        titulo: 'Decano de la Facultad de Jurisprudencia en la “Universidad Tecnológica Indoamérica”. Periodo 2011-2019',
        descripcion:
          '',
      },
      {
        titulo: 'Abogado Externo Banco de Guayaquil . Periodo 2013-2018',
        descripcion:
          '',
      },
      {
        titulo: 'Docente en la Facultad de Jurisprudencia en la “Universidad Técnica de Ambato”. Periodo 2013',
        descripcion:
          '',
      },
      {
        titulo: 'Abogado en Libre Ejercicio. Periodo 2023 - Actualidad',
        descripcion:
          '',
      },
      {
        titulo: 'Docente en la “Universidad Autonoma de los Andes ”. Periodo 2013',
        descripcion:
          '',
      },
      {
        titulo: 'Alcalde de Ambato Periodo 2019-2023',
        descripcion:
          '',
      },
    ],
  },
  columna2: {
    titulo: 'Preparación Profesional',
    items: [
      {
        titulo: 'Doctor en Jurisprudencia por la Universidad Central del Ecuador',
        descripcion:
          '',
      },
      {
        titulo: 'Maestría en Derecho Procesal "Universidad Andina Simón Bolivar" ',
        descripcion:
          '',
      },
      {
        titulo: 'Pendiente',
        descripcion:
          '',
      },
    ],
  },
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
  titulo: 'Ambato con',
  tituloDestacado: 'Javier',
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
  titulo: 'Únete a nuestro Canal de WhatsApp,',
  tituloDestacado: 'Información directa, eventos,actualizaciones',
  descripcion: '',
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
  descripcion: 'Seguridad, Salud y Empleo',
  // Derechos de autor — el año se actualiza automáticamente
  derechos: 'HERSA',
  enlacesRapidos: [
    { texto: '¿Quién es?',  href: '#quiensoy' },
    { texto: 'Trayectoria', href: '#trayectoria' },
    { texto: 'Logros',      href: '#logros' },
    { texto: 'Propuestas',  href: '#propuestas-nuevas' },
    { texto: 'Regístrate',  href: '#registro' },
  ],
  redesSociales: [
    // CAMBIA estos enlaces por tus redes reales
    { nombre: 'Facebook',  href: '#', icono: 'fb' },
    { nombre: 'Instagram', href: '#', icono: 'ig' },
    { nombre: 'Twitter/X', href: '#', icono: 'tw' },
    { nombre: 'YouTube',   href: '#', icono: 'yt' },
    { nombre: 'TikTok',   href: '#', icono: 'tt' },
  ],
}
