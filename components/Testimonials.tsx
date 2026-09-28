import { testimonials } from '@/content/data'
import Reveal from './Reveal'

// Testimonios en TARJETAS con remate de vichy, escalonadas en escritorio
export default function Testimonials() {
  return (
    <div className="t-grid">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} index={i}>
          <figure className="t-card">
            <span className="stars" aria-label="5 de 5">
              ★★★★★
            </span>
            <span className="t-card__service">{t.service}</span>
            <blockquote>“{t.text}”</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>
                {t.location} · {t.date}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}
