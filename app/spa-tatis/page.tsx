import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import Pic from '@/components/Pic'
import CtaBand from '@/components/CtaBand'
import Filmstrip from '@/components/Filmstrip'
import { photo } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata: Metadata = pageMeta({
  title: "Spa Tati's · Cumpleaños spa para niñas y niños",
  description:
    "Spa Tati's en Sevilla: cumpleaños spa con albornoces, mascarillas, manicura y relax para peques desde 5 años. Montamos el rincón completo en tu casa o salón.",
  path: '/spa-tatis',
})

const ritual = [
  { title: 'Bienvenida', text: 'Cada peque recibe su albornoz y su diadema. Desde ese momento, el spa es suyo.' },
  { title: 'Mascarilla y cuidado', text: 'Mascarillas suaves, cremitas y toallitas templadas en su cuenco, en una mesa baja montada para ellos.' },
  { title: 'Manicura y maquillaje', text: 'Uñas de colores y maquillaje ligero pensado para piel infantil. Nada que no se quite con agua.' },
  { title: 'Momento relax', text: 'Antifaz, cojines y unos minutos de música suave, como en un spa de verdad.' },
  { title: 'Foto final', text: 'Salen del spa “muy guapas” y lo celebramos con una foto de grupo en el rincón decorado.' },
]

export default function SpaPage() {
  return (
    <>
      <PageHero
        image={photo('spa-rincon-mesa').src}
        alt={photo('spa-rincon-mesa').alt}
        eyebrow="El cumpleaños que ellos piden repetir"
        lines={[
          <>
            Spa <em>Tati&apos;s</em>
          </>,
        ]}
        text="Un rincón spa completo, montado para que cada peque se sienta en un lugar solo para ellos."
        position="50% 40%"
      />

      <section className="section">
        <div className="container spa__grid">
          <div>
            <Reveal>
              <span className="eyebrow">Todo lo que necesitas saber</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Si buscas algo que haga sentir <em>especial</em> a tu peque
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                El Spa Tati&apos;s nació en nuestras fiestas como un rincón más y se convirtió en el servicio estrella. Lo montamos
                completo: mesa baja con cuencos y toallas, perchero de albornoces, estantería de cremas, cojines en el suelo y globos
                en crema y rosa empolvado.
              </p>
              <p className="muted">
                Pensado para peques a partir de 5 años. Nos adaptamos al número de invitados y al espacio: casa, jardín o salón.
              </p>
            </Reveal>
            <ul className="kid-quotes">
              {['Ha sido muy divertido maquillarnos', 'Hemos quedado muy guapas', "Quiero el Spa Tati's para mi cumpleaños", 'El mejor cumpleaños que he tenido'].map(
                (q, i) => (
                  <Reveal as="li" key={q} index={i}>
                    “{q}”
                  </Reveal>
                ),
              )}
            </ul>
          </div>
          <div className="spa__media">
            <Reveal variant="scale-in">
              <Pic className="arch spa__main" src={photo('globos-crema-tati-taburete').src} alt={photo('globos-crema-tati-taburete').alt} sizes="(min-width: 900px) 40vw, 100vw" />
            </Reveal>
            <Reveal variant="scale-in" delay={0.2}>
              <Pic className="spa__second" src={photo('spa-relax-antifaces').src} alt={photo('spa-relax-antifaces').alt} sizes="(min-width: 900px) 25vw, 60vw" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <span className="watermark watermark--right" aria-hidden="true">
          relax
        </span>
        <div className="container process">
          <div className="process__head">
            <Line width="5rem" />
            <Reveal>
              <h2 className="title">
                El ritual, paso a <em>paso</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">Una monitora por cada grupo pequeño, para que nadie espere demasiado su turno.</p>
            </Reveal>
          </div>
          <ol className="steps">
            {ritual.map((s, i) => (
              <Reveal as="li" key={s.title} index={i} className="step">
                <span className="step__num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Más momentos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Detalles que <em>suman</em>
              </h2>
            </Reveal>
          </div>
        </div>
        <Filmstrip
          photos={[
            photo('spa-rincon-mesa'),
            photo('pintacaras-neon'),
            photo('globos-rosa-oro-arco'),
            photo('taller-comunion-bolsas'),
            photo('spa-relax-antifaces'),
          ]}
        />
      </section>

      <CtaBand
        title={
          <>
            ¿Reservamos su <em>spa</em>?
          </>
        }
        text="Dinos la fecha, cuántos peques serán y la edad. Te enviamos la propuesta del Spa Tati's con todo incluido."
      />
    </>
  )
}
