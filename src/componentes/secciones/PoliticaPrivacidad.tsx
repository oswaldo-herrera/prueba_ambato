interface Props {
  onCerrar: () => void
}

export default function PoliticaPrivacidad({ onCerrar }: Props) {
  return (
    <div className="fixed inset-0 z-[250] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">

        {/* Cabecera */}
        <div className="bg-azul px-8 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="font-titulo font-black text-white text-lg leading-tight">
              Política de Privacidad y Protección de Datos Personales
            </h1>
            <p className="text-oro text-xs mt-0.5">Javier Altamirano — Ambato 2026</p>
          </div>
          <button
            onClick={onCerrar}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-oro text-white flex items-center justify-center transition-all duration-200 text-lg flex-shrink-0 ml-4"
          >
            ✕
          </button>
        </div>

        {/* Contenido scrollable */}
        <div className="overflow-y-auto px-8 py-8 text-gray-700 text-sm leading-relaxed space-y-6">

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">1. Introducción</h2>
            <p>En cumplimiento de la Constitución de la República del Ecuador, la Ley Orgánica de Protección de Datos Personales (LOPDP) y demás normativa aplicable, el presente sitio web establece su Política de Privacidad con el propósito de informar a los usuarios sobre la recolección, uso, almacenamiento, protección y tratamiento de sus datos personales.</p>
            <p className="mt-2">La protección de la información personal de nuestros visitantes, simpatizantes, colaboradores, voluntarios y ciudadanos constituye una prioridad permanente. </p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">2. Responsable del Tratamiento de Datos</h2>
            <ul className="space-y-1 text-gray-600">
              <li><span className="font-semibold text-azul">Nombre:</span> Francisco Javier Altamirano Sánchez</li>
              <li><span className="font-semibold text-azul">Cargo:</span> PreCandidato a la Alcaldía de Ambato 2026</li>
              <li><span className="font-semibold text-azul">Sitio Web:</span> https://javieraltamirano.org/</li>
              <li><span className="font-semibold text-azul">Correo:</span> yoporambato@gmail.com</li>
              <li><span className="font-semibold text-azul">Dirección:</span> Ambato, Tungurahua, Ecuador</li>
              <li><span className="font-semibold text-azul">Delegado de Protección de Datos Personales (DPD):</span> Juan Fidel Herrera Sánchez</li>
            </ul>
            <p className="mt-2">El responsable del tratamiento garantiza que los datos personales serán tratados de forma lícita, leal, transparente y segura.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">3. Datos Personales que Podemos Recopilar</h2>
            <p className="mb-2">Podemos recopilar la siguiente información cuando el usuario interactúa voluntariamente con nuestro sitio web:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Nombres y apellidos</li>
              <li>Número de identificación</li>
              <li>Correo electrónico</li>
              <li>Número telefónico</li>
              <li>Ciudad o provincia de residencia</li>
              <li>Parroquia</li>
              <li>Información proporcionada en formularios de contacto</li>
              <li>Opiniones, sugerencias y propuestas ciudadanas</li>
              <li>Información técnica de navegación (IP, navegador, dispositivo, cookies y estadísticas de uso)</li>
            </ul>
            <br/>
            <p>Este sitio web no está dirigido a niños, niñas o adolescentes. En caso de que un menor de edad proporcione datos personales a través de los formularios disponibles, dicho tratamiento únicamente se realizará con el consentimiento previo, expreso e informado de su representante legal, conforme a lo establecido en la Ley Orgánica de Protección de Datos Personales.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">4. Finalidad del Tratamiento</h2>
            <p className="mb-2">Los datos personales recopilados podrán ser utilizados para:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Atender solicitudes, consultas o comentarios ciudadanos</li>
              <li>Enviar información relacionada con actividades públicas, comunitarias o políticas</li>
              <li>Gestionar registros para eventos, reuniones o actividades ciudadanas</li>
              <li>Elaborar estadísticas y análisis de participación ciudadana</li>
              <li>Mejorar la experiencia de navegación del sitio web</li>
              <li>Cumplir obligaciones legales y regulatorias aplicables</li>
            </ul>
            <p className="mt-2">En ningún caso se comercializarán, venderán o cederán datos personales para fines distintos a los aquí establecidos sin autorización expresa del titular.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">5. Base Jurídica para el Tratamiento</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>El consentimiento libre, específico, informado e inequívoco otorgado por el titular</li>
              <li>El cumplimiento de obligaciones legales</li>
              <li>El interés legítimo relacionado con actividades de comunicación y participación ciudadana permitidas por la legislación ecuatoriana</li>
            </ul>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">6. Conservación de los Datos</h2>
            <p>Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con las finalidades descritas en esta política o mientras exista una obligación legal que así lo requiera.</p>
            <p>En particular, los datos recopilados con fines de campaña o participación electoral serán conservados como máximo hasta doce (12) meses después de concluido el proceso electoral o la finalidad para la cual fueron recabados, salvo que exista una obligación legal que justifique un plazo distinto.</p>
            <p className="mt-2">Posteriormente serán eliminados, anonimizados o bloqueados conforme a la normativa vigente.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">7. Derechos de los Titulares</h2>
            <p className="mb-2">De conformidad con la Ley Orgánica de Protección de Datos Personales, los titulares podrán ejercer los siguientes derechos:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Acceso</li>
              <li>Rectificación y actualización</li>
              <li>Eliminación o supresión</li>
              <li>Oposición al tratamiento</li>
              <li>Portabilidad de datos</li>
              <li>Suspensión del tratamiento</li>
              <li>Revocatoria del consentimiento otorgado</li>
            </ul>
            <p className="mt-2">Para ejercer cualquiera de estos derechos, el titular podrá enviar una solicitud al correo electrónico: <span className="text-oro font-semibold">yoporambato@gmail.com</span></p>
            <br />
            <p>El responsable del tratamiento atenderá la solicitud en un plazo máximo de quince (15) días, el cual podrá prorrogarse, de manera justificada, por un plazo adicional de hasta la mitad del término original (siete días y medio), informando oportunamente al titular sobre dicha prórroga y sus motivos.</p>
            <br />
            <p>En caso de que el titular considere que su solicitud no fue atendida adecuadamente o dentro de los plazos señalados, podrá presentar su reclamo ante la Superintendencia de Protección de Datos Personales (SPDP), autoridad de control en esta materia en el Ecuador, conforme a los mecanismos previstos en la Ley Orgánica de Protección de Datos Personales y su Reglamento.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">8. Seguridad de la Información</h2>
            <p>Implementamos medidas técnicas, administrativas y organizativas razonables para proteger la información personal contra pérdida, acceso no autorizado, alteración, divulgación o destrucción.</p>
            <p className="mt-2">No obstante, ningún sistema tecnológico es completamente invulnerable, por lo que no se puede garantizar seguridad absoluta.</p>
            <br />
            <p>El uso indebido o la revelación no autorizada de datos personales puede acarrear, además de las sanciones administrativas previstas en la Ley Orgánica de Protección de Datos Personales, responsabilidad penal conforme a las disposiciones del Código Orgánico Integral Penal relativas a delitos contra la intimidad.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">9. Uso de Cookies</h2>
            <p className="mb-2">Este sitio puede utilizar cookies y tecnologías similares para:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Mejorar la experiencia del usuario</li>
              <li>Analizar tráfico y comportamiento de navegación</li>
              <li>Optimizar el funcionamiento del portal</li>
            </ul>
            <p className="mt-2">El usuario podrá configurar su navegador para rechazar o eliminar cookies cuando lo considere pertinente.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">10. Transferencia de Datos</h2>
            <p className="mb-2">Los datos personales no serán compartidos con terceros, salvo:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Cuando exista autorización expresa del titular</li>
              <li>Por requerimiento legal o judicial</li>
              <li>Cuando sea necesario para la prestación de servicios tecnológicos contratados que cumplan con la normativa ecuatoriana de protección de datos</li>
            </ul>
            <br />
            <p>Este sitio web puede utilizar servicios de alojamiento (hosting), analítica u otras herramientas tecnológicas provistas por proveedores ubicados fuera del territorio ecuatoriano, lo que puede implicar una transferencia internacional de datos personales. En dichos casos, se adoptarán las garantías adecuadas exigidas por el Reglamento General a la Ley Orgánica de Protección de Datos Personales, a fin de asegurar un nivel de protección equivalente al previsto en la normativa ecuatoriana.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">11. Tratamiento de Datos en el Contexto Electoral</h2>
            <p>El tratamiento de datos personales realizado a través de este sitio web también se sujeta a lo dispuesto en la Ley Orgánica Electoral y de Organizaciones Políticas (Código de la Democracia), en lo relativo al uso de información de los ciudadanos para fines de propaganda, difusión de propuestas y demás actividades propias de la campaña electoral.
               Los datos recopilados durante el proceso electoral no serán utilizados, una vez concluido dicho proceso, para finalidades distintas a las informadas en esta política, salvo que se cuente con una nueva autorización expresa del titular o exista una obligación legal que lo permita.
            </p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">12. Modificaciones a esta Política</h2>
            <p>Nos reservamos el derecho de modificar la presente Política de Privacidad cuando resulte necesario para adaptarla a cambios legales, regulatorios o tecnológicos. Las modificaciones serán publicadas oportunamente en este sitio web.</p>
          </section>

          <section>
            <h2 className="font-titulo font-bold text-azul text-base mb-2">13. Contacto</h2>
            <ul className="space-y-1 text-gray-600">
              <li><span className="font-semibold text-azul">Correo:</span> yoporambato@gmail.com</li>
              <li><span className="font-semibold text-azul">Teléfono:</span> 963 197 900</li>
              <li><span className="font-semibold text-azul">Sitio Web:</span> https://javieraltamirano.org/</li>
            </ul>
            <p className="mt-2 text-gray-500 text-xs">Última actualización: junio 2026</p>
          </section>

          {/* Cierre */}
          <div className="border-t border-gray-100 pt-6">
            <p className="text-azul/70 italic text-center text-sm">
              "La privacidad y la protección de los datos personales son derechos fundamentales que respetamos y protegemos en todas nuestras actividades de comunicación y participación ciudadana."
            </p>
          </div>
        </div>

        {/* Pie del modal */}
        <div className="border-t border-gray-100 px-8 py-4 flex justify-end flex-shrink-0 bg-gray-50">
          <button
            onClick={onCerrar}
            className="bg-azul hover:bg-azul-claro text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
