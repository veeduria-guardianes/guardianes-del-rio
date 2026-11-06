import { ArrowUpRight, Megaphone, MessageCircle, Search } from 'lucide-react'
import { WHATSAPP } from '@/lib/contacto'

const ways = [
  {
    icon: MessageCircle,
    title: 'Comparte el sitio por WhatsApp',
    text: 'Envía el mapa del agua a tu familia y a los grupos de tu vereda.',
    cta: 'Compartir',
    href: `https://wa.me/?text=${encodeURIComponent(
      'Mira qué títulos mineros hay cerca de nuestros ríos: https://guardianesdelrio.org/mapa',
    )}`,
  },
  {
    icon: Megaphone,
    title: 'Invita a una asamblea',
    text: 'Llevamos la información a tu junta de acción comunal o acueducto.',
    cta: 'Proponer una fecha',
    href: `${WHATSAPP}?text=${encodeURIComponent(
      'Hola, quiero invitar a la veeduría a una asamblea en mi comunidad.',
    )}`,
  },
  {
    icon: Search,
    title: 'Reporta un hallazgo',
    text: 'Maquinaria, vertimientos o cambios en el río: cuéntanos con una foto.',
    cta: 'Enviar reporte',
    href: `${WHATSAPP}?text=${encodeURIComponent(
      'Hola, quiero reportar un hallazgo en el territorio.',
    )}`,
  },
]

export function OtherWays() {
  return (
    <section aria-labelledby="otras-formas" className="bg-mist py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <h2 id="otras-formas" className="text-3xl">
          Otras formas de apoyar
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {ways.map(({ icon: Icon, title, text, cta, href }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-teal/15 bg-surface p-6 transition-colors hover:border-teal/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                <Icon className="size-7 text-teal" strokeWidth={1.5} aria-hidden="true" />
                <span className="flex flex-col gap-1.5">
                  <span className="font-display text-xl text-forest">{title}</span>
                  <span className="text-ink-soft">{text}</span>
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 font-semibold text-teal">
                  {cta}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(abre WhatsApp)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
