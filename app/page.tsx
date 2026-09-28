import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Pic from '@/components/Pic'
import Separator from '@/components/Separator'
import Gallery from '@/components/Gallery'
import AgeGuide from '@/components/AgeGuide'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { photo, portfolio, processSteps, services, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Eventos y animaciones infantiles en Sevilla',
    description:
      'Cumpleaños temáticos, comuniones, bodas y Spa Tati’s en Sevilla y Aljarafe. Decoración, globos y monitoras con mirada de maestra de Infantil.',
    path: '/',
  }),
  title: { absolute: `${siteConfig.name} · Eventos y animaciones infantiles en Sevilla` },
}

const heroStrip = [
  photo('globos-crema-equipo-brazos'),
  photo('granja-zenon-molino-globos'),
  photo('boda-candy-bar-arcos'),
]

const ticker = ['Cumpleaños', 'Comuniones', "Spa Tati's", 'Bodas', 'Bautizos', 'Revelaciones', 'Monitoras', 'Globos']

export default function Home() {
  const preview = portfolio.slice(0, 9)
  return (
    <>
      {/* HERO · filmstrip de 3 fotos (una a sangre en móvil) */}
      <section className="hero" aria-label="Presentación">
        <div className="hero__strip">
          {heroStrip.map((p, i) => (
            <div className="hero__cell" key={p.src}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                priority={i === 0}
                sizes={i === 0 ? '(min-width: 900px) 32vw, 100vw' : '32vw'}
                style={{ objectPosition: i === 0 ? '50% 30%' : '50% 50%' }}
              />
            </div>
          ))}
        </div>
        <div className="hero__veil" />
        <div className="container hero__content">
          <Reveal variant="fade-in">
            <span className="eyebrow eyebrow--light">Eventos y animaciones · Sevilla</span>
          </Reveal>
          <HeroTitle
            className="display"
            lines={[
              'Eventos con',
              <>
                <em>estilo</em> único
              </>,
            ]}
          />
          <Reveal delay={0.5}>
            <p className="hero__lead">Para cada celebración que importa, con la mirada de una maestra de Infantil.</p>
          </Reveal>
          <Reveal delay={0.6} className="btn-row">
            <a href={waLink()} className="btn btn--cream" target="_blank" rel="noopener noreferrer">
              Reservar fecha
            </a>
            <a href="#servicios" className="btn btn--light">
              Ver servicios
            </a>
          </Reveal>
        </div>
        <div className="hero__badge" aria-hidden="true">
          <span>
            Montaje
            <br />y recogida
            <br />
            incluidos
          </span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* INTRO · empieza con subtítulo fino; texto 40% + foto 60% */}
      <section className="section" id="intro">
        <span className="watermark watermark--left" aria-hidden="true">
          Tati&apos;s
        </span>
        <div className="container intro__grid">
          <div className="intro__text">
            <Reveal variant="fade-in">
              <span className="eyebrow">La mirada de una maestra de Infantil</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Tú disfrutas del día. <em>Nosotras</em> del resto.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">{siteConfig.bioShort}</p>
              <p className="muted">
                Sabemos cuánto dura la atención de un peque de 4 años y qué emociona a uno de 10. Por eso cada fiesta se piensa
                por edades, con decoración cuidada y monitoras que vienen del mundo educativo.
              </p>
              <p className="intro__sig">Tati</p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="intro__facts">
                <li>
                  <strong>6.5k</strong>
                  <span>seguidores en Instagram</span>
                </li>
                <li>
                  <strong>780+</strong>
                  <span>momentos publicados</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>montaje incluido</span>
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="intro__media">
            <Reveal variant="scale-in">
              <Pic
                className="arch intro__photo"
                src={photo('tati-retrato-puf').src}
                alt={photo('tati-retrato-puf').alt}
                sizes="(min-width: 900px) 55vw, 100vw"
              />
            </Reveal>
            <Reveal variant="scale-in" delay={0.2} className="intro__detail circle">
              <Image src={photo('globos-crema-abrazo').src} alt={photo('globos-crema-abrazo').alt} fill sizes="(min-width: 900px) 20vw, 40vw" style={{ objectPosition: '50% 35%' }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS · empieza con número grande */}
      <section className="section section--surface" id="servicios">
        <span className="watermark watermark--num" aria-hidden="true">
          06
        </span>
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Qué hacemos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Seis maneras de <em>celebrar</em> sin preocuparte
              </h2>
            </Reveal>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} index={i % 3}>
                <Link href={`/servicios#${s.slug}`} className="svc-card">
                  <Pic className="arch svc-card__img" src={s.image} alt={s.title} sizes="(min-width: 900px) 30vw, (min-width: 560px) 50vw, 100vw" />
                  <div className="svc-card__body">
                    <span className="svc-card__kicker">{s.kicker}</span>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="center-row">
            <Link href="/servicios" className="btn">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* GUÍA POR EDADES · empieza con línea + título */}
      <section className="section section--gingham" id="edades">
        <div className="container">
          <div className="section-head">
            <Line width="5rem" />
            <Reveal>
              <h2 className="title">
                ¿Qué contratar según la <em>edad</em> de tu peque?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted" style={{ background: 'var(--color-bg)', display: 'inline', padding: '0.1rem 0.4rem' }}>
                La guía que siempre compartimos con las familias.
              </p>
            </Reveal>
          </div>
          <AgeGuide />
        </div>
      </section>

      {/* SEPARADOR · foto a sangre */}
      <Separator image={photo('boda-mesa-postres-flores').src} alt={photo('boda-mesa-postres-flores').alt} position="50% 40%">
        <p className="separator__quote">
          Donde hay <em>dedicación</em>, nacen grandes resultados.
        </p>
        <span className="separator__sig">El lema de nuestro estudio</span>
      </Separator>

      {/* PROCESO · números grandes */}
      <section className="section" id="proceso">
        <div className="container process">
          <div className="process__head">
            <Reveal>
              <span className="eyebrow">Cómo trabajamos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                De tu mensaje a la <em>fiesta</em>, en cuatro pasos
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">Sin paquetes rígidos: nos adaptamos a la edad, al espacio y al presupuesto.</p>
            </Reveal>
            <Reveal variant="scale-in" delay={0.2}>
              <Pic
                className="arch process__photo"
                src={photo('granja-hinchando-globos').src}
                alt={photo('granja-hinchando-globos').alt}
                sizes="(min-width: 900px) 25vw, 70vw"
              />
            </Reveal>
          </div>
          <ol className="steps">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.number} index={i} className="step">
                <span className="step__num">{s.number}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO · masonry */}
      <section className="section section--surface" id="portfolio">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <Reveal>
                <span className="eyebrow">Portfolio</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title" style={{ marginBottom: 0 }}>
                  Fiestas que ya son <em>recuerdo</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <Link href="/portfolio" className="link-arrow">
                Ver galería completa
              </Link>
            </Reveal>
          </div>
          <Gallery photos={preview} />
        </div>
      </section>

      {/* SPA TATI'S · asimétrico 60/40 */}
      <section className="section" id="spa">
        <div className="container spa__grid">
          <div className="spa__media">
            <Reveal variant="scale-in">
              <Pic className="spa__main" src={photo('spa-rincon-mesa').src} alt={photo('spa-rincon-mesa').alt} sizes="(min-width: 900px) 55vw, 100vw" />
            </Reveal>
            <Reveal variant="scale-in" delay={0.2}>
              <Pic className="spa__second" src={photo('spa-relax-antifaces').src} alt={photo('spa-relax-antifaces').alt} sizes="(min-width: 900px) 30vw, 60vw" />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <span className="eyebrow">El favorito de las peques</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Spa <em>Tati&apos;s</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Un rincón spa completo montado para que cada peque se sienta en un lugar solo para ellos: albornoces, diademas,
                mascarillas, antifaces y unos minutos de relax con música suave.
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
            <Reveal delay={0.3} className="btn-row">
              <Link href="/spa-tatis" className="btn btn--solid">
                Descubrir el Spa
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="section section--surface" id="sobre-mi">
        <div className="container about__grid">
          <Reveal variant="scale-in">
            <Pic
              className="arch about__photo"
              src={photo('globos-crema-tati-taburete').src}
              alt={photo('globos-crema-tati-taburete').alt}
              sizes="(min-width: 900px) 55vw, 100vw"
            />
          </Reveal>
          <div className="about__text">
            <Reveal>
              <span className="eyebrow">Sobre mí</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Dejé el aula para dedicarme <em>100%</em> a esto
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Soy Tati. Durante años fui maestra de Infantil y descubrí que lo que más me gustaba era ver a los peques disfrutar
                de verdad. Hace unos meses tomé la decisión más importante de mi vida: dejar todo lo demás y dedicarme por completo
                a Eventos Tati&apos;s.
              </p>
              <p className="muted">Cada evento lo cuido como si fuera el de mi familia. Esa es la única manera que conozco de trabajar.</p>
              <p className="about__sig">Tati</p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link href="/sobre-mi" className="link-arrow">
                Conocer mi historia
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS · tarjetas */}
      <section className="section" id="testimonios">
        <div className="container">
          <div className="section-head section-head--center">
            <Reveal>
              <span className="eyebrow eyebrow--center">Reseñas</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Lo que cuentan las <em>familias</em>
              </h2>
            </Reveal>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section section--gingham" id="contacto">
        <div className="container contact-home__grid">
          <div style={{ background: 'var(--color-bg)', borderRadius: '1.5rem', padding: '2rem 1.25rem' }}>
            <Reveal>
              <span className="eyebrow">Reserva tu fecha</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                ¿Hablamos de <em>vuestra</em> fiesta?
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Cuéntanos qué celebras y te respondemos con una propuesta. Si lo prefieres,{' '}
                <a className="inline-link" href={waLink()} target="_blank" rel="noopener noreferrer">
                  escríbenos por WhatsApp
                </a>
                .
              </p>
            </Reveal>
            <ContactForm compact />
          </div>
          <Reveal variant="scale-in">
            <Pic
              className="arch contact-home__photo"
              src={photo('comunion-selfie-ninos').src}
              alt={photo('comunion-selfie-ninos').alt}
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
