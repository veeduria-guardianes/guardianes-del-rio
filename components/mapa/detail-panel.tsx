'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Ruler, TriangleAlert, User, Waves, X } from 'lucide-react'
import type { Concession } from '@/lib/mapa-data'
import { HelpTip } from '@/components/site/help-tip'

type DetailPanelProps = {
  concession: Concession
  onClose: () => void
}

const toneByStatus: Record<string, string> = {
  'Título vigente': 'bg-[#c94f13] text-surface',
  Viabilizada: 'bg-ember text-surface',
  'Solicitud vigente': 'bg-peach text-forest',
}

export function DetailPanel({ concession, onClose }: DetailPanelProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [concession.id, onClose])

  return (
    <aside
      aria-labelledby="detalle-title"
      className="flex h-full flex-col overflow-y-auto border-line bg-surface animate-in slide-in-from-right-8 fade-in duration-200 lg:border-l"
    >
      <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
        <div>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneByStatus[concession.status]}`}
          >
            <HelpTip termino={concession.status}>
              {concession.status === 'Viabilizada'
                ? 'La ANM encontró viables sus componentes técnico, jurídico, económico y ambiental. No es una autorización para minar, pero sí un paso avanzado del trámite.'
                : 'Expediente abierto ante la ANM que aún no ha sido resuelto.'}
            </HelpTip>
          </span>
          <h2 id="detalle-title" className="mt-3 text-2xl">
            {concession.name}
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            {concession.municipio}, Cauca ·{' '}
            {concession.tipoPersona === 'natural' ? 'Persona natural' : 'Empresa'}
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle"
          className="-mr-2 grid size-9 shrink-0 place-items-center rounded-full text-forest transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-teal"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <dl className="flex flex-col divide-y divide-line px-6">
        <div className="flex items-start gap-3 py-4">
          <User className="mt-0.5 size-[18px] shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Titular</dt>
            <dd className="font-medium text-forest">{concession.titular}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3 py-4">
          <Ruler className="mt-0.5 size-[18px] shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Área</dt>
            <dd className="font-medium text-forest">
              {concession.hectares.toLocaleString('es-CO')} hectáreas
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-3 py-4">
          <MapPin className="mt-0.5 size-[18px] shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Veredas</dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {concession.veredas.map((v) => (
                <span key={v} className="rounded-full bg-mist px-2.5 py-0.5 text-sm font-medium text-teal">
                  {v}
                </span>
              ))}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-3 py-4">
          <Waves className="mt-0.5 size-[18px] shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-ink-soft">Ríos que pueden afectarse</dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {concession.rivers.map((r) => (
                <span key={r} className="rounded-full bg-mist px-2.5 py-0.5 text-sm font-medium text-teal">
                  {r}
                </span>
              ))}
            </dd>
          </div>
        </div>
      </dl>

      {concession.traslapePct && (
        <p className="mx-6 mt-2 flex items-start gap-2 rounded-xl bg-peach/40 px-4 py-3 text-sm font-medium text-forest">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            <HelpTip termino={`Traslape del ${concession.traslapePct}%`}>
              Parte del polígono solicitado coincide con zonas que la Alcaldía y el
              Acueducto de Popayán reconocen como de interés para el recurso hídrico.
            </HelpTip>{' '}
            con áreas de interés hídrico reconocidas por la Alcaldía y el Acueducto de Popayán.
          </span>
        </p>
      )}

      <div className="mx-6 mt-2 rounded-xl bg-paper p-4">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
          En pocas palabras
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-forest">{concession.summary}</p>
        <p className="mt-3 text-xs text-ink-soft">Fuente: {concession.fuente}.</p>
      </div>

      <p className="mx-6 mt-3 text-xs text-ink-soft">
        Ubicación aproximada mientras cargamos los polígonos oficiales de la ANM.
      </p>

      <div className="mt-auto p-6">
        <Link
          href={`/concesiones/${concession.id}`}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ember font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          Ver ficha completa
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  )
}
