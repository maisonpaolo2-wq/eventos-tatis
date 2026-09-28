import Link from 'next/link'
import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { waLink } from './WhatsAppButton'

type Props = { title?: ReactNode; text?: string }

// Tarjeta crema sobre vichy salvia: cierra las páginas hacia WhatsApp o contacto
export default function CtaBand({
  title = (
    <>
      ¿Hablamos de <em>vuestra</em> celebración?
    </>
  ),
  text = 'Déjalo en nuestras manos. Escríbenos con la fecha y la edad de tu peque y te preparamos una propuesta a medida.',
}: Props) {
  return (
    <section className="section section--gingham cta-band">
      <div className="container">
        <div className="cta-band__card">
          <Reveal>
            <span className="eyebrow eyebrow--center">Reservas</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title">{title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="muted cta-band__text">{text}</p>
          </Reveal>
          <Reveal delay={0.24} className="btn-row btn-row--center">
            <a href={waLink()} className="btn btn--solid" target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
            <Link href="/contacto" className="btn">
              Formulario
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
