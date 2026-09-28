import { ageGuide } from '@/content/data'
import Reveal from './Reveal'

// Guía por edades: tarjetas con cabecera de vichy, como sus carruseles
export default function AgeGuide() {
  return (
    <ul className="ages" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {ageGuide.map((a, i) => (
        <Reveal as="li" key={a.range} index={i} className="age">
          <div className="age__head">
            <span className="age__range">{a.range}</span>
            <span className="age__unit">años</span>
          </div>
          <div className="age__body">
            <h3>{a.title}</h3>
            <p>{a.text}</p>
            <ul className="chips">
              {a.picks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}
