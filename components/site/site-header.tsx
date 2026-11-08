'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/site/logo'

const navItems = [
  { href: '/mapa', label: 'Mapa del Agua' },
  { href: '/concesiones', label: 'Concesiones' },
  { href: '/evidencia', label: 'La evidencia' },
  { href: '/exigimos', label: 'Lo que exigimos' },
  { href: '/#noticias', label: 'Noticias' },
  { href: '/quienes-somos', label: '¿Quiénes somos?' },
]

export function SiteHeader() {
  const [abierto, setAbierto] = useState(false)
  const ruta = usePathname()

  return (
    <header className="bg-teal text-surface">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-forest"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between gap-6 px-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Guardianes y Guardianas del Río, inicio"
          onClick={() => setAbierto(false)}
        >
          <Logo size={56} />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg">Guardianes y Guardianas del Río</span>
            <span className="text-xs text-surface/75">Veeduría ciudadana · Popayán</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-surface/90 transition-colors hover:text-surface hover:underline hover:underline-offset-8"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/sumate"
            className="inline-flex h-11 items-center rounded-full bg-ember px-6 text-[15px] font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
          >
            Súmate
          </Link>

          {/* Menú móvil: hamburguesa visible por debajo de lg */}
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-11 place-items-center rounded-full text-surface transition-colors hover:bg-surface/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface lg:hidden"
          >
            {abierto ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="border-t border-surface/15 bg-teal lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-6 py-4 md:px-10">
            {navItems.map((item) => {
              const activo = ruta === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setAbierto(false)}
                    aria-current={activo ? 'page' : undefined}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-surface/90 transition-colors hover:bg-surface/10 hover:text-surface aria-[current=page]:bg-surface/10 aria-[current=page]:text-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
