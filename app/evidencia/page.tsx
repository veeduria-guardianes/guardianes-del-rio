import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpenText,
  Download,
  FileText,
  Gavel,
  Image,
  Scale,
  ScrollText,
  ShieldAlert,
} from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { HelpTip } from '@/components/site/help-tip'

export const metadata: Metadata = {
  title: 'La evidencia · Guardianes y Guardianas del Río',
  description:
    'Base jurídica y técnica de la veeduría: los tres ejes del concepto jurídico, las normas aplicables, las sentencias que nos respaldan y los documentos descargables.',
}

const ejes = [
  {
    icon: MapIcon,
    titulo: 'Incompatibilidad con el ordenamiento territorial',
    texto:
      'El POT de Popayán (Acuerdo 006 de 2002) clasifica suelos de protección y conservación sobre los que recaen varias solicitudes. La ANM no puede ignorar las determinantes ambientales de superior jerarquía (art. 10, Ley 388 de 1997) ni las zonas excluibles y restringidas de los artículos 34 y 35 del Código de Minas.',
    detalle:
      'Caso probado: LBJ-11441, sobre predios adquiridos por el municipio para protección hídrica, con 53% de traslape.',
  },
  {
    icon: WavesIcon,
    titulo: 'El río Cauca como sujeto de derechos',
    texto:
      'La Sentencia T-038 de 2019 reconoce una protección reforzada del río Cauca y sus ecosistemas asociados. Las decisiones no pueden limitarse al polígono: deben atender la unidad ambiental funcional de la cuenca, incluidas especies como la Pava Caucana y la Nutria Neotropical.',
    detalle: null,
  },
  {
    icon: ShieldAlert,
    titulo: 'Prevención y precaución ante impactos acumulativos',
    texto:
      'Con 19 títulos y 17 solicitudes sobre cuencas conectadas, evaluar cada expediente por separado oculta el efecto total. La Ley 99 de 1993 (art. 1.6) y la Ley 1523 de 2012 obligan a valorar los impactos acumulativos y sinérgicos antes de decidir.',
    detalle: null,
  },
]

const normas = [
  { norma: 'Constitución Política', arts: 'Arts. 79, 80, 88 y 95' },
  { norma: 'Ley 99 de 1993', arts: 'Principios ambientales, principio de precaución' },
  { norma: 'Ley 388 de 1997', arts: 'Art. 10: determinantes de ordenamiento territorial' },
  { norma: 'Ley 685 de 2001 (Código de Minas)', arts: 'Arts. 34 y 35: zonas excluibles y restringidas' },
  { norma: 'Ley 1523 de 2012', arts: 'Gestión del riesgo y cambio climático' },
  { norma: 'Ley 2273 de 2022', arts: 'Acuerdo de Escazú: acceso a la información y participación' },
]

const sentencias = [
  'C-123 de 2014 · Armonización minería-ambiente',
  'C-035 de 2016 · Competencias territoriales',
  'C-273 de 2016 · Zonas excluibles de minería',
  'C-389 de 2016 · Consulta previa',
  'SU-095 de 2018 · Municipios y minería',
  'T-038 de 2019 · Río Cauca, protección reforzada',
]

const descargables = [
  {
    icon: FileText,
    titulo: 'Concepto jurídico de la veeduría',
    texto: 'Los tres ejes completos en un PDF para citar, imprimir o anexar a un derecho de petición.',
    href: '/documentos/concepto-juridico.pdf',
    cta: 'Descargar PDF',
  },
  {
    icon: ScrollText,
    titulo: 'Acta de Concertación N.° 001 (25-mar-2025)',
    texto: 'El acta de la Audiencia Pública Minera ANM–Alcaldía: qué se acordó, los compromisos y el dato clave del acueducto.',
    href: '/acta-coordinacion',
    cta: 'Ver el acta',
  },
  {
    icon: Image,
    titulo: 'Lámina: el 53% de traslape',
    texto: 'Imagen lista para compartir por WhatsApp sobre el caso LBJ-11441.',
    href: '/laminas/traslape-53.svg',
    cta: 'Descargar lámina',
  },
  {
    icon: Image,
    titulo: 'Lámina: la presión minera',
    texto: '19 títulos, 17 solicitudes y 8 viabilizadas en una sola imagen.',
    href: '/laminas/presion-minera.svg',
    cta: 'Descargar lámina',
  },
  {
    icon: Image,
    titulo: 'Lámina: Santa Bárbara',
    texto: 'El caso del corregimiento y la subcuenca del Pisojé.',
    href: '/laminas/santa-barbara.svg',
    cta: 'Descargar lámina',
  },
]

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return <BookOpenText {...props} />
}
function WavesIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Scale {...props} />
}

