import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Download,
  FileSignature,
  Handshake,
  Landmark,
  ScrollText,
  Users,
} from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'

export const metadata: Metadata = {
  title: 'Acta de Concertación N.° 001 · Guardianes y Guardianas del Río',
  description:
    'Acta de Concertación de la Audiencia Pública Minera ANM-Alcaldía de Popayán, 25 de marzo de 2025: qué se acordó sobre los 19 títulos y las 8 solicitudes viabilizadas, los compromisos firmados y lo que la veeduría vigila.',
}

const asistentes = [
  'ANM: Marianne Laguado (lideresa jurídica), Alejandra Poveda (derecho étnico), Pablo Rodríguez (SIG), Danilo Ávila y Nicolás Corredor',
  'Alcaldía de Popayán: Juan Carlos Muñoz Bravo, alcalde; Lina María Muñoz, personera; Lilian Zapata y Marcela Mantilla (Planeación); Santiago López (Coordinación Ambiental)',
]

const conclusiones = [
  {
    titulo: 'Coordinación ANM–Alcaldía',
    texto:
      'La iniciativa de cruzar la información minera con la del municipio es «un paso fundamental para una gestión minera más responsable y sostenible».',
  },
  {
    titulo: 'Determinantes ambientales primero',
    texto:
      'Se destaca la importancia de las determinantes ambientales definitivas de Planeación y de priorizar la protección de «áreas de especial importancia ecosistémica, como bosques y zonas de recarga hídrica».',
  },
  {
    titulo: 'Impactos acumulativos',
    texto:
      'El acta ordena «evaluaciones ambientales exhaustivas… considerando los impactos acumulativos y sinérgicos de la actividad minera de la región»: exactamente lo que la veeduría exige para las cuencas.',
  },
  {
    titulo: 'Tecnologías que mitiguen',
    texto:
      'Fomentar prácticas mineras que minimicen impactos: recuperación de suelos degradados, gestión eficiente del agua y protección de la biodiversidad.',
  },
  {
    titulo: 'Transparencia y participación',
    texto:
      'Garantizar transparencia en las decisiones mineras y promover la participación de la comunidad en la planificación y gestión de los recursos naturales.',
  },
]

const compromisos = [
  {
    que: 'Publicar el desarrollo de la reunión en la sede virtual de la entidad para que la comunidad pueda comentar.',
    quienes: 'ANM · Alcaldía · Personería · Concejo',
    plazo: '2 al 8 de abril de 2025',
  },
  {
    que: 'Remitir el documento de la reunión a la Asamblea Departamental, alcaldía y personería para su publicación.',
    quienes: 'ANM',
    plazo: '26 de marzo al 1 de abril de 2025',
  },
  {
    que: 'Publicar el acta de concertación final, con enmiendas y respuestas a observaciones.',
    quienes: 'ANM · Alcaldía · Personería · Concejo',
    plazo: '9 al 15 de abril de 2025',
  },
]

