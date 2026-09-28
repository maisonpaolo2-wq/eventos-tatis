import Image from 'next/image'

type Props = { src: string; alt: string; className?: string; sizes?: string; priority?: boolean; position?: string }

// Contenedor con forma (arco, círculo, esquinas) + next/image en modo fill
export default function Pic({ src, alt, className = '', sizes = '(min-width: 900px) 50vw, 100vw', priority, position }: Props) {
  return (
    <div className={`pic ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={position ? { objectPosition: position } : undefined} />
    </div>
  )
}
