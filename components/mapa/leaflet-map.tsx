'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useMemo } from 'react'
import { MapContainer, Marker, Polygon, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet'
import {
  MAP_CENTER,
  MAP_ZOOM,
  aqueducts,
  concessions,
  expedientesPorRio,
  layerColors,
  protectedZones,
  rivers,
  type LatLng,
  type LayerId,
} from '@/lib/mapa-data'

type LeafletMapProps = {
  activeLayers: Record<LayerId, boolean>
  selectedId: string | null
  focus: { center: LatLng; zoom: number; key: number } | null
  onSelect: (id: string) => void
}

function pinIcon(color: string, { selected = false, small = false } = {}) {
  const size = small ? 16 : selected ? 34 : 26
  return L.divIcon({
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:9999px;background:${color};border:3px solid #fffdf8;box-shadow:0 0 0 ${selected ? 3 : 1}px ${selected ? '#225130' : 'rgba(34,81,48,.35)'},0 2px 6px rgba(31,58,42,.3);transition:all .15s"></span>`,
  })
}

/** Etiqueta permanente de un río: nombre + expedientes mineros sobre su cuenca. */
function rioEtiqueta(nombre: string, expedientes: number) {
  const ancho = Math.max(nombre.length, 16) * 7.2 + (expedientes ? 52 : 8)
  return L.divIcon({
    className: '',
    iconSize: [ancho, 22],
    iconAnchor: [ancho / 2, 11],
    html: `<span class="rio-etiqueta">${nombre}${expedientes ? ` <b>${expedientes}</b> <span aria-hidden="true">⛏</span>` : ''}</span>`,
  })
}

/** Punto medio de un cauce para ubicar su etiqueta. */
function puntoMedio(path: LatLng[]): LatLng {
  return path[Math.floor(path.length / 2)]
}

function ResizeWatcher() {
  const map = useMap()
  useEffect(() => {
    const observer = new ResizeObserver(() => map.invalidateSize())
    observer.observe(map.getContainer())
    return () => observer.disconnect()
  }, [map])
  return null
}

function FocusController({ focus }: { focus: LeafletMapProps['focus'] }) {
  const map = useMap()
  useEffect(() => {
    if (focus) map.flyTo(focus.center, focus.zoom, { duration: 0.8 })
  }, [focus, map])
  return null
}

export default function LeafletMap({ activeLayers, selectedId, focus, onSelect }: LeafletMapProps) {
  const icons = useMemo(
    () => ({
      otorgado: pinIcon(layerColors.otorgados),
      otorgadoSel: pinIcon(layerColors.otorgados, { selected: true }),
      viabilizada: pinIcon(layerColors.viabilizadas),
      viabilizadaSel: pinIcon(layerColors.viabilizadas, { selected: true }),
      tramite: pinIcon(layerColors.tramite),
      tramiteSel: pinIcon(layerColors.tramite, { selected: true }),
      agua: pinIcon(layerColors.acueductos, { small: true }),
      protegida: pinIcon(layerColors.protegidas, { small: true }),
    }),
    [],
  )

  function layerOf(status: string): LayerId {
    if (status === 'Título vigente') return 'otorgados'
    if (status === 'Viabilizada') return 'viabilizadas'
    return 'tramite'
  }

  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={MAP_ZOOM}
      minZoom={9}
      scrollWheelZoom
      className="size-full bg-mist"
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        className="map-tiles-soft"
      />
      <ResizeWatcher />
      <FocusController focus={focus} />

      {activeLayers.protegidas &&
        protectedZones.map((zone) => (
          <Polygon
            key={zone.id}
            positions={zone.area}
            pathOptions={{ color: '#6f9a1f', weight: 2, fillColor: layerColors.protegidas, fillOpacity: 0.3, dashArray: '6 4' }}
          >
            <Tooltip sticky>{zone.name}</Tooltip>
          </Polygon>
        ))}

      {activeLayers.rios &&
        rivers.map((river) => {
          const esCauca = river.id === 'cauca'
          const peso = esCauca ? 8 : 5.5
          const n = expedientesPorRio(river.name.replace('Río ', ''))
          return (
            <Polyline
              key={river.id}
              positions={river.path}
              pathOptions={{ color: '#fffdf8', weight: peso + 4, opacity: 0.9, lineCap: 'round' }}
            />
          )
        })}
      {activeLayers.rios &&
        rivers.map((river) => {
          const esCauca = river.id === 'cauca'
          const peso = esCauca ? 8 : 5.5
          const n = expedientesPorRio(river.name.replace('Río ', ''))
          return (
            <Polyline
              key={`${river.id}-principal`}
              positions={river.path}
              pathOptions={{
                color: esCauca ? '#2f7fb8' : '#3f8fcf',
                weight: peso,
                opacity: 0.95,
                lineCap: 'round',
              }}
            >
              <Tooltip sticky>
                <b>{river.name}</b>
                <br />
                {river.rol}
                {n > 0 && (
                  <>
                    <br />
                    <b>{n} expediente{n > 1 ? 's' : ''} minero{n > 1 ? 's' : ''} sobre su cuenca</b>
                  </>
                )}
              </Tooltip>
            </Polyline>
          )
        })}
      {activeLayers.rios &&
        rivers.map((river) => {
          const n = expedientesPorRio(river.name.replace('Río ', ''))
          return (
            <Marker
              key={`${river.id}-etiqueta`}
              position={puntoMedio(river.path)}
              icon={rioEtiqueta(river.name, n)}
              interactive
              zIndexOffset={-800}
              eventHandlers={{
                click: (e) => {
                  L.popup()
                    .setLatLng(e.latlng)
                    .setContent(
                      `<b>${river.name}</b><br/>${river.rol}${n > 0 ? `<br/><b>${n} expediente${n > 1 ? 's' : ''} minero${n > 1 ? 's' : ''} sobre su cuenca</b>` : ''}`,
                    )
                    .openOn(e.target._map)
                },
              }}
            />
          )
        })}

      {activeLayers.protegidas &&
        protectedZones.map((zone) => (
          <Marker key={`${zone.id}-pin`} position={zone.center} icon={icons.protegida} keyboard={false}>
            <Tooltip direction="top" offset={[0, -8]}>
              {zone.name}
            </Tooltip>
          </Marker>
        ))}

      {activeLayers.acueductos &&
        aqueducts.map((aq) => (
          <Marker key={aq.id} position={aq.position} icon={icons.agua} keyboard={false}>
            <Tooltip direction="top" offset={[0, -8]}>
              {aq.name} · {aq.families} familias
            </Tooltip>
          </Marker>
        ))}

      {concessions
        .filter((c) => activeLayers[layerOf(c.status)])
        .map((c) => {
          const selected = c.id === selectedId
          const isOtorgado = c.status === 'Título vigente'
          const isViabilizada = c.status === 'Viabilizada'
          const icon = isOtorgado
            ? selected
              ? icons.otorgadoSel
              : icons.otorgado
            : isViabilizada
              ? selected
                ? icons.viabilizadaSel
                : icons.viabilizada
              : selected
                ? icons.tramiteSel
                : icons.tramite
          return (
            <Marker
              key={c.id}
              position={c.position}
              icon={icon}
              title={`${c.name} (${c.status})`}
              zIndexOffset={selected ? 1000 : 500}
              eventHandlers={{ click: () => onSelect(c.id) }}
            >
              <Tooltip direction="top" offset={[0, -14]}>
                {c.name} · {c.status}
              </Tooltip>
            </Marker>
          )
        })}
    </MapContainer>
  )
}
