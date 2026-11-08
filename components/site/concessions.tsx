import Link from 'next/link'
import { ArrowRight, TriangleAlert } from 'lucide-react'
import { concessions } from '@/lib/mapa-data'

/** Expedientes destacados en la portada; el listado completo vive en /concesiones. */
const destacadas = ['lbj-11441', 'kjs-15091', '513245']

const toneByStatus: Record<string, string> = {
  'Título vigente': 'bg-[#c94f13] text-surface',
  Viabilizada: 'bg-ember text-surface',
  'Solicitud vigente': 'bg-peach text-forest',
}

export function Concessions() {
  const cards = destacadas
    .map((id) => concessions.find((c) => c.id === id))
    .filter((c): c is (typeof concessions)[number] => Boolean(c))

  return (
    <section
      id="concesiones"
      aria-labelledby="concesiones-title"
      className="scroll-mt-4 bg-paper pb-20 md:pb-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="concesiones-title" className="text-4xl md:text-5xl">
            Concesiones bajo vigilancia
          </h2>
          <Link
            href="/concesiones"
            className="inline-flex items-center gap-2 font-semibold text-teal underline-offset-4 hover:underline"
          >
            Ver las {concessions.length} fichas
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <span
                className={`self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${toneByStatus[item.status]}`}
              >
                {item.status}
              </span>
              <h3 className="mt-5 text-2xl">{item.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{item.titular}</p>
              <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
                <div>
                  <dt className="text-ink-soft">Ubicación</dt>
                  <dd className="font-semibold text-forest">{item.veredas[0]}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Área</dt>
                  <dd className="font-semibold text-forest">
                    {item.hectares.toLocaleString('es-CO')} ha
                  </dd>
                </div>
              </dl>
              {item.traslapePct && (
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-peach/30 px-3 py-2 text-sm font-medium text-forest">
                  <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {item.traslapePct}% del polígono se traslapa con áreas de interés hídrico.
                </p>
              )}
              <Link
                href={`/concesiones/${item.id}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal underline-offset-4 hover:underline"
              >
                Ver ficha completa
                <span className="sr-only">: {item.name}</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
