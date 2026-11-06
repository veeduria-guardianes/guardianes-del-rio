
import Link from 'next/link'

/**
 * Hitos de la veeduría. El primero tiene fecha verificada (Acta de
 * Concertación N.° 001). Los demás esperan fecha del equipo de comunicación.
 */
const news = [
  {
    category: 'Audiencia pública · 25 de marzo de 2025',
    title:
      'ANM y Alcaldía cruzaron en Popayán la información minera con los usos del suelo',
    href: '/acta-coordinacion',
  },
  {
    category: 'Incidencia',
    title: 'Radicamos derecho de petición ante la ANM por las solicitudes mineras del Pisojé',
  },
  {
    category: 'Comunidad',
    title:
      'Comunidades del oriente de Popayán se pronuncian por la protección de los ríos Pisojé y Las Piedras',
  },
]

export function News() {
  return (
    <section
      id="noticias"
      aria-labelledby="noticias-title"
      className="relative isolate scroll-mt-4 overflow-hidden bg-mist py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <h2 id="noticias-title" className="text-4xl md:text-5xl">
          Últimas noticias
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex h-full flex-col rounded-2xl bg-surface p-7 transition-shadow hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-teal">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-xl">{item.title}</h3>
                  <span className="mt-auto pt-6 text-sm font-semibold text-teal">
                    Leer el acta →
                  </span>
                </Link>
              ) : (
                <article className="flex h-full flex-col rounded-2xl bg-surface p-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-xl">{item.title}</h3>
                  <span className="mt-auto pt-6 text-sm text-ink-soft">
                    Boletín de la veeduría
                  </span>
                </article>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
