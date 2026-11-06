import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { MapExplorer } from '@/components/mapa/map-explorer'
import { MapNotes } from '@/components/mapa/map-notes'

export const metadata: Metadata = {
  title: 'El mapa del agua · Guardianes y Guardianas del Río',
  description:
    'Mapa interactivo de títulos mineros, solicitudes, ríos, acueductos comunitarios y zonas protegidas en la cuenca alta del río Cauca, Popayán.',
}

export default function MapaPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <header className="bg-paper">
          <div className="mx-auto w-full max-w-[1200px] px-6 py-6 md:px-10 md:py-8">
            <h1 className="text-3xl md:text-4xl">El mapa del agua</h1>
            <p className="mt-2 max-w-2xl text-base text-ink-soft">
              Títulos y solicitudes mineras, ríos, acueductos y zonas protegidas. Si es tu
              primera vez, usa el <strong>recorrido guiado</strong>: el mapa te cuenta la
              historia paso a paso.
            </p>
          </div>
        </header>
        <MapExplorer />
        <MapNotes />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
