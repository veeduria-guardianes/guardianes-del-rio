import Image from 'next/image'
import Link from 'next/link'
import { Download, HandHeart, Mail, TriangleAlert } from 'lucide-react'

const actions = [
  { label: 'Reportar un vertimiento', icon: TriangleAlert, href: '/sumate' },
  { label: 'Descargar láminas y documentos', icon: Download, href: '/evidencia#descargables' },
  { label: 'Recibir el boletín', icon: Mail, href: '/sumate' },
  { label: 'Ser voluntario', icon: HandHeart, href: '/sumate' },
]

export function CtaBand() {
  return (
    <section
      id="sumate"
      aria-labelledby="sumate-title"
      className="relative isolate scroll-mt-4 overflow-hidden bg-peach py-20 md:py-24"
    >
      {/* Gráfica complementaria oficial: la mata de maíz y la zarigüeya —el
          territorio y su fauna— acompañan el llamado a la acción. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-4 hidden w-32 opacity-60 lg:block">
        <Image src="/identidad/motivos/maiz2-lima.png" alt="" fill sizes="128px" className="object-contain object-left p-1" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 hidden w-32 opacity-60 lg:block">
        <Image src="/identidad/motivos/zarigueya-lima.png" alt="" fill sizes="128px" className="object-contain object-right p-1" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 id="sumate-title" className="max-w-2xl text-4xl md:text-5xl">
            Este territorio se defiende en comunidad
          </h2>
          <a
            href="/sumate"
            className="inline-flex h-13 shrink-0 items-center rounded-full bg-ember px-7 text-base font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            Conviértete en guardián o guardiana
          </a>
        </div>

        <ul id="acciones" className="mt-12 grid grid-cols-2 gap-6 border-t border-forest/20 pt-8 md:grid-cols-4">
          {actions.map(({ label, icon: Icon, href }) => (
            <li key={label}>
              <a
                href={href}
                className="inline-flex items-center gap-3 font-semibold text-forest underline-offset-4 hover:underline"
              >
                <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
