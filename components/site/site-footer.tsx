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

      {/* Cierre del sitio: las hojas de maíz a la izquierda y el venado como
          protagonista del final (gráfica complementaria oficial, lima sobre
          verde bosque). */}
      <Image
        src="/identidad/motivos/mata-maiz-lima.png"
        alt=""
        width={128}
        height={128}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-7 hidden h-28 w-24 object-contain opacity-70 md:block lg:h-36 lg:w-28"
      />
      <Image
        src="/identidad/motivos/venado-lima.png"
        alt=""
        width={224}
        height={224}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-6 hidden h-32 w-32 object-contain opacity-95 md:block lg:h-44 lg:w-44"
      />

      {/* (La franja de ríos del pie se retiró; se reubicará cuando el equipo
          defina su lugar.) */}
    </footer>
  )
}
