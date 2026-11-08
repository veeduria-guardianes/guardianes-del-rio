import type { ReactNode } from 'react'
import { CircleHelp } from 'lucide-react'

/**
 * Tooltip pedagógico: término con subrayado punteado que muestra una
 * explicación breve al pasar el cursor o enfocar (accesible por teclado).
 */
export function HelpTip({ termino, children }: { termino: string; children: ReactNode }) {
  return (
    <span className="group relative inline-flex cursor-help items-center gap-1">
      <span className="underline decoration-dotted underline-offset-4">{termino}</span>
      <CircleHelp className="size-3.5 text-ink-soft/70" strokeWidth={2} aria-hidden="true" />
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-[1200] mb-2 w-64 -translate-x-1/2 rounded-xl bg-forest p-3 text-sm font-normal leading-relaxed text-surface opacity-0 shadow-lg transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100"
      >
        {children}
      </span>
      <span className="sr-only">: {typeof children === 'string' ? children : ''}</span>
    </span>
  )
}
