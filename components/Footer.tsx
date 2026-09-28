import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/content/data'
import Logo from './Logo'
import { waLink } from './WhatsAppButton'

export default function Footer() {
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Image src="/photos/boda-candy-bar-arcos.webp" alt="Candy bar con arcos blancos y velas en una boda de noche" fill sizes="100vw" />
      </div>
      <div className="container">
        <p className="footer__quote">“Tú disfruta del día, nosotras nos encargamos del resto.”</p>
        <p className="footer__sig">{siteConfig.planner}</p>
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>
              Eventos y animaciones en {siteConfig.locations.slice(0, 3).join(', ')} y provincia. Cumpleaños, comuniones, bodas y el
              Spa Tati&apos;s, con la mirada de una maestra de Infantil.
            </p>
          </div>
          <div>
            <h4>Explorar</h4>
            <ul>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/spa-tatis">Spa Tati&apos;s</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/sobre-mi">Sobre mí</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Reservas</h4>
            <ul>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp · escríbenos
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
              <li>
                <Link href="/contacto">Formulario de contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · Sevilla
          </span>
          <span>Birthdays · Communions · Weddings · Kids spa</span>
        </div>
      </div>
    </footer>
  )
}
