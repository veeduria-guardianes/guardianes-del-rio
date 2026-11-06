import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { SignupForm } from '@/components/sumate/signup-form'
import { TrustPanel } from '@/components/sumate/trust-panel'
import { OtherWays } from '@/components/sumate/other-ways'

export const metadata: Metadata = {
  title: 'Súmate · Guardianes y Guardianas del Río',
  description:
    'Regístrate en la veeduría ciudadana del río Cauca en Popayán: difunde, haz voluntariado, apoya jurídicamente o dona.',
}

export default function SumatePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <header className="bg-paper">
          <div className="mx-auto w-full max-w-[1200px] px-6 pt-10 pb-6 md:px-10">
            <h1 className="text-4xl md:text-5xl">Súmate a la defensa del agua</h1>
            <p className="mt-3 max-w-2xl text-lg text-ink-soft">
              Cada persona que se informa y participa hace más fuerte la veeduría.
            </p>
          </div>
        </header>

        <div className="bg-paper pb-20">
          <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 pt-4 md:px-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
            <SignupForm />
            <TrustPanel />
          </div>
        </div>

        <OtherWays />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