export default function EvidenciaPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="bg-paper pb-20 md:pb-28">
        <header className="mx-auto w-full max-w-[1200px] px-6 pb-8 pt-10 md:px-10">
          <h1 className="text-4xl md:text-5xl">La evidencia</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Todo lo que afirmamos tiene respaldo en normas, sentencias y datos oficiales.
            Aquí está la base jurídica en lenguaje claro, y los documentos para citar.
          </p>
        </header>

        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <ul className="grid gap-6 lg:grid-cols-3">
            {ejes.map(({ icon: Icon, titulo, texto, detalle }) => (
              <li key={titulo} className="flex flex-col rounded-2xl border border-line bg-surface p-8">
                <span className="grid size-12 place-items-center rounded-full bg-mist text-teal">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl">{titulo}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{texto}</p>
                {detalle && (
                  <p className="mt-auto pt-4 text-sm font-medium text-forest">{detalle}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="rounded-2xl border border-line bg-surface p-8">
              <h2 className="flex items-center gap-2 text-2xl">
                <Gavel className="size-6 text-teal" strokeWidth={1.75} aria-hidden="true" />
                Normas que aplicamos
              </h2>
              <ul className="mt-5 divide-y divide-line">
                {normas.map(({ norma, arts }) => (
                  <li key={norma} className="flex flex-wrap justify-between gap-2 py-3">
                    <span className="font-semibold text-forest">{norma}</span>
                    <span className="text-sm text-ink-soft">{arts}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-line bg-surface p-8">
              <h2 className="flex items-center gap-2 text-2xl">
                <Scale className="size-6 text-teal" strokeWidth={1.75} aria-hidden="true" />
                Jurisprudencia que nos respalda
              </h2>
              <ul className="mt-5 space-y-3">
                {sentencias.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[15px] text-forest">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                <HelpTip termino="¿Cómo usar estas sentencias?">
                  Son decisiones de la Corte Constitucional que fijan límites a la actividad
                  minera frente al ambiente y el territorio. Sirven para sustentar derechos
                  de petición y observaciones a los trámites.
                </HelpTip>
              </p>
            </section>
          </div>

          <section id="descargables" className="mt-12 scroll-mt-4 rounded-2xl bg-mist p-8 md:p-10">
            <h2 className="text-3xl">Descargables</h2>
            <p className="mt-2 max-w-2xl text-ink-soft">
              Comparte esta información: cada lámina lleva su fuente y la dirección del
              sitio. Úsalas en tus grupos de WhatsApp, asambleas y clases.
            </p>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {descargables.map(({ icon: Icon, titulo, texto, href, cta }) => (
                <li key={titulo}>
                  <a
                    href={href}
                    download
                    className="group flex h-full gap-4 rounded-2xl border border-teal/15 bg-surface p-6 transition-colors hover:border-teal/50"
                  >
                    <Icon className="mt-1 size-7 shrink-0 text-teal" strokeWidth={1.5} aria-hidden="true" />
                    <span className="flex flex-col gap-1.5">
                      <span className="font-display text-xl text-forest">{titulo}</span>
                      <span className="text-sm text-ink-soft">{texto}</span>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-semibold text-teal">
                        <Download className="size-4" aria-hidden="true" />
                        {cta}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-10 text-center">
            <Link
              href="/concesiones"
              className="inline-flex items-center gap-2 font-semibold text-teal underline-offset-4 hover:underline"
            >
              Ver las fichas de cada expediente
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
