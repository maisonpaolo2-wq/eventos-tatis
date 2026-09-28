// Firma "Eventos Tati's" como su logo de Instagram: palabra en serif + nombre caligráfico con destello
export function Sparkle({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5z" fill="currentColor" />
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="logo">
      <span className="logo__eventos">Eventos</span>
      <span className="logo__tatis">Tati&apos;s</span>
      <Sparkle size={12} className="logo__star" />
    </span>
  )
}
