'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import { PlayCircle } from 'lucide-react'
import { ControlPanel } from '@/components/mapa/control-panel'
import { DetailPanel } from '@/components/mapa/detail-panel'
import { TourPanel, tourSteps } from '@/components/mapa/tour-panel'
import { concessions, type LatLng, type LayerId, type Municipality } from '@/lib/mapa-data'

const LeafletMap = dynamic(() => import('@/components/mapa/leaflet-map'), {
  ssr: false,
  loading: () => (
    <div className="grid size-full place-items-center bg-mist text-sm text-ink-soft">Cargando mapa…</div>
  ),
})

const initialLayers: Record<LayerId, boolean> = {
  otorgados: true,
  viabilizadas: true,
  tramite: true,
  rios: true,
  acueductos: true,
  protegidas: true,
}

export function MapExplorer() {
  const [activeLayers, setActiveLayers] = useState(initialLayers)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [focus, setFocus] = useState<{ center: LatLng; zoom: number; key: number } | null>(null)
  const [tourStep, setTourStep] = useState<number | null>(null)

  const selected = concessions.find((c) => c.id === selectedId) ?? null
  const close = useCallback(() => setSelectedId(null), [])

  function toggle(id: LayerId) {
    setActiveLayers((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function goTo(m: Municipality) {
    setFocus({ center: m.center, zoom: 12, key: Date.now() })
  }

  function select(id: string) {
    setSelectedId(id)
    const c = concessions.find((item) => item.id === id)
    if (c) setFocus({ center: c.position, zoom: 12, key: Date.now() })
  }

  // Permite enlazar a un expediente concreto: /mapa?expediente=lbj-11441
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('expediente')
    if (param && concessions.some((c) => c.id === param)) {
      select(param)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (tourStep === null) return
    const s = tourSteps[tourStep]
    setFocus({ center: s.center, zoom: s.zoom, key: Date.now() })
  }, [tourStep])

  return (
    <section
      aria-label="Mapa interactivo"
      className={`grid border-y border-line lg:h-[calc(100dvh-265px)] lg:min-h-[560px] lg:grid-cols-[300px_1fr] ${
        selected ? 'xl:grid-cols-[300px_1fr_380px]' : ''
      }`}
    >
      <ControlPanel activeLayers={activeLayers} onToggle={toggle} onGoTo={goTo} />

      <div className="relative h-[70vh] min-h-[420px] lg:h-full">
        <LeafletMap activeLayers={activeLayers} selectedId={selectedId} focus={focus} onSelect={select} />

        <button
          type="button"
          onClick={() => setTourStep(tourStep === null ? 0 : tourStep)}
          className="absolute left-4 top-4 z-[700] inline-flex h-11 items-center gap-2 rounded-full bg-surface px-5 text-sm font-semibold text-forest shadow-md transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <PlayCircle className="size-5 text-ember" strokeWidth={1.75} aria-hidden="true" />
          Recorrido guiado
        </button>

        {tourStep !== null && (
          <TourPanel
            step={tourStep}
            onPrev={() => setTourStep((s) => Math.max(0, (s ?? 0) - 1))}
            onNext={() => setTourStep((s) => Math.min(tourSteps.length - 1, (s ?? 0) + 1))}
            onClose={() => setTourStep(null)}
          />
        )}

        {!selected && tourStep === null && (
          <p className="pointer-events-none absolute bottom-6 left-1/2 z-[500] -translate-x-1/2 rounded-full bg-forest/90 px-4 py-2 text-center text-sm text-surface shadow-md">
            Toca un pin naranja o durazno para ver el expediente minero
          </p>
        )}
        {selected && (
          <div className="absolute inset-y-0 right-0 z-[600] w-[min(380px,100%)] shadow-xl xl:hidden">
            <DetailPanel concession={selected} onClose={close} />
          </div>
        )}
      </div>

      {selected && (
        <div className="hidden xl:block xl:min-h-0">
          <DetailPanel concession={selected} onClose={close} />
        </div>
      )}
    </section>
  )
}
