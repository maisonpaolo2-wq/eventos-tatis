import Image from 'next/image'
import type { ReactNode } from 'react'
import HeroTitle from './HeroTitle'
import Reveal from './Reveal'

type Props = {
  image?: string
  alt?: string
  eyebrow: string
  lines: ReactNode[]
  text?: string
  position?: string
}

// Con foto: cabecera a sangre. Sin foto: titular editorial en tarjeta crema sobre vichy.
export default function PageHero({ image, alt = '', eyebrow, lines, text, position }: Props) {
  if (!image) {
    return (
      <section className="page-hero page-hero--editorial">
        <div className="container page-hero__content">
          <div className="page-hero__card">
            <Reveal variant="fade-in">
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <HeroTitle lines={lines} />
            {text && (
              <Reveal delay={0.5}>
                <p className="lead">{text}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <Image src={image} alt={alt} fill priority sizes="100vw" style={position ? { objectPosition: position } : undefined} />
      </div>
      <div className="container page-hero__content">
        <Reveal variant="fade-in">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
        </Reveal>
        <HeroTitle lines={lines} />
        {text && (
          <Reveal delay={0.5}>
            <p>{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
