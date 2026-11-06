import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Ruler, TriangleAlert, User, Waves } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { concessions } from '@/lib/mapa-data'

type Params = { codigo: string }

export function generateStaticParams(): Params[] {
  return concessions.map((c) => ({ codigo: c.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { codigo } = await params
  const c = concessions.find((item) => item.id === codigo)
  if (!c) return { title: 'Expediente no encontrado · Guardianes y Guardianas del Río' }
  return {
    title: `${c.name} · ${c.titular} | Guardianes y Guardianas del Río`,
    description: `Ficha del expediente minero ${c.name} en ${c.municipio}: ${c.hectares.toLocaleString('es-CO')} ha en ${c.veredas.join(', ')}. Estado: ${c.status}.`,
  }
}

const toneByStatus: Record<string, string> = {
  'Título vigente': 'bg-[#c94f13] text-surface',
  Viabilizada: 'bg-ember text-surface',
  'Solicitud vigente': 'bg-peach text-forest',
}

export default async function FichaConcesionPage({ params }: { params: Promise<Params> }) {
  const { codigo } = await params
  const c = concessions.find((item) => item.id === codigo)
  if (!c) notFound()

  return (
    <>
      <SiteHeader />
      <main id="contenido" className="bg-paper pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[900px] px-6 md:px-10">
          <Link
            href="/concesiones"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Todas las concesiones
          </Link>

          <article className="mt-6 rounded-2xl border border-line bg-surface p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${toneByStatus[c.status]}`}
              >
                {c.status}
              </span>
              <span className="font-mono text-sm text-ink-soft">Expediente {c.name}</span>
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl">{c.titular}</h1>
            <p className="mt-2 text-ink-soft">
              {c.tipoPersona === 'natural' ? 'Persona natural' : 'Persona jurídica'} ·{' '}
              {c.municipio}, Cauca
            </p>

            {c.traslapePct && (
              <p className="mt-6 flex items-start gap-3 rounded-xl bg-peach/40 px-4 py-3 font-medium text-forest">
                <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <span>
                  El {c.traslapePct}% del polígono se traslapa con áreas de interés hídrico
                  reconocidas por la Alcaldía y el Acueducto de Popayán.
                </span>
              </p>
            )}

            <dl className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Ruler className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Área solicitada</dt>
                  <dd className="font-semibold text-forest">
                    {c.hectares.toLocaleString('es-CO')} hectáreas
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Veredas</dt>
                  <dd className="font-semibold text-forest">{c.veredas.join(', ')}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Mineral</dt>
                  <dd className="font-semibold text-forest">{c.mineral}</dd>
                </div>
              </div>
              {c.radicacion && (
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Radicada ante la ANM</dt>
                    <dd className="font-semibold text-forest">{c.radicacion}</dd>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Waves className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">
                    Ríos que pueden afectarse
                  </dt>
                  <dd className="font-semibold text-forest">{c.rivers.join(', ')}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 rounded-xl bg-paper p-5">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                En pocas palabras
              </h2>
              <p className="mt-2 leading-relaxed text-forest">{c.summary}</p>
            </div>

            <p className="mt-4 text-sm text-ink-soft">Fuente: {c.fuente}.</p>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-line pt-8">
              <Link
                href={`/mapa?expediente=${c.id}`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ember px-6 font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                Ver en el mapa
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/evidencia"
                className="inline-flex h-12 items-center rounded-full border-2 border-teal px-6 font-semibold text-teal transition-colors hover:bg-teal hover:text-surface"
              >
                Base jurídica de la veeduría
              </Link>
            </div>
          </article>

          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            La ubicación en el mapa es aproximada mientras se cargan los polígonos
            oficiales de la ANM. Si encuentras un error en estos datos, escríbenos:{' '}
            <a
              href="mailto:contacto@guardianesdelrio.org"
              className="font-semibold text-teal underline-offset-4 hover:underline"
            >
              contacto@guardianesdelrio.org
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
