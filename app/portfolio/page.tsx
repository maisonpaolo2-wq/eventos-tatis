import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import Filmstrip from '@/components/Filmstrip'
import CtaBand from '@/components/CtaBand'
import { photo, portfolio } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata: Metadata = pageMeta({
  title: 'Portfolio · Fiestas y eventos en Sevilla',
  description:
    'Galería de Eventos Tati’s: cumpleaños temáticos, comuniones, Spa Tati’s, candy bar de boda y arcos de globos en Sevilla. Mira cómo montamos cada fiesta.',
  path: '/portfolio',
})

const backstage = [
  photo('granja-hinchando-globos'),
  photo('granja-montaje-equipo'),
  photo('boda-candy-bar-montaje'),
  photo('sesion-suelo-risas'),
  photo('tati-estudio-gingham'),
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        image={photo('granja-zenon-molino-globos').src}
        alt={photo('granja-zenon-molino-globos').alt}
        eyebrow="Portfolio"
        lines={[
          'Fiestas que ya',
          <>
            son <em>recuerdo</em>
          </>,
        ]}
        text="Cumpleaños, comuniones, bodas y spas montados por nuestro equipo. Toca cualquier foto para verla en grande."
        position="50% 40%"
      />

      <section className="section">
        <div className="container">
          <div className="section-head section-head--row">
            <Reveal>
              <span className="eyebrow">{portfolio.length} momentos</span>
            </Reveal>
          </div>
          <Gallery photos={portfolio} />
        </div>
      </section>

      <section className="section section--surface" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Detrás del montaje</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Lo que no se ve <em>antes</em> de la fiesta
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">Furgoneta cargada, globos a primera hora y cada cartel en su sitio antes de que llegue el primer invitado.</p>
            </Reveal>
          </div>
        </div>
        <Filmstrip photos={backstage} />
      </section>

      <CtaBand
        title={
          <>
            ¿La próxima <em>foto</em> es la tuya?
          </>
        }
      />
    </>
  )
}
