import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Pic from '@/components/Pic'
import { waLink } from '@/components/WhatsAppButton'
import { photo } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Gracias por escribirnos',
    description:
      'Hemos recibido tu consulta en Eventos Tati’s. Te respondemos muy pronto con una propuesta para tu celebración en Sevilla. Mientras, mira nuestro portfolio.',
    path: '/gracias',
  }),
  robots: { index: false, follow: true },
}

export default function GraciasPage() {
  return (
    <>
      <PageHero
        eyebrow="Mensaje recibido"
        lines={[
          '¡Gracias!',
          <>
            Ya estamos <em>pensando</em>
          </>,
        ]}
        text="Te respondemos muy pronto con una propuesta. Si es urgente, escríbenos por WhatsApp."
      />
      <section className="section">
        <div className="container about__grid">
          <Reveal variant="scale-in">
            <Pic className="arch about__photo" src={photo('globos-crema-abrazo').src} alt={photo('globos-crema-abrazo').alt} sizes="(min-width: 900px) 50vw, 100vw" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="title">
                Mientras tanto, <em>inspírate</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">Mira fiestas que ya hemos montado o descubre el Spa Tati&apos;s, el favorito de las peques.</p>
            </Reveal>
            <Reveal delay={0.16} className="btn-row">
              <Link href="/portfolio" className="btn btn--solid">
                Ver portfolio
              </Link>
              <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <Link href="/" className="btn">
                Volver al inicio
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
