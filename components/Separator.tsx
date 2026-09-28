import Image from 'next/image'
import type { ReactNode } from 'react'
import Reveal from './Reveal'

// Foto a sangre completa con velo salvia, rompe el ritmo entre secciones
export default function Separator({
  image,
  alt,
  position,
  children,
}: {
  image: string
  alt: string
  position?: string
  children?: ReactNode
}) {
  return (
    <section className="separator">
      <Reveal variant="scale-in" className="separator__media">
        <Image src={image} alt={alt} fill sizes="100vw" style={position ? { objectPosition: position } : undefined} />
      </Reveal>
      {children && (
        <div className="container separator__text">
          <Reveal>{children}</Reveal>
        </div>
      )}
    </section>
  )
}
