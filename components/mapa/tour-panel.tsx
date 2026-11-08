'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cifrasVeeduria } from '@/lib/mapa-data'

/** Escenas del recorrido guiado: texto + centro del mapa + zoom. */
export const tourSteps = [
  {
    title: '¿De dónde viene el agua de Popayán?',
    text: `Los ríos gruesos del mapa son los cuatro amenazados por la minería: Cauca, Las Piedras, Molino y Pisojé, con su cauce real. El Pisojé (subcuenca de 1.885 hectáreas) es la fuente alterna del sistema Tablazo cuando baja el caudal en época seca.`,
    center: [2.44, -76.55] as [number, number],
    zoom: 12,
  },
  {
    title: 'La presión minera sobre la cuenca',
    text: `Cada punto naranja es una solicitud minera viabilizada; el número sobre cada río dice cuántos expedientes caen sobre su cuenca. Hoy hay ${cifrasVeeduria.titulosVigentes} títulos vigentes y ${cifrasVeeduria.solicitudesTramite} solicitudes en trámite (ANM, consulta del 10 de octubre de 2026).`,
    center: [2.46, -76.56] as [number, number],
    zoom: 11,
  },
  {
    title: 'El hallazgo: 53% de traslape',
    text: `La solicitud LBJ-11441 (57,9 ha, veredas El Sendero y El Hogar) se traslapa en un ${cifrasVeeduria.traslapeLBJ}% con las áreas que la Alcaldía y el Acueducto de Popayán reconocen como de interés para el recurso hídrico. Toca el pin naranja para ver su ficha.`,
    center: [2.4495, -76.5505] as [number, number],
    zoom: 13,
  },
  {
    title: 'El caso de Santa Bárbara',
    text: `En este corregimiento y la subcuenca del Pisojé hay ${cifrasVeeduria.titulosSantaBarbara} títulos mineros vigentes y al menos 7 solicitudes más en trámite. Varias caen sobre las zonas que abastecen de agua a la ciudad.`,
    center: [2.455, -76.551] as [number, number],
    zoom: 13,
  },
  {
    title: 'Explora libremente',
    text: 'Activa y desactiva capas, busca tu vereda o municipio, toca un río para saber qué aporta al acueducto y toca cualquier pin para conocer su expediente. Todas las fichas están en la sección Concesiones.',
    center: [2.45, -76.56] as [number, number],
    zoom: 12,
  },
]

export function TourPanel({
  step,
  onPrev,
  onNext,
  onClose,
}: {
  step: number
  onPrev: () => void
  onNext: () => void
  onClose: () => void
}) {
  const s = tourSteps[step]
  const last = step === tourSteps.length - 1

  return (
    <div
      role="dialog"
      aria-label="Recorrido guiado"
      className="absolute inset-x-4 bottom-4 z-[700] rounded-2xl border border-line bg-surface p-5 shadow-xl md:left-auto md:right-6 md:max-w-sm animate-in slide-in-from-bottom-4 fade-in duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Recorrido guiado · paso {step + 1} de {tourSteps.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar recorrido"
          className="-mr-1 -mt-1 grid size-8 shrink-0 place-items-center rounded-full text-forest transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-teal"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
      <h2 className="mt-2 text-xl">{s.title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-forest">{s.text}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex gap-1.5" aria-hidden="true">
          {tourSteps.map((_, i) => (
            <span
              key={i}
              className={`size-1.5 rounded-full ${i === step ? 'bg-ember' : 'bg-line'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {step > 0 && (
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex h-10 items-center gap-1 rounded-full border border-line px-4 text-sm font-semibold text-forest transition-colors hover:border-teal hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              Atrás
            </button>
          )}
          <button
            type="button"
            onClick={last ? onClose : onNext}
            className="inline-flex h-10 items-center gap-1 rounded-full bg-ember px-4 text-sm font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            {last ? 'Terminar' : 'Siguiente'}
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
