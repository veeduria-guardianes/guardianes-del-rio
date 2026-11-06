import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/site/logo'

const menu = [
  { href: '/mapa', label: 'Mapa del Agua' },
  { href: '/concesiones', label: 'Concesiones' },
  { href: '/evidencia', label: 'La evidencia' },
  { href: '/exigimos', label: 'Lo que exigimos' },
  { href: '/#noticias', label: 'Noticias' },
  { href: '/quienes-somos', label: '¿Quiénes somos?' },
  { href: '/sumate', label: 'Súmate' },
]

// TODO (equipo): reemplazar por las cuentas reales cuando existan.
const redes = [
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'X' },
  { href: '#', label: 'WhatsApp' },
]

export function SiteFooter() {
  return (
    <footer id="quienes-somos" className="relative scroll-mt-4 overflow-hidden bg-forest text-surface">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 pb-36 pt-16 md:grid-cols-[3fr_2fr_2fr] md:px-10">
        <div>
          <Logo size={88} />
          <p className="mt-5 max-w-sm font-display text-xl leading-snug">
            Veeduría Ambiental Guardianes y Guardianas de los Ríos Cauca, Las Piedras, Molino y Pisojé
          </p>
          <p className="mt-3 text-sm text-surface/75">Popayán, Cauca — Ley 850 de 2003</p>
        </div>

        <nav aria-label="Pie de página">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-surface/60">
            Sitio
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {menu.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href} className="text-surface/85 hover:text-surface hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="text-surface/75">Escríbenos</p>
          {/* TODO: correo real de la veeduría */}
          <a
            href="mailto:contacto@guardianesdelrio.org"
            className="mt-1 inline-block font-semibold underline-offset-4 hover:underline"
          >
            contacto@guardianesdelrio.org
          </a>
          <p className="mt-5 text-surface/75">Síguenos</p>
          <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
            {redes.map((red) => (
              <li key={red.label}>
                <a href={red.href} className="text-surface/85 hover:text-surface hover:underline">
                  {red.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fauna del territorio flanqueando el pie, junto a los ríos:
          el armadillo y el venado (gráfica complementaria oficial, lima
          sobre verde bosque, como en la franja de cifras). */}
      <Image
        src="/identidad/motivos/armadillo-lima.png"
        alt=""
        width={128}
        height={128}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-7 hidden h-24 w-24 object-contain opacity-70 md:block lg:h-32 lg:w-32"
      />
      <Image
        src="/identidad/motivos/venado-lima.png"
        alt=""
        width={128}
        height={128}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 right-7 hidden h-24 w-24 object-contain opacity-90 md:block lg:h-32 lg:w-32"
      />

      {/* Gráfica complementaria oficial: patrón de ríos (Manual de Identidad) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-4 h-24 w-full overflow-hidden opacity-20">
        <Image
          src="/identidad/rios-azules.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom mix-blend-screen"
        />
      </div>
    </footer>
  )
}
