import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import Pic from '@/components/Pic'
import AgeGuide from '@/components/AgeGuide'
import CtaBand from '@/components/CtaBand'
import Separator from '@/components/Separator'
import { photo, services } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata: Metadata = pageMeta({
  title: 'Servicios · Cumpleaños, comuniones y bodas',
  description:
    'Cumpleaños temáticos, comuniones, Spa Tati’s, monitores, bodas y decoración con globos en Sevilla. Montaje y recogida incluidos, propuesta a tu medida.',
  path: '/servicios',
  image: '/og-image.jpg',
})

const extras = [
  { title: 'Fotomatón', text: 'Fotos al momento con atrezo a juego con la temática, para que los invitados se lleven recuerdo.', icon: 'camera' },
  { title: 'Mini feria', text: 'Casetas de juegos con premios: pesca de patitos, tiro al bote y más, como en la feria de verdad.', icon: 'tent' },
  { title: 'Glitter bar', text: 'Purpurina, gemas y pintacaras con diseños muy coloridos. Arrasa en comuniones y cumpleaños.', icon: 'sparkle' },
  { title: 'Fortnite en vivo', text: 'Retos, pruebas y bailes del juego para los de 10 a 12 años. Nada de juegos de peques.', icon: 'target' },
  { title: 'Talleres creativos', text: 'Bolsas de tela con su nombre, pulseras, galletas… cada niño se lleva lo que ha hecho.', icon: 'brush' },
  { title: 'Juegos gigantes', text: 'Cuatro en raya gigante, paracaídas de colores y juegos de agua para las fiestas de verano.', icon: 'grid' },
]

function Icon({ name }: { name: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<string, React.ReactNode> = {
    camera: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" {...p} />
        <circle cx="12" cy="13.5" r="3.5" {...p} />
        <path d="M8.5 7l1.5-3h4l1.5 3" {...p} />
      </>
    ),
    tent: <path d="M3 20h18M5 20l7-15 7 15M12 5v15M9 20l3-5 3 5" {...p} />,
    sparkle: <path d="M12 3c.5 4.6 3.9 8 8.5 8.5-4.6.5-8 3.9-8.5 8.5-.5-4.6-3.9-8-8.5-8.5C8.1 11 11.5 7.6 12 3z" {...p} />,
    target: (
      <>
        <circle cx="12" cy="12" r="8.5" {...p} />
        <circle cx="12" cy="12" r="4.5" {...p} />
        <circle cx="12" cy="12" r="1" {...p} />
      </>
    ),
    brush: <path d="M14.5 4.5l5 5-8 8H6.5v-5l8-8zM4 21h7" {...p} />,
    grid: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" {...p} />
        <circle cx="8.5" cy="8.5" r="1.6" {...p} />
        <circle cx="15.5" cy="8.5" r="1.6" {...p} />
        <circle cx="8.5" cy="15.5" r="1.6" {...p} />
        <circle cx="15.5" cy="15.5" r="1.6" {...p} />
      </>
    ),
  }
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        image={photo('comunion-mesa-dulce-futbol').src}
        alt={photo('comunion-mesa-dulce-futbol').alt}
        eyebrow="Servicios"
        lines={[
          'Todo lo que',
          <>
            <em>necesitas</em>, en un
          </>,
          'solo equipo',
        ]}
        text="Decoración, animación y coordinación para cumpleaños, comuniones, bodas y cualquier fecha que merezca celebrarse en Sevilla."
        position="50% 45%"
      />

      <section className="section">
        <span className="watermark watermark--right" aria-hidden="true">
          fiesta
        </span>
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Cómo lo hacemos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Cada propuesta es a medida. Te decimos qué merece la pena según la edad de tu peque, el espacio y lo que quieres
                conseguir, y nos adaptamos a tu presupuesto. El montaje y la recogida van siempre incluidos.
              </p>
            </Reveal>
          </div>
          <div className="svc-detail-list">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className={`svc-detail${i % 2 ? ' svc-detail--flip' : ''}`}>
                <Reveal variant="scale-in">
                  <Pic
                    className={`svc-detail__img ${i % 2 ? 'arch' : ''}`}
                    src={s.image}
                    alt={`${s.title} por Eventos Tati's en Sevilla`}
                    sizes="(min-width: 900px) 45vw, 100vw"
                  />
                </Reveal>
                <div>
                  <Reveal>
                    <span className="svc-detail__num">0{i + 1}</span>
                    <span className="svc-card__kicker">{s.kicker}</span>
                    <h2 className="title">{s.title}</h2>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p>{s.longDescription}</p>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <ul className="checks">
                      {s.includes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Separator image={photo('granja-zenon-photocall').src} alt={photo('granja-zenon-photocall').alt} position="50% 35%">
        <p className="separator__quote">
          Primero pensamos en <em>tu peque</em>, después en la decoración.
        </p>
      </Separator>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <Line width="5rem" />
            <Reveal>
              <h2 className="title">
                Servicios <em>exclusivos</em> para sumar
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">Combínalos con cualquier celebración. Son los que más piden en comuniones y cumpleaños.</p>
            </Reveal>
          </div>
          <ul className="extras">
            {extras.map((x, i) => (
              <Reveal as="li" key={x.title} index={i} className="extra">
                <Icon name={x.icon} />
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--gingham">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <h2 className="title" style={{ background: 'var(--color-bg)', display: 'inline-block', padding: '0.4rem 0.8rem', borderRadius: '1rem' }}>
                Guía por <em>edades</em>
              </h2>
            </Reveal>
          </div>
          <AgeGuide />
        </div>
      </section>

      <CtaBand
        title={
          <>
            Cuéntanos la edad y la <em>fecha</em>
          </>
        }
        text="Con esos dos datos ya podemos recomendarte qué funciona mejor. Te respondemos con una propuesta a medida."
      />
    </>
  )
}
