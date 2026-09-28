import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Pic from '@/components/Pic'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { faqs, photo, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata: Metadata = pageMeta({
  title: 'Contacto y reservas',
  description:
    'Reserva tu cumpleaños, comunión, boda o Spa Tati’s en Sevilla y provincia. Escríbenos por WhatsApp o formulario y te enviamos una propuesta a medida.',
  path: '/contacto',
})

export default function ContactoPage() {
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <>
      <PageHero
        image={photo('globos-crema-abrazo').src}
        alt={photo('globos-crema-abrazo').alt}
        eyebrow="Contacto y reservas"
        lines={[
          'Cuéntanos qué',
          <>
            <em>celebras</em>
          </>,
        ]}
        text="Te respondemos con una propuesta a medida. Cuanta más información nos des, más afinada será."
        position="50% 30%"
      />

      <section className="section">
        <div className="container contact-page">
          <div>
            <Reveal>
              <span className="eyebrow">Formulario</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Pide tu <em>propuesta</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">Fecha, edad del peque y número de invitados son los tres datos que más nos ayudan.</p>
            </Reveal>
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <Reveal variant="scale-in">
              <Pic className="arch contact-aside__photo" src={photo('tati-estudio-gingham').src} alt={photo('tati-estudio-gingham').alt} sizes="(min-width: 900px) 35vw, 100vw" />
            </Reveal>
            <Reveal className="contact-card">
              <h3>Escríbenos directamente</h3>
              <ul>
                <li>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp · reservas
                  </a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                    Instagram {siteConfig.instagram}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
              </ul>
            </Reveal>
            <Reveal className="contact-card">
              <h3>Zona de cobertura</h3>
              <p className="small muted">Sevilla capital y provincia. Para otras zonas de Andalucía, consúltanos.</p>
              <ul className="chips">
                {siteConfig.locations.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--surface" id="preguntas">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Preguntas frecuentes</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Antes de <em>reservar</em>
              </h2>
            </Reveal>
          </div>
          <div className="faq__list">
            {faqs.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>{f.q}</summary>
                <p className="muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
