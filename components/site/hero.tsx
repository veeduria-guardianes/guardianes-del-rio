import Image from 'next/image'
import Link from 'next/link'
import { cifrasVeeduria } from '@/lib/mapa-data'

const stats = [
  { value: '4', label: 'ríos vigilados: Cauca, Las Piedras, Molino y Pisojé' },
  { value: String(cifrasVeeduria.titulosVigentes), label: 'títulos mineros vigentes' },
  { value: String(cifrasVeeduria.solicitudesTramite), label: 'solicitudes en trámite' },
  { value: `${cifrasVeeduria.traslapeLBJ}%`, label: 'de una solicitud viabilizada cae sobre zonas de interés hídrico' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="relative isolate overflow-hidden bg-teal">
        <Image
          src="/images/hero-lineas.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-[0.12] mix-blend-screen"
        />
        <div className="mx-auto w-full max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
          <h1
            id="hero-title"
            className="max-w-3xl text-4xl text-surface sm:text-5xl md:text-7xl"
          >
            El agua no se negocia, se defiende.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-surface/85 md:text-xl">
            Vigilancia ciudadana sobre los ríos Cauca, Las Piedras, Molino y Pisojé.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {/* TODO (video): cuando exista el video tutorial (60–90 s), abrirlo aquí
                con un botón fantasma "▶ Mira cómo usar esta herramienta". */}
            <a
              href="/mapa"
              className="inline-flex h-13 items-center rounded-full bg-ember px-7 text-base font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Descubre de dónde viene tu agua
            </a>
            <Link
              href="/sumate"
              className="inline-flex h-13 items-center rounded-full border-2 border-surface px-7 text-base font-semibold text-surface transition-colors hover:bg-surface hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Conviértete en guardián o guardiana
            </Link>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-forest">
        {/* Gráfica complementaria oficial (lámina verde): la arveja y el café —
            cultivos del territorio — acompañan las cifras, tono sobre tono. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-2 hidden w-36 opacity-55 md:block lg:w-44">
          <Image src="/identidad/motivos/arveja-lima.png" alt="" fill sizes="176px" className="object-contain object-left p-2" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-2 hidden w-36 opacity-55 md:block lg:w-44">
          <Image src="/identidad/motivos/cafe-lima.png" alt="" fill sizes="176px" className="object-contain object-right p-2" />
        </div>
        <dl className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse md:border-l md:border-surface/20 md:pl-6 md:first:border-l-0 md:first:pl-0">
              <dt className="mt-1 text-sm text-surface/75">{stat.label}</dt>
              <dd className="font-display text-5xl leading-none text-surface">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mx-auto w-full max-w-[1200px] px-6 pb-6 text-xs text-surface/60 md:px-10">
          Fuente: {cifrasVeeduria.fuente}.
        </p>
      </div>
    </section>
  )
}
