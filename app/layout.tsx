import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Nunito_Sans, Allura } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClientRoot from '@/components/ClientRoot'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/content/data'
import { siteUrl } from '@/content/seo'

const serif = DM_Serif_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
  variable: '--ff-serif',
  display: 'swap',
})
const sans = Nunito_Sans({ subsets: ['latin'], weight: ['400', '700'], variable: '--ff-sans', display: 'swap' })
const script = Allura({ subsets: ['latin'], weight: '400', variable: '--ff-script', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · Eventos y animaciones infantiles en Sevilla`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Cumpleaños temáticos, comuniones, bodas y Spa Tati’s en Sevilla. Decoración, globos y monitoras con la mirada de una maestra de Infantil. Pide tu propuesta.',
  openGraph: {
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#637555',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <ClientRoot>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientRoot>
        <JsonLd />
      </body>
    </html>
  )
}
