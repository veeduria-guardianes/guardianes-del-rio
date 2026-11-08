'use client'

import { useId, useState } from 'react'
import {
  ChevronDown,
  Droplets,
  FileCheck2,
  FileClock,
  MapPin,
  Pickaxe,
  Search,
  SlidersHorizontal,
  Trees,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import { municipalities, type LayerId, type Municipality } from '@/lib/mapa-data'
import { HelpTip } from '@/components/site/help-tip'

const layers: { id: LayerId; label: string; icon: LucideIcon }[] = [
  { id: 'rios', label: 'Ríos amenazados', icon: Waves },
  { id: 'viabilizadas', label: 'Solicitudes viabilizadas', icon: FileCheck2 },
  { id: 'tramite', label: 'Solicitudes en trámite', icon: FileClock },
  { id: 'otorgados', label: 'Títulos otorgados', icon: Pickaxe },
  { id: 'acueductos', label: 'Acueductos y captaciones', icon: Droplets },
  { id: 'protegidas', label: 'Áreas de interés hídrico', icon: Trees },
]

const legend = [
  { label: 'Río amenazado por minería (⋅ expedientes)', swatch: <span className="h-1.5 w-6 rounded-full bg-[#3f8fcf] ring-2 ring-white" /> },
  { label: 'Solicitud viabilizada', swatch: <span className="size-3.5 rounded-full bg-ember ring-2 ring-surface" /> },
  { label: 'Solicitud en trámite', swatch: <span className="size-3.5 rounded-full bg-peach ring-2 ring-surface" /> },
  { label: 'Título otorgado', swatch: <span className="size-3.5 rounded-full bg-[#c94f13] ring-2 ring-surface" /> },
  { label: 'Acueducto / captación', swatch: <span className="size-3 rounded-full bg-water ring-2 ring-surface" /> },
  {
    label: 'Área de interés hídrico',
    swatch: <span className="h-3 w-5 rounded-sm border-2 border-dashed border-[#6f9a1f] bg-lime/40" />,
  },
]

type ControlPanelProps = {
  activeLayers: Record<LayerId, boolean>
  onToggle: (id: LayerId) => void
  onGoTo: (municipality: Municipality) => void
}

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
}

export function ControlPanel({ activeLayers, onToggle, onGoTo }: ControlPanelProps) {
  const [query, setQuery] = useState('')
  const [current, setCurrent] = useState<string | null>(null)
  const [abiertoMovil, setAbiertoMovil] = useState(false)
  const searchId = useId()

  const matches = municipalities.filter((m) => normalize(m.name).includes(normalize(query)))

  function go(m: Municipality) {
    setCurrent(m.name)
    setQuery(m.name)
    onGoTo(m)
  }

  return (
    <aside
      aria-label="Controles del mapa"
      className="flex flex-col border-line bg-surface lg:overflow-y-auto lg:border-r"
    >
      {/* En móvil el panel se pliega para que el mapa sea protagonista;
          en escritorio (lg+) siempre está visible. */}
      <button
        type="button"
        onClick={() => setAbiertoMovil((v) => !v)}
        aria-expanded={abiertoMovil}
        aria-controls="panel-controles-mapa"
        className="flex h-12 w-full items-center justify-between gap-2 border-b border-line px-5 text-sm font-semibold text-forest transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-teal lg:hidden"
      >
        <span className="inline-flex items-center gap-2">
          <SlidersHorizontal className="size-4 text-teal" aria-hidden="true" />
          Capas, leyenda y búsqueda
        </span>
        <ChevronDown
          className={`size-4 text-ink-soft transition-transform ${abiertoMovil ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id="panel-controles-mapa"
        className={`${abiertoMovil ? 'flex' : 'hidden'} flex-col gap-8 p-6 pt-4 lg:flex lg:p-6`}
      >
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <HelpTip termino="Capas">
            Activa o desactiva la información que ves sobre el mapa. Cada capa es un tipo
            de dato: minero, hídrico o de protección.
          </HelpTip>
        </legend>
        <ul className="flex flex-col gap-1">
          {layers.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-teal">
                <input
                  type="checkbox"
                  checked={activeLayers[id]}
                  onChange={() => onToggle(id)}
                  className="size-[18px] shrink-0 cursor-pointer accent-teal"
                />
                <Icon className="size-[18px] shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-[15px] font-medium text-forest">{label}</span>
              </label>
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-lg bg-paper px-3 py-2 text-xs leading-relaxed text-ink-soft">
          Los títulos otorgados se muestran apenas la ANM entregue los polígonos
          oficiales de los 19 títulos vigentes.
        </p>
      </fieldset>

      <section aria-labelledby="leyenda-title">
        <h2
          id="leyenda-title"
          className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
        >
          Leyenda
        </h2>
        <ul className="flex flex-col gap-2.5 rounded-xl border border-line bg-paper p-4">
          {legend.map((item) => (
            <li key={item.label} className="flex items-center gap-3 text-sm text-forest">
              <span className="flex w-5 justify-center" aria-hidden="true">
                {item.swatch}
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${searchId}-title`}>
        <h2
          id={`${searchId}-title`}
          className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
        >
          Buscar municipio o corregimiento
        </h2>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-soft"
            aria-hidden="true"
          />
          <label htmlFor={searchId} className="sr-only">
            Nombre del municipio
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            placeholder="Ej. Santa Bárbara"
            autoComplete="off"
            onChange={(e) => {
              setQuery(e.target.value)
              setCurrent(null)
            }}
            onKeyDown={(e) => {
              if (e.key !== 'Enter' || e.nativeEvent.isComposing || e.keyCode === 229) return
              if (matches[0]) go(matches[0])
            }}
            className="h-11 w-full rounded-full border border-line bg-paper pl-9 pr-4 text-[15px] text-forest placeholder:text-ink-soft/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25"
          />
        </div>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Municipios">
          {matches.map((m) => (
            <li key={m.name}>
              <button
                type="button"
                onClick={() => go(m)}
                aria-pressed={current === m.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-forest transition-colors hover:border-teal hover:text-teal aria-pressed:border-teal aria-pressed:bg-teal aria-pressed:text-surface"
              >
                <MapPin className="size-3.5" aria-hidden="true" />
                {m.name}
              </button>
            </li>
          ))}
          {matches.length === 0 && (
            <li className="text-sm text-ink-soft">No hay municipios con ese nombre en la cuenca.</li>
          )}
        </ul>
      </section>
      </div>
    </aside>
  )
}
