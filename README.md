# Guardianes y Guardianas del Río — Sitio web institucional

Sitio web de la **Veeduría Ambiental Guardianes y Guardianas de los Ríos Cauca,
Las Piedras, Molino y Pisojé** (Popayán, Cauca — Ley 850 de 2003): vigilancia
ciudadana sobre los proyectos mineros que amenazan las fuentes de agua de Popayán.

> «El agua no se negocia, se defiende.»

## 🗺️ Páginas

| Ruta | Contenido |
|---|---|
| `/` | Portada: alerta, menú, héroe con cifras verificadas y fuente, «¿de dónde viene tu agua?», mapa oficial, concesiones destacadas, noticias y CTA con la gráfica del territorio |
| `/mapa` | Mapa hídrico interactivo (Leaflet): los 4 ríos amenazados con **cauce real** (OSM) y etiquetas con expedientes por cuenca, 6 capas, buscador de veredas, panel de detalle y **recorrido guiado** de 5 pasos |
| `/concesiones` | Las 11 solicitudes bajo vigilancia + **los 19 títulos mineros vigentes** del catastro ANM + «Lecturas del inventario» (redes de titulares) |
| `/concesiones/[codigo]` | Ficha por expediente (11 fichas estáticas): titular, mineral, fecha de radicación, veredas, ríos, traslape y fuente |
| `/acta-coordinacion` | **Acta de Concertación N.° 001** (Audiencia Pública Minera ANM–Alcaldía, 25-mar-2025): 5 puntos acordados, compromisos con plazos, el dato clave del acueducto y el PDF completo en línea |
| `/evidencia` | Base jurídica en lenguaje claro: 3 ejes, normas, sentencias, láminas y PDF descargables |
| `/exigimos` | Propuesta política en 3 niveles (suspensión de viabilizaciones, impactos acumulativos, mesa interinstitucional — Escazú) |
| `/quienes-somos` | Historial, cómo trabajamos, fauna del territorio ilustrada por la comunidad y contactos (sin nombres personales) |
| `/sumate` | Formulario con validación (server action), panel de confianza y otras formas de apoyar |

## 🛠️ Stack

- [Next.js](https://nextjs.org/) 16 (App Router) · React 19 · TypeScript estricto
- [Tailwind CSS](https://tailwindcss.com/) 4 con la paleta oficial de la identidad
- [Leaflet](https://leafletjs.com/) + react-leaflet (teselas OSM suavizadas)
- Tipografías oficiales autohospedadas: **Alkatra** (títulos) y **Open Sauce One** (cuerpo)
- 0 vulnerabilidades en dependencias · SEO técnico completo (sitemap, robots, OpenGraph)

## 🚀 Puesta en marcha

Requisitos: Node.js 20+ y npm.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # producción (verifica TypeScript estricto)
npm start        # servir el build
```

## 📁 Estructura

```
app/                    Páginas (App Router)
  concesiones/[codigo]/ Fichas por expediente
  acta-coordinacion/    Acta de Concertación 001/2025 con visor de PDF
components/
  site/                 Portada: hero, secciones, header/footer, láminas…
  mapa/                 Mapa: ríos reales, tour guiado, panel de detalle
  sumate/               Formulario y apoyos
lib/
  mapa-data.ts          FUENTE ÚNICA: 11 expedientes, 19 títulos, ríos con
                        cauce real (OSM), zonas hídricas, veredas, cifras
  contacto.ts           WhatsApp/correo (único lugar para cambiarlos)
public/
  identidad/            Imagotipo oficial, motivos bautizados, elementos
  images/ · laminas/    Mapa oficial WebP, láminas para WhatsApp
  documentos/           Acta 001 (comprimida) y concepto jurídico en PDF
```

## 🔢 Fuentes de los datos

- **ANM, sistema AnnA Minería** — catastro minero y solicitudes viabilizadas
  (consulta del 10-oct-2026, mapa oficial QGIS de la veeduría).
- **Acta de Concertación N.° 001 del 25-mar-2025** (Audiencia Pública Minera
  ANM–Alcaldía de Popayán): los 19 títulos, los detalles de las 8 viabilizadas
  y los compromisos.
- **AAPSA — Acueducto de Popayán**: subcuenca Pisojé (1.885 ha), Molino
  (67,87 km², POMCA CRC 0883/2006), sistema Tablazo.
- **OpenStreetMap** (© colaboradores): cauces reales de los ríos Cauca,
  Las Piedras y Molino.

## ⚠️ Pendientes (fase de producción y prueba)

- Polígonos oficiales de la ANM (Celda Minera): las posiciones del mapa son
  aproximadas y así se advierte en la interfaz.
- Correo y WhatsApp reales de la veeduría (`lib/contacto.ts`) y canal oficial.
- Fechas de los hitos sin fecha y redes sociales.
- Video tutorial de 60–90 s (el hero ya reserva su espacio).
- El motivo `sin-identificar-lima.png` y los elementos del imagotipo esperan
  clasificación fina del equipo.
- Formulario de Súmate: conectar a correo/BD (hoy solo valida).

## 📝 Repositorio y despliegue

Repositorio oficial: **https://github.com/veeduria-guardianes/guardianes-del-rio**
(organización de la veeduría; pedir acceso a su equipo técnico).

Despliegue: importar el repo en Vercel/Netlify/Cloudflare (deploy automático
con cada push) y apuntar los DNS del dominio `guardianesdelrio.org`
(registrado en Hostinger) según el hospedaje elegido.

---

Proyecto de la Veeduría Ambiental Guardianes y Guardianas de los Ríos —
Popayán, Cauca, Colombia. Datos públicos y verificables; cada cifra cita su fuente.
