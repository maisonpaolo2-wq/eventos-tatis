import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import Pic from '@/components/Pic'
import Separator from '@/components/Separator'
import CtaBand from '@/components/CtaBand'
import { photo, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata: Metadata = pageMeta({
  title: 'Sobre mí · Tati, maestra de Infantil',
  description:
    'Soy Tati, maestra de Infantil en Sevilla. Dejé el aula para dedicarme al 100% a Eventos Tati’s: fiestas pensadas por edades, con estética cuidada y monitoras.',
  path: '/sobre-mi',
})

const values = [
  { title: 'Mirada de maestra', text: 'Pensamos cada actividad según la edad: cuánto dura su atención, qué les emociona y qué les agobia.' },
  { title: 'Estética cuidada', text: 'Paletas suaves, globos orgánicos, vichy y materiales naturales. Bonito para la foto y para vivirlo.' },
  { title: 'Seguridad y cariño', text: 'Monitoras con experiencia que conocen a los niños por su nombre y vigilan que todos estén bien.' },
  { title: 'Tú disfrutas', text: 'Montamos antes, recogemos después. Tu único trabajo es disfrutar de la celebración.' },
]

export default function SobreMiPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mí"
        lines={[
          'Hola, soy',
          <>
            <em>Tati</em>
          </>,
        ]}
        text="Maestra de Infantil, organizadora de eventos y la persona que estará pendiente de cada detalle de tu celebración."
      />

      <section className="section">
        <span className="watermark watermark--left" aria-hidden="true">
          Tati
        </span>
        <div className="container about__grid">
          <Reveal variant="scale-in">
            <Pic
              className="arch about__photo about__photo--tall"
              src={photo('tati-retrato-puf').src}
              alt={photo('tati-retrato-puf').alt}
              sizes="(min-width: 900px) 55vw, 100vw"
              priority
            />
          </Reveal>
          <div className="about__text">
            <Reveal>
              <span className="eyebrow">Mi historia</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Del aula a las <em>fiestas</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>{siteConfig.bio}</p>
              <p>
                Durante un tiempo compaginé el aula con los eventos. Las familias repetían y me recomendaban, y llegó el momento de
                elegir. Tomé una de las decisiones más importantes de mi vida: dejar todo lo demás y dedicarme al 100% a Eventos
                Tati&apos;s.
              </p>
              <p className="muted">
                No ha sido fácil. Implica muchas responsabilidades y días enteros de montaje, pero cuando ves la cara de un peque al
                entrar en su fiesta, sabes que merece la pena.
              </p>
              <p className="about__sig">Tati</p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator image={photo('globos-crema-equipo-brazos').src} alt={photo('globos-crema-equipo-brazos').alt} position="50% 30%">
        <p className="separator__quote">
          Cada evento lo cuido como si fuera el de mi <em>familia</em>.
        </p>
      </Separator>

      <section className="section section--surface">
        <div className="container process">
          <div className="process__head">
            <Line width="5rem" />
            <Reveal>
              <h2 className="title">
                Lo que nos <em>define</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">Cuatro cosas que no negociamos en ningún evento, sea un cumpleaños en casa o una boda.</p>
            </Reveal>
          </div>
          <ul className="values">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} index={i} className="value">
                <span className="value__n">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container about__grid about__grid--flip">
          <div className="photo-pair">
            <Reveal variant="scale-in">
              <Pic className="arch" src={photo('granja-montaje-equipo').src} alt={photo('granja-montaje-equipo').alt} sizes="(min-width: 900px) 25vw, 50vw" />
            </Reveal>
            <Reveal variant="scale-in" delay={0.15}>
              <Pic className="" src={photo('boda-candy-bar-montaje').src} alt={photo('boda-candy-bar-montaje').alt} sizes="(min-width: 900px) 25vw, 50vw" />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <span className="eyebrow">El equipo</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Manos que <em>montan</em>, ojos que cuidan
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Detrás de cada fiesta hay un equipo que carga la furgoneta, hincha globos a primera hora y coloca el último cartel
                antes de que llegue nadie. Y durante el evento, monitoras que vienen del mundo educativo y saben tratar con niños.
              </p>
              <p className="muted">
                En bodas trabajamos igual: llegamos antes, montamos el candy bar o la zona infantil y lo recogemos cuando termina la
                fiesta, sin que tengas que pensar en nada.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
