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
    { texto: 'Mi Historia',  href: '#quiensoy' },
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
  etiqueta: 'Yo continúo con Javier',    // Texto pequeño arriba del título
  titulo: 'Por un Ambato',    // Primera línea del título grande
  // Palabras que rotan en color oro — edítalas libremente
  titulosRotativos: [
    'justo',
    'seguro',
    'con alma',
    'con oportunidades',
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
  etiqueta: 'Mi Historia',
  titulo: '¿Quién es',
  tituloDestacado: 'Javier Altamirano?',
  descripcion: 'Origen, logros, aciertos y desaciertos',
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
  imagen: '/imagenes/sentado.jpeg',
  imagenAlt: 'Candidato con la comunidad',
}

// ── SECCIÓN LOGROS 2019-2023 ─────────────────────────────────
export const seccionLogros = {
  etiqueta: 'Logros 2019-2023',
  titulo: 'Lo que ya',
  tituloDestacado: 'logramos',
  galeria: [
    { frente: '/imagenes/gente.jpg',    reverso: '/imagenes/476431256_1158597422375233_2378425285877736878_n.jpg' },
    { frente: '/imagenes/abrazo.jpg',   reverso: '/imagenes/476386470_1158591599042482_587719789063592314_n.jpg' },
    { frente: '/imagenes/abrazo_1.jpg', reverso: '/imagenes/476805736_1158590762375899_8851990481937959008_n.jpg' },
    { frente: '/imagenes/calle.jpg',    reverso: '/imagenes/476009588_1158590439042598_5229177781056991096_n.jpg' },
    { frente: '/imagenes/abrazo_2.jpg', reverso: '/imagenes/476830910_1158590429042599_6701177877427897421_n.jpg' },
    { frente: '/imagenes/abrazo_4.jpg', reverso: '/imagenes/476774321_1158589355709373_2626562355904971872_n.jpg' },
    { frente: '/imagenes/hablando.jpg', reverso: '/imagenes/476382386_1158589519042690_4804614561289909979_n.jpg' },
    { frente: '/imagenes/trabajando.jpg', reverso: '/imagenes/476832443_1158587272376248_6435993229627634584_n.jpg' },
  ],
  botonRendicion: {
    texto: 'Enlace a rendición de cuentas',
    href: '#',
  },
  logros2: [
    {
      icono: '🚰',
      titulo: 'Casa de la música',
      resumen: 'Acceso a servicios básicos para comunidades históricamente olvidadas.',
      puntos: [
        'Instalación de redes de agua potable en 6 comunidades rurales',
        'Mejoramiento de sistemas de saneamiento en barrios periféricos',
        'Gestión de tanques comunitarios para sectores sin cobertura',
      ],
    },
    {
      icono: '🏥',
      titulo: 'Mercado de Chibuleo y Mercado de Pilahuin',
      resumen: 'Atención médica de calidad para quienes más lo necesitan.',
      puntos: [
        'Más de 4.000 consultas médicas gratuitas entregadas',
        'Dotación de medicamentos a familias de escasos recursos',
        'Acuerdos con centros de salud para atención prioritaria',
      ],
    },
    {
      icono: '🤲',
      titulo: 'Quebrada los gallinazos y Parque Infantil de Atocha',
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
    { frente: '/imagenes/476806618_1158581895710119_5687367754366581586_n.jpg', reverso: '/imagenes/476454570_1158581659043476_8860559930503311005_n.jpg' },
    { frente: '/imagenes/476145899_1157954529106189_6414210977516144070_n.jpg', reverso: '/imagenes/577051462_1364530098448630_1018775810050144370_n.jpg' },
    { frente: '/imagenes/476009971_1157948235773485_8728827498493728921_n.jpg', reverso: '/imagenes/casual.jpg' },
    { frente: '/imagenes/candidato.jpeg', reverso: '/imagenes/476832443_1158587272376248_6435993229627634584_n.jpg' },
  ],
  tarjetas: [
    {
      icono: '🏙️',
      titulo: 'Propuesta 1',
      resumen: 'Descripción breve de esta propuesta para Ambato.',
      puntos: [
        'Punto clave uno de la propuesta',
        'Punto clave dos de la propuesta',
        'Punto clave tres de la propuesta',
      ],
    },
    {
      icono: '🛡️',
      titulo: 'Propuesta 2',
      resumen: 'Descripción breve de esta propuesta para Ambato.',
      puntos: [
        'Punto clave uno de la propuesta',
        'Punto clave dos de la propuesta',
        'Punto clave tres de la propuesta',
      ],
    },
    {
      icono: '💡',
      titulo: 'Propuesta 3',
      resumen: 'Descripción breve de esta propuesta para Ambato.',
      puntos: [
        'Punto clave uno de la propuesta',
        'Punto clave dos de la propuesta',
        'Punto clave tres de la propuesta',
      ],
    },
    {
      icono: '🌱',
      titulo: 'Propuesta 4',
      resumen: 'Descripción breve de esta propuesta para Ambato.',
      puntos: [
        'Punto clave uno de la propuesta',
        'Punto clave dos de la propuesta',
        'Punto clave tres de la propuesta',
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
          'Especialización en Derecho Público y Constitucional. Participación en clínicas jurídicas de acceso a la justicia.',
      },
      {
        titulo: 'Decano de la Facultad de Jurisprudencia en la “Universidad Tecnológica Indoamérica”. Periodo 2014-2019',
        descripcion:
          'Enfocada en modernización del Estado, presupuesto participativo y rendición de cuentas a la ciudadanía.',
      },
      {
        titulo: 'Alcalde de Ambato Periodo 2019-2023',
        descripcion:
          'Descripción del tercer ítem de la columna 1. Edita este texto en textos.ts.',
      },
    ],
  },
  columna2: {
    titulo: 'Preparación Profesional',
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
  titulo: 'Yo continúo con',
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
  tituloDestacado: 'y recibe actualizaciones directas, eventos y novedades, “Continúa con Javier”',
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
  descripcion: 'Continuamos con el desarrollo de Ambato Tungurahua.',
  // Derechos de autor — el año se actualiza automáticamente
  derechos: 'HERSA',
  enlacesRapidos: [
    { texto: 'Mi Historia',  href: '#quiensoy' },
    { texto: 'Trayectoria', href: '#trayectoria' },
    { texto: 'Propuestas',  href: '#propuestas-nuevas' },
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
