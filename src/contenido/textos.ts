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
    { frente: '/imagenes/new_images/16.jpeg',  reverso: '/imagenes/new_images/16_2.jpeg' },
    { frente: '/imagenes/new_images/izamba_2.png',  reverso: '/imagenes/new_images/izamba.png'  },
    { frente: '/imagenes/new_images/vehicular.jpeg',  reverso: '/imagenes/new_images/vehicular_2.jpeg' },
    { frente: '/imagenes/new_images/parque.jpg', reverso: '/imagenes/new_images/parque_2.jpeg'  },
    { frente: '/imagenes/new_images/musica.jpeg',  reverso: '/imagenes/new_images/musica_2.jpeg'  },
    { frente: '/imagenes/new_images/chibuleo.jpeg',  reverso: '/imagenes/new_images/chibuleo_2.jpeg'  },
    { frente: '/imagenes/new_images/quebrada.jpeg',  reverso: '/imagenes/new_images/quebrada_2.jpeg'  },
    { frente: '/imagenes/new_images/agua.jpeg', reverso: '/imagenes/new_images/agua_2.jpeg' },
  ],
  botonRendicion: {
    texto: 'Enlace a rendición de cuentas',
    href: 'https://ambato.gob.ec/rendicion-de-cuentas-2022/',
  },
  logros2: [
    {
      icono: '🚰',
      titulo: 'Restauración Patrimonial y Centro Cultural Casa de la Música',
      resumen: 'Centro Cultural – Riberas del Río Ambato',
      puntos: [
        'Restauración de edificación patrimonial, abandonada aproximadamente 70 años (antigua fábrica de botones, predio El Peral)',
        'Inversión de 1.3 millones USD: auditorio, museo de artistas ecuatorianos, biblioteca, talleres y sede de la Banda Municipal',
        'Entregado en 2023, recuperación de volumetría original sin impacto en la flora y fauna del ecosistema ribereño',
      ],
    },
    {
      icono: '🏥',
      titulo: 'Mercado Intercultural y Turístico del Pueblo Chibuleo',
      resumen: 'Parroquia Juan Benigno Vela – Vía Ambato-Guaranda',
      puntos: [
        'Financiado con crédito de ~4 millones USD del Banco de Desarrollo del Ecuador; obras entre 2021 y 2022',
        'Fachadas y cubiertas con iconografía ancestral del pueblo Chibuleo como hito de identidad cultural y turismo',
        'Áreas de comercio tecnificado, patio de comidas, guardería, estacionamientos y zona de comercialización de ganado menor',
      ],
    },
    {
      icono: '🤲',
      titulo: 'Estabilización Quebrada Los Gallinazos y Colector Pluvial del Parque Infantil de Atocha',
      resumen: 'Emergencia geotécnica e hidráulica – Parque Infantil de Atocha',
      puntos: [
        'Ductos cajón y colectores de hormigón armado para encauzar aguas lluvias de la cuenca hacia el Río Ambato',
        'Inversión global de 4 millones USD; intervención declarada emergencia por el COE Cantonal',
        'Reconstrucción total del Parque Infantil con barreras de contención y juegos de última generación',
      ],
    },
    {
      icono: '🛣️',
      titulo: 'Sistema de Agua Potable Chibuleo – San Francisco',
      resumen: 'Servicio básico rural – Parroquia Juan Benigno Vela',
      puntos: [
        'Inversión histórica de 3 millones USD para captación, conducción, tratamiento y distribución formal de agua potable',
        'Cobertura a todos los sectores periféricos rurales antes abastecidos por regadío o camiones tanqueros',
        'Incluye bloque administrativo para juntas de agua y mejoramiento integral de vías afectadas por el zanjeo',
      ],
    },
  ],
  logros: [
    {
      icono: '🏗️',
      titulo: 'Viaducto Subterráneo y Paso a Desnivel Huachi Chico',
      resumen: 'Avenidas Atahualpa y Julio Jaramillo',
      puntos: [
        'Conexión directa norte-sur bajo el eje de la Av. Atahualpa, eliminando cuellos de botella en la entrada sur del cantón',
        'Redondel en planta alta que distribuye flujo hacia Guaranda, Riobamba y calles internas, optimizando tiempos de viaje',
        'Premio Portoviejo 2022 al Mejor Proyecto Urbanístico del año; referente técnico nacional de movilidad',
      ],
    },
    {
      icono: '🎓',
      titulo: 'Viaducto Subterráneo de Izamba (Eje E35 – Av. Indoamérica)',
      resumen: 'Carretera Panamericana Norte',
      puntos: [
        '3.1 km de longitud; uno de los viaductos más largos e importantes de la zona central del Ecuador',
        'Conducto subterráneo para transporte interprovincial y de carga sin semáforos ni redondeles en el flujo principal',
        'Superficie priorizada al peatón: veredas amplias, pasos seguros, parterre central arborizado y conexión a Píllaro',
      ],
    },
    {
      icono: '💼',
      titulo: 'Centro de Revisión Técnica Vehicular (CRTV)',
      resumen: 'Infraestructura pública de seguridad vial',
      puntos: [
        '5 líneas automatizadas: motos, transporte público, pesados y 3 exclusivas para vehículos particulares',
        'Equipos de tercera generación homologados directamente por la Agencia Nacional de Tránsito (ANT)',
        'Complejo de 5.000–6.000 m² con bloque administrativo, agencia bancaria y zona integrada de ferias de vehículos',
      ],
    },
    {
      icono: '🌿',
      titulo: 'Parque del Deporte',
      resumen: 'Democratización del deporte y espacio público',
      puntos: [
        '7.000 m² con canchas de fútbol sintético, vóley, pádel, muros de escalada urbana y zonas de calistenia',
        'Primera pista de patinaje reglamentaria del cantón con medidas oficiales para alta competencia, abierta gratuitamente',
        'Paso peatonal continuo que une el Parque de las Flores con el Parque del Deporte sin interferencia vehicular',
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
    { frente: '/imagenes/new_images/20.jpeg', reverso: '/imagenes/new_images/20_2.jpeg' },
    { frente: '/imagenes/new_images/4_2.jpg',  reverso: '/imagenes/new_images/4.jpeg' },
    { frente: '/imagenes/new_images/musica_4.jpeg', reverso: '/imagenes/new_images/musica_3.jpeg' },
    { frente: '/imagenes/new_images/tenis.png', reverso: '/imagenes/new_images/tenis_2.png' },
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
