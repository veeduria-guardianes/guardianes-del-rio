import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Droplet } from 'lucide-react'

/**
 * Pilar 1 de la casa de mensajes (04-comunicacion.md): relevancia personal.
 * Conecta el agua de la llave de cada payanense con las cuencas solicitadas.
 * Al pie, la gráfica complementaria oficial de ríos (lámina azul agua).
 */
export function RelevanciaAgua() {
  return (
    <section
      aria-labelledby="agua-tu-llave"
      className="relative isolate scroll-mt-4 overflow-hidden bg-mist py-16 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 md:px-10 lg:grid-cols-[auto_1fr_auto]">
        <span className="grid size-16 shrink-0 place-items-center rounded-full bg-surface text-teal shadow-sm">
          <Droplet className="size-8" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            ¿De dónde viene tu agua?
          </p>
          <h2 id="agua-tu-llave" className="mt-2 text-3xl md:text-4xl">
            El agua que sale de tu llave nace donde hoy piden minar.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Las subcuencas del Molino-Pubús y del Pisojé abastecen a Popayán: el Pisojé
            es la fuente alterna del sistema Tablazo cuando baja el caudal en época
            seca. Sobre esas mismas cuencas hay solicitudes mineras ya viabilizadas.
          </p>
        </div>
        <Link
          href="/mapa"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-teal px-6 py-3 font-semibold text-teal transition-colors hover:bg-teal hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          Haz el recorrido
          <span className="sr-only">: descubre de dónde viene el agua de Popayán</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Ríos oficiales (gráfica complementaria) al pie del lienzo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 opacity-70">
        <Image src="/identidad/rios-banda.png" alt="" fill sizes="100vw" className="object-cover object-bottom" />
      </div>
    </section>
  )
}
