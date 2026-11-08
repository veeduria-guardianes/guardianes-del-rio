import { BookOpenText, CalendarClock, Database } from 'lucide-react'

const notes = [
  {
    icon: BookOpenText,
    title: 'Cómo leer el mapa',
    text: 'Cada pin es una solicitud minera; las zonas verdes punteadas son áreas de interés hídrico reconocidas por el Acueducto de Popayán. Si un pin cae dentro de una zona verde, esa fuente de agua queda en riesgo.',
  },
  {
    icon: Database,
    title: 'De dónde salen los datos',
    text: 'Solicitudes mineras: ANM, sistema AnnA Minería (consulta del 10 de octubre de 2026), según el mapa oficial elaborado en QGIS. Fuentes hídricas: AAPSA — Acueducto de Popayán, Fundación Procuenca Río Las Piedras y Enciclopedia Banrepcultural.',
  },
  {
    icon: CalendarClock,
    title: 'Última actualización',
    text: 'Noviembre de 2026. Las posiciones siguen los polígonos del mapa oficial; al cargar la Celda Minera de la ANM pasaremos a las geometrías exactas.',
  },
]

export function MapNotes() {
  return (
    <section aria-label="Notas sobre el mapa" className="bg-paper py-10">
      <ul className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 md:grid-cols-3 md:px-10">
        {notes.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mist text-teal">
              <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-sans text-base font-semibold text-forest">{title}</h2>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
