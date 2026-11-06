import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const legend = [
  { label: 'Solicitud viabilizada', swatch: 'bg-ember' },
  { label: 'Solicitud en trámite', swatch: 'bg-peach' },
  { label: 'Áreas de interés hídrico', swatch: 'bg-lime' },
  { label: 'Ríos amenazados', swatch: 'bg-water' },
]

export function MapSection() {
  return (
    <section id="mapa" aria-labelledby="mapa-title" className="scroll-mt-4 bg-paper py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[2fr_3fr]">
        <div>
          <h2 id="mapa-title" className="text-4xl md:text-5xl">
            El mapa del agua
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Cruzamos las solicitudes mineras viabilizadas con los cuatro ríos
            amenazados que abastecen a Popayán —Cauca, Las Piedras, Molino y
            Pisojé, con su cauce real— para que cualquiera pueda ver dónde está
            el riesgo.
          </p>
          <Link
            href="/mapa"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-teal underline-offset-4 hover:underline"
          >
            Explorar el mapa completo
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
          <div className="relative aspect-[3/2]">
            <Image
              src="/images/mapa-oficial.webp"
              alt="Mapa oficial de la veeduría: solicitudes de minería viabilizadas en el municipio de Popayán, sobre los ríos y veredas"
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-line px-5 py-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="sr-only">Leyenda:</span>
              {legend.map((item) => (
                <span key={item.label} className="flex items-center gap-2 text-sm text-forest">
                  <span className={`size-3 rounded-full ${item.swatch}`} aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-soft">
              Fuente: ANM, sistema AnnA Minería — consulta del 10 de octubre de 2026 ·
              elaboración propia en QGIS.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
