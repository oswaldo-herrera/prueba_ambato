interface Props {
  texto?: string
  className?: string
}

export default function BolaBillar({ texto = 'J', className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="esfera" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#3a3f6b" />
          <stop offset="55%" stopColor="#21243D" />
          <stop offset="100%" stopColor="#0d0f1f" />
        </radialGradient>
        <radialGradient id="brillo" cx="40%" cy="30%" r="40%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="circulo" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </radialGradient>
      </defs>

      {/* Sombra */}
      <ellipse cx="52" cy="96" rx="28" ry="5" fill="black" opacity="0.25" />

      {/* Esfera principal */}
      <circle cx="50" cy="50" r="46" fill="url(#esfera)" />

      {/* Brillo superior */}
      <circle cx="50" cy="50" r="46" fill="url(#brillo)" />

      {/* Círculo blanco central */}
      <ellipse cx="50" cy="52" rx="22" ry="20" fill="url(#circulo)" transform="rotate(-12 50 52)" />

      {/* Texto: J o 63 */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize={texto.length === 1 ? '22' : '16'}
        fill="#C9A84C"
        transform="rotate(-12 50 58)"
        style={{ letterSpacing: texto.length > 1 ? '-1px' : '0' }}
      >
        {texto}
      </text>

      {/* Reflejo inferior */}
      <ellipse cx="62" cy="72" rx="8" ry="4" fill="white" opacity="0.07" transform="rotate(-20 62 72)" />
    </svg>
  )
}
