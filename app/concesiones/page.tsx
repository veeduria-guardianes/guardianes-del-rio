import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Pickaxe, TriangleAlert } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { cifrasVeeduria, concessions, titulosVigentes } from '@/lib/mapa-data'

export const metadata: Metadata = {
  title: 'Concesiones bajo vigilancia · Guardianes y Guardianas del Río',
  description:
    'Fichas de los títulos y solicitudes mineras que la veeduría sigue en Popayán: expedientes viabilizados y en trámite sobre los ríos Cauca, Las Piedras, Molino y Pisojé.',
}

const toneByStatus: Record<string, string> = {
  'Título vigente': 'bg-[#c94f13] text-surface',
  Viabilizada: 'bg-ember text-surface',
  'Solicitud vigente': 'bg-peach text-forest',
}

export default function ConcesionesPage() {
  const orden: Record<string, number> = {
    'Título vigente': 0,
    Viabilizada: 1,
    'Solicitud vigente': 2,
  }
  const lista = [...concessions].sort((a, b) => orden[a.status] - orden[b.status])

  return (
    <>
      <SiteHeader />
      <main id="contenido" className="bg-paper pb-20 md:pb-28">
        <header className="mx-auto w-full max-w-[1200px] px-6 pb-8 pt-10 md:px-10">
          <h1 className="text-4xl md:text-5xl">Concesiones bajo vigilancia</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Cada ficha reúne lo que sabemos de un expediente minero: titular, área,
            veredas, ríos que pueden afectarse y su estado ante la ANM. Hoy seguimos{' '}
            {concessions.length} expedientes con datos verificados; el inventario completo
            de {cifrasVeeduria.titulosVigentes} títulos y {cifrasVeeduria.solicitudesTramite}{' '}
            solicitudes se carga por fases.
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Fuente: {cifrasVeeduria.fuente}.
          </p>
        </header>

        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lista.map((item) => (
              <li
                key={item.id}
                className="flex flex-col rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${toneByStatus[item.status]}`}
                  >
                    {item.status}
                  </span>
                  <span className="font-mono text-sm text-ink-soft">{item.name}</span>
                </div>
                <h2 className="mt-4 text-xl">{item.titular}</h2>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-soft">Área</dt>
                    <dd className="font-semibold text-forest">
                      {item.hectares.toLocaleString('es-CO')} ha
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-soft">Veredas</dt>
                    <dd className="text-right font-semibold text-forest">
                      {item.veredas.join(', ')}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-soft">Ríos</dt>
                    <dd className="text-right font-semibold text-forest">
                      {item.rivers.join(', ')}
                    </dd>
                  </div>
                </dl>
                {item.traslapePct && (
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-peach/30 px-3 py-2 text-sm font-medium text-forest">
                    <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {item.traslapePct}% de traslape con zonas de interés hídrico.
                  </p>
                )}
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <Link
                    href={`/concesiones/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal underline-offset-4 hover:underline"
                  >
                    Ver ficha completa
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/mapa?expediente=${item.id}`}
                    className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
                  >
                    En el mapa
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 rounded-2xl border border-line bg-mist p-5 text-sm leading-relaxed text-forest">
            <strong>Nota metodológica:</strong> las posiciones del mapa son aproximadas,
            centradas en las veredas de cada expediente, mientras la veeduría carga los
            polígonos oficiales de la ANM (Celda Minera). Los datos de titular, área,
            mineral y estado provienen de la ANM (AnnA Minería) y del Acta de
            Concertación N.° 001 del 25 de marzo de 2025.
          </p>
        </div>

        <section aria-labelledby="titulos-vigentes" className="mx-auto mt-16 w-full max-w-[1200px] px-6 pb-4 md:px-10">
          <h2 id="titulos-vigentes" className="flex items-center gap-3 text-4xl md:text-5xl">
            <Pickaxe className="size-8 text-teal" strokeWidth={1.75} aria-hidden="true" />
            Los {titulosVigentes.length} títulos mineros vigentes
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink-soft">
            El catastro minero de la ANM reporta {titulosVigentes.length} títulos
            otorgados y vigentes en Popayán. El acta no publica su ubicación
            geográfica: aquí está el inventario completo y, cuando la veeduría cargue
            la Celda Minera, pasarán al mapa.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-surface">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-line bg-paper text-xs uppercase tracking-[0.12em] text-ink-soft">
                <tr>
                  <th scope="col" className="px-5 py-3">Código</th>
                  <th scope="col" className="px-5 py-3">Titular</th>
                  <th scope="col" className="px-5 py-3 text-right">Área (ha)</th>
                  <th scope="col" className="px-5 py-3">Mineral</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {titulosVigentes.map((t) => (
                  <tr key={t.codigo} className="align-top hover:bg-paper/60">
                    <th scope="row" className="px-5 py-3 font-mono font-semibold text-forest">{t.codigo}</th>
                    <td className="px-5 py-3 text-forest">{t.titular}</td>
                    <td className="px-5 py-3 text-right font-semibold text-forest">
                      {t.hectareas.toLocaleString('es-CO')}
                    </td>
                    <td className="px-5 py-3 text-ink-soft">{t.grupo}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t border-line bg-paper text-sm font-semibold text-forest">
                <tr>
                  <td className="px-5 py-3" colSpan={2}>
                    Tres títulos son de la propia Alcaldía de Popayán (SK8-09161, SJ4-14401, SIP-15281)
                  </td>
                  <td className="px-5 py-3 text-right">
                    {titulosVigentes.reduce((s, t) => s + t.hectareas, 0).toLocaleString('es-CO', { maximumFractionDigits: 0 })}
                  </td>
                  <td className="px-5 py-3">ha tituladas</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            Fuente: catastro minero ANM (AnnA Minería), anexo del Acta de Concertación
            N.° 001 del 25 de marzo de 2025.
          </p>
        </section>

        <section aria-labelledby="lecturas" className="mx-auto mt-16 w-full max-w-[1200px] px-6 pb-8 md:px-10">
          <h2 id="lecturas" className="text-3xl">Lecturas del inventario</h2>
          <p className="mt-2 max-w-3xl text-ink-soft">
            Lo que se ve al cruzar los 19 títulos con las 11 solicitudes que
            seguimos — hechos verificables en el propio catastro del acta.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <li className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6">
              <span className="font-display text-4xl text-ember">4</span>
              <h3 className="font-sans text-lg font-semibold text-forest">
                expedientes de CONEXPE S.A.
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Dos títulos vigentes (JBF-08001X y CEM-156) más dos solicitudes
                viabilizadas (TLS-08101 y 503648): el titular más repetido del
                catastro de Popayán.
              </p>
            </li>
            <li className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6">
              <span className="font-display text-4xl text-ember">3</span>
              <h3 className="font-sans text-lg font-semibold text-forest">
                títulos de la propia Alcaldía
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                SK8-09161, SJ4-14401 y SIP-15281 están a nombre de la Alcaldía de
                Popayán: el municipio también aparece como titular minero.
              </p>
            </li>
            <li className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6">
              <span className="font-display text-4xl text-ember">3</span>
              <h3 className="font-sans text-lg font-semibold text-forest">
                títulos de Rodrigo Castrillón
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                HAI-091, DAM-091 y participación en 20984: la concentración de
                títulos de materiales de construcción en menos manos.
              </p>
            </li>
            <li className="flex flex-col gap-2 rounded-2xl border-2 border-ember/50 bg-surface p-6">
              <span className="font-display text-4xl text-ember">2</span>
              <h3 className="font-sans text-lg font-semibold text-forest">
                vínculos Manzano–León
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                María Eucaris León de Manzano firma la solicitud LBJ-11441 (53% de
                traslape hídrico) y figura junto a Juan Antonio Manzano en el
                título EGU-111.
              </p>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
