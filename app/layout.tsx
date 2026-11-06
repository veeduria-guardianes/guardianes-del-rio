import type { Metadata, Viewport } from 'next'
import { Alkatra } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const display = Alkatra({
  subsets: ['latin'],
  variable: '--font-display-face',
  display: 'swap',
})

/**
 * Open Sauce One: tipografía oficial del cuerpo de texto según el Manual de
 * Identidad Gráfica de la Veeduría (autohospedada, archivos TTF oficiales).
 */
const body = localFont({
  src: [
    { path: './fonts/OpenSauceOne-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/OpenSauceOne-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/OpenSauceOne-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/OpenSauceOne-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://guardianesdelrio.org'),
  title: {
    default: 'Veeduría Ambiental Guardianes y Guardianas de los Ríos Cauca, Las Piedras, Molino y Pisojé',
    template: '%s',
  },
  description:
    'Veeduría ciudadana ambiental de Popayán, Cauca. Vigilamos los proyectos mineros que amenazan los ríos Cauca, Las Piedras, Molino y Pisojé, con información pública y verificable.',
  keywords: [
    'veeduría ambiental Popayán',
    'concesiones mineras Cauca',
    'protección río Pisojé',
    'río Cauca sujeto de derechos',
    'minería Popayán',
  ],
  openGraph: {
    title: 'Guardianes y Guardianas del Río · Veeduría ciudadana',
    description:
      'Vigilancia ciudadana sobre los ríos Cauca, Las Piedras, Molino y Pisojé. Mapa del riesgo, fichas de concesiones y propuesta política.',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Guardianes y Guardianas del Río: el agua no se negocia, se defiende' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/identidad/icon-32.png' },
      { url: '/identidad/icon-512.png', sizes: '512x512' },
    ],
    apple: '/identidad/apple-touch.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F8F3EA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