export default function ActaCoordinacionPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="bg-paper pb-20 md:pb-28">
        <header className="mx-auto w-full max-w-[1200px] px-6 pb-8 pt-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Documentos oficiales
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl">
            Acta de Concertación N.° 001 — Audiencia Pública Minera
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-ink-soft">
            Reunión de coordinación y concurrencia entre la Agencia Nacional de
            Minería y el Municipio de Popayán. Es el acta donde la ANM puso en
            conocimiento del municipio la información geológica, ambiental y minera
            del territorio, y donde se cruzó con los usos del suelo.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-soft">
            <li className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-teal" aria-hidden="true" />
              25 de marzo de 2025 · 15:30–17:35 · Popayán, Cauca
            </li>
            <li className="inline-flex items-center gap-2">
              <Landmark className="size-4 text-teal" aria-hidden="true" />
              Preside: Vicepresidencia de Contratación y Titulación Minera (ANM)
            </li>
            <li className="inline-flex items-center gap-2">
              <FileSignature className="size-4 text-teal" aria-hidden="true" />
              Firmada por el alcalde Juan Carlos Muñoz Bravo y la ANM
            </li>
          </ul>
        </header>

        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-line bg-surface p-7">
              <span className="grid size-12 place-items-center rounded-full bg-mist text-teal">
                <Handshake className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl">Qué se concertó</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                La ANM presentó el inventario minero completo —19 títulos vigentes,
                17 solicitudes en trámite y 8 viabilizadas— y lo cruzó con los usos
                del suelo certificados por Planeación. El marco: la sentencia
                SU-095 de 2018 y la Circular 6 de 2023 de la Procuraduría
                (coordinación, concurrencia y subsidiariedad).
              </p>
            </div>
            <div className="flex flex-col rounded-2xl border border-line bg-surface p-7">
              <span className="grid size-12 place-items-center rounded-full bg-mist text-teal">
                <Users className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl">Quiénes estuvieron</h2>
              <ul className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                {asistentes.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl border-2 border-ember/60 bg-surface p-7">
              <h2 className="text-xl">El dato clave del acta</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-forest">
                La Secretaría de Planeación certificó en la reunión que en las zonas
                de las solicitudes «<strong>hay un resguardo indígena y hay una
                protección del acueducto</strong> que abastece» a la ciudad — la
                razón por la que la veeduría exige verificación polígono por
                polígono.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-forest">
                Y sobre LBJ-11441 dejó constancia: está en «un área de interés
                ambiental del municipio… predios adquiridos para realizar la
                recuperación del suelo».
              </p>
            </div>
          </div>

          <section aria-labelledby="conclusiones" className="mt-12">
            <h2 id="conclusiones" className="flex items-center gap-2 text-2xl">
              <ScrollText className="size-6 text-teal" strokeWidth={1.75} aria-hidden="true" />
              Lo que quedó acordado (5 puntos)
            </h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {conclusiones.map(({ titulo, texto }, i) => (
                <li key={titulo} className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-forest font-display text-lg text-surface">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-forest">{titulo}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="compromisos" className="mt-12">
            <h2 id="compromisos" className="text-2xl">
              Compromisos firmados (y su plazo)
            </h2>
            <p className="mt-2 max-w-3xl text-ink-soft">
              El acta ordenó publicar todo para conocimiento de la comunidad. La
              veeduría verifica que esos compromisos se cumplieran: esta página es
              parte de ese control.
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {compromisos.map(({ que, quienes, plazo }) => (
                <li key={que} className="flex flex-col gap-2 rounded-2xl bg-mist p-6">
                  <p className="text-[15px] leading-relaxed text-forest">{que}</p>
                  <p className="mt-auto pt-3 text-sm">
                    <span className="font-semibold text-forest">{quienes}</span>
                    <br />
                    <span className="text-ink-soft">Plazo: {plazo}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Documento completo" className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl">El documento completo</h2>
              <a
                href="/documentos/acta-coordinacion-concurrencia-2026-07-28.pdf"
                download
                className="inline-flex h-11 items-center gap-2 rounded-full bg-ember px-5 text-sm font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                <Download className="size-4" aria-hidden="true" />
                Descargar el PDF (16 páginas)
              </a>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
              <iframe
                src="/documentos/acta-coordinacion-concurrencia-2026-07-28.pdf"
                title="Acta de Concertación N.° 001, Audiencia Pública Minera, Popayán, 25 de marzo de 2025"
                className="h-[80vh] min-h-[480px] w-full"
              />
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              Formato ANM MIS3-P-008-F-001 · procedimiento de Audiencias Públicas
              Mineras (Resolución 1099 de 2023, modificada por la 558 de 2024).
            </p>
          </section>

          <div className="mt-10 rounded-2xl bg-mist p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-2xl">
              <ArrowRight className="size-6 text-teal" aria-hidden="true" />
              Relación con nuestras exigencias
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-forest">
              Los puntos 2 y 3 del acta (determinantes ambientales, recarga hídrica
              e impactos acumulativos) son exactamente los fundamentos de nuestra
              propuesta política. La diferencia: el acta los deja como
              recomendaciones; nosotros exigimos que sean condición para viabilizar.
            </p>
            <Link
              href="/exigimos"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-teal underline-offset-4 hover:underline"
            >
              Ver la propuesta política completa
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
