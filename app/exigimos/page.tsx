import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileCheck2, Gavel, Handshake } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { cifrasVeeduria } from '@/lib/mapa-data'

export const metadata: Metadata = {
  title: 'Lo que exigimos · Guardianes y Guardianas del Río',
  description:
    'Propuesta política de la Veeduría Guardianes y Guardianas del Río: verificación polígono por polígono antes de viabilizar, evaluación de impactos acumulativos y mesa interinstitucional con participación ciudadana.',
}

const niveles = [
  {
    icon: FileCheck2,
    nivel: 'Nivel 1 · Lo que los datos ya prueban',
    exigencia:
      'Exigimos la suspensión de la viabilización de nuevas solicitudes mineras hasta que la ANM y la CRC verifiquen, polígono por polígono, su incompatibilidad con el POT y con las áreas de interés hídrico.',
    fundamento:
      `El traslape del ${cifrasVeeduria.traslapeLBJ}% del polígono LBJ-11441 con predios adquiridos por el municipio para protección hídrica es la prueba de que la evaluación individualizada está fallando.`,
    tone: 'bg-ember text-surface',
  },
  {
    icon: Gavel,
    nivel: 'Nivel 2 · Lo que la ley ordena y no se aplica',
    exigencia:
      'Exigimos que la autoridad ambiental evalúe los impactos acumulativos y sinérgicos de los títulos y solicitudes en su conjunto, no de forma fragmentada, aplicando los principios de prevención y precaución.',
    fundamento:
      'La evaluación fragmentada oculta los efectos sobre la cuenca. La Ley 99 de 1993 y la Ley 1523 de 2012 ya obligan a hacerlo; la jurisprudencia constitucional lo ha reiterado (C-123 de 2014, SU-095 de 2018).',
    tone: 'bg-teal text-surface',
  },
  {
    icon: Handshake,
    nivel: 'Nivel 3 · Lo que proponemos construir',
    exigencia:
      'Proponemos una Mesa de Coordinación Interinstitucional vinculante (ANM, CRC, Alcaldía y Gobernación) con participación ciudadana efectiva, para que las decisiones sobre el territorio se tomen con información completa.',
    fundamento:
      'El Acuerdo de Escazú (Ley 2273 de 2022) garantiza el acceso a la información y la participación en asuntos ambientales antes de que se tomen las decisiones.',
    tone: 'bg-forest text-surface',
  },
]

export default function ExigimosPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="bg-paper pb-20 md:pb-28">
        <header className="mx-auto w-full max-w-[1200px] px-6 pb-4 pt-10 md:px-10">
          <h1 className="text-4xl md:text-5xl">Lo que exigimos</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Nuestra propuesta política no es abstracta: cada exigencia nace de un dato
            verificado y de una norma vigente. Tres niveles, tres caminos de acción.
          </p>
        </header>

        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <ul className="grid gap-6 lg:grid-cols-3">
            {niveles.map(({ icon: Icon, nivel, exigencia, fundamento, tone }) => (
              <li
                key={nivel}
                className="flex flex-col rounded-2xl border border-line bg-surface p-8"
              >
                <span className={`inline-flex size-12 items-center justify-center rounded-full ${tone}`}>
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl">{nivel}</h2>
                <blockquote className="mt-4 border-l-4 border-ember pl-4 font-display text-lg leading-snug text-forest">
                  «{exigencia}»
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  <strong className="text-forest">Fundamento:</strong> {fundamento}
                </p>
              </li>
            ))}
          </ul>

          <section className="mt-16 rounded-2xl bg-mist p-8 md:p-10">
            <h2 className="text-3xl">¿Qué puedes hacer tú?</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              <li>
                <Link
                  href="/sumate"
                  className="flex h-full flex-col gap-2 rounded-xl border border-teal/15 bg-surface p-6 transition-colors hover:border-teal/50"
                >
                  <span className="font-display text-xl text-forest">Súmate a la veeduría</span>
                  <span className="text-ink-soft">
                    Difunde, participa como voluntario o aporta conocimiento jurídico.
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-semibold text-teal">
                    Registrarme <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/evidencia#descargables"
                  className="flex h-full flex-col gap-2 rounded-xl border border-teal/15 bg-surface p-6 transition-colors hover:border-teal/50"
                >
                  <span className="font-display text-xl text-forest">
                    Descarga y comparte
                  </span>
                  <span className="text-ink-soft">
                    Láminas con los datos clave para compartir por WhatsApp con tu comunidad.
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-semibold text-teal">
                    Ver descargables <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/concesiones/lbj-11441"
                  className="flex h-full flex-col gap-2 rounded-xl border border-teal/15 bg-surface p-6 transition-colors hover:border-teal/50"
                >
                  <span className="font-display text-xl text-forest">
                    Conoce el caso del 53%
                  </span>
                  <span className="text-ink-soft">
                    La ficha completa de la solicitud LBJ-11441, con su fuente verificable.
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-semibold text-teal">
                    Ver la ficha <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
