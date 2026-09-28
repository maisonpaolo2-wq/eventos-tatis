import Link from 'next/link'
import Pic from '@/components/Pic'
import { photo } from '@/content/data'

export default function NotFound() {
  return (
    <section className="page-hero page-hero--editorial notfound">
      <div className="container page-hero__content">
        <div className="page-hero__card">
          <span className="eyebrow eyebrow--center">Error 404</span>
          <h1>
            Este globo se nos ha <em>escapado</em>
          </h1>
          <p className="lead">La página que buscas no existe o ha cambiado de sitio.</p>
          <div style={{ maxWidth: 220, margin: '1.5rem auto 0' }}>
            <Pic className="circle" src={photo('globos-crema-tati-taburete').src} alt={photo('globos-crema-tati-taburete').alt} sizes="220px" />
          </div>
          <div className="btn-row btn-row--center">
            <Link href="/" className="btn btn--solid">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
