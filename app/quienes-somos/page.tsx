import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, Droplets, Flag, Mail, MapPinned, MessageCircle, Scale, Users } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { WHATSAPP } from '@/lib/contacto'
import { cifrasVeeduria } from '@/lib/mapa-data'

export const metadata: Metadata = {
  title: '¿Quiénes somos? · Guardianes y Guardianas del Río',
  description:
    'Veeduría Ambiental Guardianes y Guardianas de los Ríos Cauca, Las Piedras, Molino y Pisojé: veeduría ciudadana de Popayán constituida bajo la Ley 850 de 2003.',
}

const hitos = [
  {
    icon: Flag,
    titulo: 'Nos constituimos como veeduría',
    // TODO (equipo): completar la fecha real de constitución.
    texto:
      'Comunidades del oriente de Popayán conformamos la Veeduría Ambiental Guardianes y Guardianas de los Ríos Cauca, Las Piedras, Molino y Pisojé, bajo la Ley 850 de 2003 que regula las veedurías ciudadanas en Colombia.',
  },
  {
    icon: ClipboardList,
    titulo: 'Verificamos la información oficial',
    texto: `Cruzamos los expedientes de la ANM con la información de la Administración Municipal (Acta de Reunión N.° 001 del 25 de marzo de 2025) y medimos, con datos oficiales, que el polígono LBJ-11441 se traslapa en ${cifrasVeeduria.traslapeLBJ}% con áreas de interés hídrico.`,
  },
  {
    icon: Scale,
    titulo: 'Ejercemos control ciudadano',
    texto:
      'Radicamos derechos de petición ante la ANM y construimos un concepto jurídico que sustenta la incompatibilidad de varias solicitudes con el ordenamiento territorial, la protección del río Cauca como sujeto de derechos y el principio de precaución.',
  },
  {
    icon: Users,
    titulo: 'Trabajamos con las comunidades',
    texto:
      'Acompañamos a los acueductos comunitarios y a las juntas de acción comunal de Santa Bárbara, Las Piedras, El Sendero y demás veredas del oriente payanés con información clara y verificable.',
  },
]

export default function QuienesSomosPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="bg-paper pb-20 md:pb-28">
        <header className="relative isolate overflow-hidden">
          <div className="mx-auto w-full max-w-[1200px] px-6 pb-8 pt-10 md:px-10">
            <h1 className="text-4xl md:text-5xl">¿Quiénes somos?</h1>
            <p className="mt-3 max-w-2xl text-lg text-ink-soft">
              Somos una veeduría ciudadana ambiental de Popayán, Cauca, constituida bajo la
              Ley 850 de 2003. Vigilamos que la actividad minera no comprometa el agua de
              los ríos Cauca, Las Piedras, Molino y Pisojé.
            </p>
          </div>
          {/* Gráfica complementaria oficial del territorio (Manual de Identidad) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[420px] opacity-[0.13] md:block">
            <Image src="/identidad/ilustraciones-verdes.webp" alt="" fill sizes="420px" className="object-contain object-right" />
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
            <aside className="h-fit rounded-2xl border border-line bg-surface p-8">
              <h2 className="text-2xl">Cómo trabajamos</h2>
              <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-forest">
                <li className="flex gap-3">
                  <Droplets className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  Verificamos información oficial (ANM, Alcaldía, CRC) y la traducimos a
                  lenguaje ciudadano.
                </li>
                <li className="flex gap-3">
                  <MapPinned className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  Georreferenciamos expedientes y cruzamos su ubicación con las fuentes
                  hídricas que abastecen a Popayán.
                </li>
                <li className="flex gap-3">
                  <Scale className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  Ejercemos control ciudadano con acciones jurídicas: derechos de petición,
                  observaciones a trámites y articulación con autoridades.
                </li>
                <li className="flex gap-3">
                  <Users className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  Devolvemos la información a las comunidades del territorio con medios
                  sencillos: mapas guiados, fichas y láminas para WhatsApp.
                </li>
              </ul>
              <Link
                href="/exigimos"
                className="mt-6 inline-flex h-12 items-center rounded-full bg-ember px-6 font-semibold text-surface transition-colors hover:bg-[#a83d0e]"
              >
                Nuestra propuesta política
              </Link>
            </aside>

            <section aria-labelledby="historial-title">
              <h2 id="historial-title" className="text-2xl">
                Nuestro historial
              </h2>
              <ol className="mt-6 space-y-6 border-l-2 border-line pl-6">
                {hitos.map(({ icon: Icon, titulo, texto }) => (
                  <li key={titulo} className="relative">
                    <span className="absolute -left-[37px] grid size-10 place-items-center rounded-full border-2 border-paper bg-mist text-teal">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="text-xl">{titulo}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{texto}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Motivos de la gráfica complementaria oficial: plantas, alimentos,
              animales y oficios del territorio. */}
          <section aria-label="El territorio que defendemos" className="mt-16">
            <h2 className="text-2xl">El territorio que defendemos</h2>
            <div className="mt-6 grid grid-cols-2 items-end gap-6 rounded-2xl border border-line bg-surface p-8 sm:grid-cols-4">
              {[
                { src: '/identidad/motivos/venado-azul.png', nombre: 'El venado' },
                { src: '/identidad/motivos/zarigueya-azul.png', nombre: 'La zarigüeya' },
                { src: '/identidad/motivos/armadillo-azul.png', nombre: 'El armadillo' },
                { src: '/identidad/motivos/ave-azul.png', nombre: 'El ave' },
              ].map(({ src, nombre }) => (
                <figure key={src} className="flex flex-col items-center gap-3">
                  <Image
                    src={src}
                    alt={nombre}
                    width={220}
                    height={220}
                    sizes="(min-width: 640px) 200px, 40vw"
                    className="h-auto w-full max-w-[200px]"
                  />
                  <figcaption className="font-display text-lg text-forest">{nombre}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 font-display text-xl text-teal">
              Cuidar el territorio y el agua es cuidarlos a ellos también.
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Dibujos de la gráfica complementaria oficial, hechos por la comunidad:
              la fauna que vive en las cuencas del Cauca, Las Piedras, Molino y Pisojé.
            </p>
          </section>

          <section className="mt-16 rounded-2xl bg-mist p-8 md:p-10">
            <h2 className="text-3xl">Contáctanos</h2>
            <p className="mt-2 max-w-2xl text-ink-soft">
              La veeduría es abierta: cualquier persona puede sumarse o enviarnos
              información del territorio.
            </p>
            {/* TODO (equipo): correo, WhatsApp y redes reales de la veeduría. */}
            <ul className="mt-6 flex flex-wrap gap-4">
              <li>
                <a
                  href="mailto:contacto@guardianesdelrio.org"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-surface px-6 font-semibold text-forest transition-colors hover:bg-paper"
                >
                  <Mail className="size-5 text-teal" aria-hidden="true" />
                  contacto@guardianesdelrio.org
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-surface px-6 font-semibold text-forest transition-colors hover:bg-paper"
                >
                  <MessageCircle className="size-5 text-teal" aria-hidden="true" />
                  WhatsApp de la veeduría
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              Síguenos en nuestras redes (próximamente) o escríbenos para llevar la
              veeduría a tu asamblea o acueducto.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
