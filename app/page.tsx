import { AlertBar } from '@/components/site/alert-bar'
import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { RelevanciaAgua } from '@/components/site/relevancia-agua'
import { MapSection } from '@/components/site/map-section'
import { Concessions } from '@/components/site/concessions'
import { News } from '@/components/site/news'
import { CtaBand } from '@/components/site/cta-band'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'

export default function Page() {
  return (
    <>
      <AlertBar />
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <RelevanciaAgua />
        <MapSection />
        <Concessions />
        <News />
        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
