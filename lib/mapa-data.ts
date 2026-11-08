/**
 * Datos del mapa y de las concesiones de la Veeduría.
 *
 * FUENTES:
 *  - Mapa oficial «Solicitudes de minería viabilizadas en el municipio de
 *    Popayán»: ANM, sistema AnnA Minería, consulta del 10 de octubre de 2026
 *    (elaboración propia en QGIS).
 *  - Expedientes y cifras: ANM y Acta de Reunión N.° 001 del 25 de marzo de
 *    2025 (Alcaldía de Popayán), consignada en el concepto jurídico.
 *  - Cauces de los ríos Cauca, Las Piedras y Molino: OpenStreetMap
 *    (© colaboradores de OSM), extraídos con documentos-proyecto/herramientas/
 *    extraer_rios_osm.py. El Pisojé no está nominado en OSM: se trazó sobre su
 *    subcuenca documentada por AAPSA (1.885 ha, corregimiento Santa Bárbara).
 *  - Roles hídricos: AAPSA — Acueducto y Alcantarillado de Popayán (Palacé
 *    ~27%, Molino ~13%, Pisojé fuente alterna del sistema Tablazo) y
 *    Fundación Procuenca Río Las Piedras.
 *
 * ⚠️ Posiciones de expedientes ajustadas al mapa oficial y a las subcuencas
 * reales; siguen siendo puntuales y aproximadas hasta cargar los polígonos
 * oficiales (Celda Minera).
 */

export type LayerId = 'otorgados' | 'viabilizadas' | 'tramite' | 'rios' | 'acueductos' | 'protegidas'

export type LatLng = [number, number]

export type EstadoConcesion = 'Título vigente' | 'Viabilizada' | 'Solicitud vigente'

export type Concession = {
  id: string
  name: string
  titular: string
  tipoPersona: 'natural' | 'juridica'
  nit?: string
  hectares: number
  veredas: string[]
  municipio: string
  mineral: string
  status: EstadoConcesion
  radicacion?: string
  rivers: string[]
  position: LatLng
  summary: string
  traslapePct?: number
  fuente: string
}

/** Título minero vigente según el catastro minero (Acta 001/2025, pág. anexo). */
export type TituloMinero = {
  codigo: string
  rucom: boolean
  hectareas: number
  titular: string
  grupo: string
}

export type River = { id: string; name: string; rol: string; path: LatLng[] }
export type Aqueduct = { id: string; name: string; families: number; position: LatLng }
export type ProtectedZone = { id: string; name: string; area: LatLng[]; center: LatLng }
export type Municipality = { name: string; center: LatLng }

export const MAP_CENTER: LatLng = [2.45, -76.56]
export const MAP_ZOOM = 12

/** Cifras verificadas (fuente: ANM y Acta 001 de 2025, Alcaldía de Popayán). */
export const cifrasVeeduria = {
  titulosVigentes: 19,
  solicitudesTramite: 17,
  solicitudesViabilizadas: 8,
  titulosSantaBarbara: 6,
  traslapeLBJ: 53,
  fuente: 'ANM · Acta de Reunión N.° 001 del 25 de marzo de 2025, Alcaldía de Popayán',
}

export const concessions: Concession[] = [
  {
    id: 'lbj-11441',
    name: 'LBJ-11441',
    titular: 'María Eucaris León Manzano',
    tipoPersona: 'natural',
    hectares: 57.94,
    veredas: ['Santa Bárbara', 'El Sendero'],
    municipio: 'Popayán',
    mineral: 'Materiales de construcción',
    status: 'Viabilizada',
    radicacion: '19 de febrero de 2010',
    rivers: ['Pisojé'],
    position: [2.4495, -76.5505],
    summary:
      'Solicitud viabilizada sobre la Hacienda Santa Bárbara, en predios que el municipio adquirió para recuperación de suelos, restauración y protección del recurso hídrico. Es el caso más documentado por la veeduría.',
    traslapePct: 53,
    fuente: 'Acta 001/2025, Alcaldía de Popayán · mediciones oficiales del municipio',
  },
  {
    id: 'kjs-15091',
    name: 'KJS-15091',
    titular: 'AngloGold Ashanti S.A.S.',
    tipoPersona: 'juridica',
    hectares: 2087,
    veredas: ['Santa Rosa', 'San Rafael', 'Las Mercedes', 'La Meseta'],
    municipio: 'Popayán',
    mineral: 'Metales preciosos (oro)',
    status: 'Viabilizada',
    radicacion: '28 de octubre de 2009',
    rivers: ['Cauca'],
    position: [2.53, -76.682],
    summary:
      'Es la solicitud de mayor área viabilizada en el municipio: 2.087 hectáreas al noroccidente de Popayán, sobre las veredas Santa Rosa, San Rafael, Las Mercedes y La Meseta, en la parte alta del río Cauca.',
    fuente: 'ANM · Acta 001/2025, Alcaldía de Popayán · mapa oficial oct-2026',
  },
  {
    id: '513245',
    name: '513245',
    titular: 'Inversiones Beamounte S.A.S.',
    tipoPersona: 'juridica',
    hectares: 220.62,
    veredas: ['Santa Bárbara'],
    municipio: 'Popayán',
    mineral: 'Recebo, rocas de origen volcánico, puzolana, basalto',
    status: 'Solicitud vigente',
    rivers: ['Cauca', 'Pisojé'],
    position: [2.424, -76.523],
    summary:
      'Solicitud vigente de 220,6 hectáreas junto al río Cauca, aguas abajo de la confluencia con el río Las Piedras, para materiales de construcción.',
    fuente: 'ANM (expediente 104695) · mapa oficial oct-2026',
  },
  {
    id: 'pka-12011',
    name: 'PKA-12011',
    titular: 'Juan Diego Fernández Álvarez',
    tipoPersona: 'natural',
    hectares: 252.8,
    veredas: ['La Yunga', 'Cerrillos', 'La Meseta'],
    municipio: 'Popayán',
    mineral: 'Metales preciosos (oro)',
    status: 'Viabilizada',
    radicacion: '10 de noviembre de 2014',
    rivers: ['Cauca'],
    position: [2.512, -76.688],
    summary:
      'Solicitud viabilizada de 252,8 hectáreas al noroccidente, sobre las veredas La Yunga, Cerrillos y La Meseta, junto al cauce alto del río Cauca.',
    fuente: 'ANM · Acta 001/2025, Alcaldía de Popayán · mapa oficial oct-2026',
  },
  {
    id: 'ldl-08441',
    name: 'LDL-08441',
    titular: 'Francy Niyired Meneses Dorado',
    tipoPersona: 'natural',
    hectares: 76.42,
    veredas: ['Santa Bárbara', 'Las Piedras'],
    municipio: 'Popayán',
    mineral: 'Materiales de construcción',
    status: 'Viabilizada',
    radicacion: '21 de abril de 2010',
    rivers: ['Las Piedras', 'Pisojé'],
    position: [2.4435, -76.497],
    summary:
      'Solicitud viabilizada de 76,4 hectáreas sobre la subcuenca del río Las Piedras, la principal zona de recarga hídrica del acueducto. Una de las tres señaladas en el concepto jurídico.',
    fuente: 'ANM · concepto jurídico de la veeduría',
  },
  {
    id: 'pjv-12071',
    name: 'PJV-12071',
    titular: 'Alixamayi Ceballos Galvis',
    tipoPersona: 'natural',
    hectares: 50.53,
    veredas: ['Las Piedras'],
    municipio: 'Popayán',
    mineral: 'Materiales de construcción',
    status: 'Viabilizada',
    radicacion: '31 de octubre de 2014',
    rivers: ['Las Piedras'],
    position: [2.437, -76.488],
    summary:
      'Solicitud viabilizada de 50,5 hectáreas en la parte media de la subcuenca del río Las Piedras.',
    fuente: 'ANM · Acta 001/2025, Alcaldía de Popayán · mapa oficial oct-2026',
  },
  {
    id: 'tls-08101',
    name: 'TLS-08101',
    titular: 'CONEXPE S.A.',
    tipoPersona: 'juridica',
    hectares: 81.35,
    veredas: ['Santa Bárbara', 'Las Piedras'],
    municipio: 'Popayán',
    mineral: 'Materiales de construcción',
    status: 'Viabilizada',
    radicacion: '28 de diciembre de 2018',
    rivers: ['Pisojé'],
    position: [2.456, -76.553],
    summary:
      'Solicitud viabilizada de 81,3 hectáreas de la empresa CONEXPE S.A. sobre la subcuenca del Pisojé, que acumula dos expedientes en la misma zona.',
    fuente: 'ANM · Acta 001/2025, Alcaldía de Popayán',
  },
  {
    id: '503648',
    name: '503648',
    titular: 'CONEXPE S.A.',
    tipoPersona: 'juridica',
    hectares: 14.79,
    veredas: ['Santa Bárbara', 'Las Piedras'],
    municipio: 'Popayán',
    mineral: 'Materiales de construcción',
    status: 'Viabilizada',
    radicacion: '29 de noviembre de 2021',
    rivers: ['Pisojé'],
    position: [2.4605, -76.5565],
    summary:
      'Segunda solicitud viabilizada de CONEXPE S.A. en la subcuenca del Pisojé: 14,8 hectáreas. Junto con TLS-08101 evidencia acumulación de expedientes de un mismo titular.',
    fuente: 'ANM · Acta 001/2025, Alcaldía de Popayán',
  },
  {
    id: '511692',
    name: '511692',
    titular: 'Eber Gerardo Realpe Rebolledo',
    tipoPersona: 'natural',
    hectares: 45.61,
    veredas: ['Santa Bárbara'],
    municipio: 'Popayán',
    mineral: 'Arcillas',
    status: 'Solicitud vigente',
    rivers: ['Pisojé'],
    position: [2.443, -76.552],
    summary:
      'Solicitud vigente de 45,6 hectáreas para arcillas en la parte alta de la subcuenca del Pisojé, corregimiento de Santa Bárbara.',
    fuente: 'ANM (expediente 100313)',
  },
  {
    id: '512505',
    name: '512505',
    titular: 'Construimos Obras para la Paz S.A.S.',
    tipoPersona: 'juridica',
    hectares: 97.37,
    veredas: ['Santa Bárbara'],
    municipio: 'Popayán',
    mineral: 'Gravas, recebo',
    status: 'Solicitud vigente',
    rivers: ['Cauca'],
    position: [2.39, -76.5015],
    summary:
      'Solicitud vigente de 97,4 hectáreas para gravas y recebo sobre la margen izquierda del río Cauca, al suroriente del municipio.',
    fuente: 'ANM (expediente 59103) · mapa oficial oct-2026',
  },
  {
    id: '504153',
    name: '504153',
    titular: 'Guillermo Arley Tulande Fernández y Miguel Antonio Guzmán Herrera',
    tipoPersona: 'natural',
    hectares: 30.82,
    veredas: ['Samanga'],
    municipio: 'Popayán (también Timbío y Sotará-Paisambal)',
    mineral: 'Materiales de construcción',
    status: 'Viabilizada',
    radicacion: '25 de enero de 2022',
    rivers: ['Cauca', 'Molino'],
    position: [2.41, -76.59],
    summary:
      'Octava solicitud viabilizada: 30,8 hectáreas entre Popayán (vereda Samanga), Timbío y Sotará (Paisambal). El proponente pidió recortar el área para quedarse solo en Sotará; el recorte estaba en trámite al momento del acta.',
    fuente: 'ANM · Acta 001/2025, Alcaldía de Popayán',
  },
]

/**
 * LOS 19 TÍTULOS MINEROS VIGENTES de Popayán, tal como reposan en el
 * catastro minero de la ANM (Anexo del Acta de Concertación N° 001,
 * 25 de marzo de 2025). El acta no publica su ubicación geográfica:
 * se muestran en /concesiones y se cargarán en el mapa con la Celda Minera.
 */
export const titulosVigentes: TituloMinero[] = [
  { codigo: 'U9-10051', rucom: false, hectareas: 39.47, titular: 'Fabian Cosme Valencia; Santiago Zambrano Simmonds', grupo: 'Materiales de construcción' },
  { codigo: '20984', rucom: true, hectareas: 9.62, titular: 'HECAS S.A.S.; Manuel José Castrillón Muñoz; Rodrigo Castrillón Muñoz', grupo: 'Materiales de construcción' },
  { codigo: '508710', rucom: true, hectareas: 16.02, titular: 'Concesionaria Nuevo Cauca', grupo: 'Materiales de construcción' },
  { codigo: 'HAI-091', rucom: true, hectareas: 12.23, titular: 'Rodrigo Castrillón Muñoz', grupo: 'Materiales de construcción' },
  { codigo: 'LH2-11461', rucom: false, hectareas: 230.55, titular: 'Jesús Arles Martínez Santamaría', grupo: 'Metales preciosos' },
  { codigo: 'EGU-111', rucom: true, hectareas: 3.99, titular: 'Juan Antonio Manzano Garzón; María Eucaris León de Manzano', grupo: 'Materiales de construcción' },
  { codigo: 'JBF-08001X', rucom: true, hectareas: 52.32, titular: 'Construcciones y Explotaciones de Materiales Pétreos S.S. — CONEXPE S.A.', grupo: 'Materiales de construcción' },
  { codigo: 'AJD-121', rucom: true, hectareas: 10.03, titular: 'Olga Victoria Fajardo Andrade', grupo: 'Materiales de construcción' },
  { codigo: '20173', rucom: true, hectareas: 10.02, titular: 'Canteras Ltda.', grupo: 'Materiales de construcción' },
  { codigo: 'NF5-09411', rucom: false, hectareas: 168.92, titular: 'Miguel Benavides Inampués', grupo: 'Materiales industriales' },
  { codigo: 'DAM-091', rucom: true, hectareas: 16.94, titular: 'Rodrigo Castrillón Muñoz', grupo: 'Materiales de construcción' },
  { codigo: 'NFT-10041', rucom: true, hectareas: 54.25, titular: 'José Delfín Rojas Chicle', grupo: 'Metales preciosos' },
  { codigo: 'CEM-156', rucom: true, hectareas: 8.02, titular: 'CONEXPE S.A.', grupo: 'Materiales de construcción' },
  { codigo: 'SK8-09161', rucom: true, hectareas: 0.68, titular: 'Alcaldía de Popayán', grupo: 'Materiales de construcción' },
  { codigo: 'FLV-105', rucom: false, hectareas: 10.54, titular: 'Federico Roberto Lehmann González', grupo: 'Materiales de construcción' },
  { codigo: 'FCC-854', rucom: true, hectareas: 3.52, titular: 'José Argemiro Ordóñez Anacona', grupo: 'Materiales de construcción' },
  { codigo: 'SJ4-14401', rucom: true, hectareas: 1.49, titular: 'Alcaldía de Popayán', grupo: 'Materiales de construcción' },
  { codigo: 'SIP-15281', rucom: true, hectareas: 0.08, titular: 'Alcaldía de Popayán', grupo: 'Materiales de construcción' },
  { codigo: 'ICQ-08032', rucom: true, hectareas: 14.59, titular: 'Julia Emma Arias Vanegas', grupo: 'Materiales de construcción' },
]

/**
 * LOS CUATRO RÍOS AMENAZADOS POR LA MINERÍA, con sus cauces reales.
 * Cauca, Las Piedras y Molino: geometría de OpenStreetMap (© colaboradores
 * OSM). Pisojé: trazado sobre su subcuenca documentada (AAPSA).
 */
export const rivers: River[] = [
  {
    id: 'cauca',
    name: 'Río Cauca',
    rol: 'Fuente alterna del acueducto; recibe las aguas de toda la cuenca',
    path: [
      [2.31017, -76.53026],
      [2.32224, -76.53096],
      [2.33333, -76.51943],
      [2.34516, -76.51025],
      [2.35442, -76.50511],
      [2.36911, -76.49733],
      [2.38109, -76.49421],
      [2.39428, -76.49739],
      [2.40882, -76.50334],
      [2.42426, -76.51969],
      [2.44199, -76.52519],
      [2.45816, -76.53765],
      [2.47418, -76.56622],
      [2.46515, -76.58742],
      [2.45982, -76.60861],
      [2.45887, -76.62414],
      [2.46674, -76.64032],
      [2.47469, -76.65306],
      [2.48316, -76.66454],
      [2.49374, -76.67731],
      [2.49548, -76.68875],
      [2.49987, -76.69446],
    ],
  },
  {
    id: 'piedras',
    name: 'Río Las Piedras',
    rol: 'Principal zona de recarga hídrica del acueducto (Fondo de Agua de Popayán)',
    path: [
      [2.42186, -76.44007],
      [2.42485, -76.44329],
      [2.42691, -76.44635],
      [2.42962, -76.44916],
      [2.43343, -76.44846],
      [2.43828, -76.44807],
      [2.44219, -76.4517],
      [2.4437, -76.45599],
      [2.44076, -76.46061],
      [2.43827, -76.46575],
      [2.43723, -76.47099],
      [2.43547, -76.47662],
      [2.43617, -76.48121],
      [2.43777, -76.48615],
      [2.44172, -76.48759],
      [2.44616, -76.49169],
      [2.44815, -76.49611],
      [2.44508, -76.50487],
      [2.44811, -76.51201],
      [2.44791, -76.5178],
      [2.44608, -76.52267],
      [2.44541, -76.52411],
    ],
  },
  {
    id: 'molino',
    name: 'Río Molino',
    rol: 'Aporta ~13% del agua de la ciudad; POMCA Molino-Pubús (CRC 0883/2006)',
    path: [
      [2.39211, -76.5351],
      [2.39712, -76.54043],
      [2.40216, -76.54286],
      [2.41139, -76.54494],
      [2.41845, -76.55178],
      [2.42429, -76.55915],
      [2.42643, -76.56273],
      [2.43476, -76.56943],
      [2.44194, -76.57627],
      [2.44681, -76.5808],
      [2.45186, -76.58477],
      [2.45305, -76.58919],
      [2.45011, -76.59666],
      [2.44794, -76.60059],
      [2.44514, -76.60361],
      [2.44615, -76.61016],
      [2.45033, -76.61795],
      [2.45221, -76.62114],
      [2.45363, -76.62203],
      [2.45489, -76.62471],
      [2.45551, -76.62745],
      [2.45577, -76.62758],
    ],
  },
  {
    id: 'pisoje',
    name: 'Río Pisojé',
    rol: 'Subcuenca de 1.885 ha: fuente alterna del sistema Tablazo en verano (AAPSA)',
    path: [
      [2.436, -76.545],
      [2.442, -76.5505],
      [2.4485, -76.5525],
      [2.4555, -76.5555],
      [2.4625, -76.5595],
      [2.4685, -76.563],
      [2.4735, -76.5665],
    ],
  },
]

/** Cuántos expedientes mineros hay sobre cada río (cruce con `concessions`). */
export function expedientesPorRio(nombreRio: string): number {
  return concessions.filter((c) =>
    c.rivers.some((r) => r.toLowerCase() === nombreRio.toLowerCase()),
  ).length
}

/**
 * Acueductos y captaciones. El sistema Tablazo (AAPSA) capta las aguas de la
 * subcuenca del Pisojé como fuente alterna en época seca; los acueductos
 * veredales dependen de las mismas fuentes.
 */
export const aqueducts: Aqueduct[] = [
  { id: 'tablazo', name: 'Sistema Tablazo (AAPSA) — capta el río Pisojé', families: 0, position: [2.4505, -76.554] },
  { id: 'santa-barbara', name: 'Acueducto veredal Santa Bárbara', families: 310, position: [2.455, -76.549] },
  { id: 'el-sendero', name: 'Acueducto veredal El Sendero', families: 180, position: [2.449, -76.546] },
  { id: 'las-piedras', name: 'Acueducto veredal Las Piedras', families: 260, position: [2.442, -76.492] },
]

/**
 * Áreas de interés hídrico alrededor de Popayán: la subcuenca del Pisojé
 * (1.885 ha — AAPSA) y la zona de recarga de la subcuenca del río Las Piedras
 * (Banrepcultural · Fondo de Agua de Popayán). Geometría de referencia.
 */
export const protectedZones: ProtectedZone[] = [
  {
    id: 'subcuenca-pisoje',
    name: 'Subcuenca del río Pisojé (1.885 ha — fuente alterna del acueducto)',
    center: [2.456, -76.557],
    area: [
      [2.437, -76.559],
      [2.462, -76.565],
      [2.478, -76.569],
      [2.474, -76.552],
      [2.452, -76.545],
      [2.438, -76.548],
    ],
  },
  {
    id: 'recarga-las-piedras',
    name: 'Zona de recarga hídrica — subcuenca del río Las Piedras',
    center: [2.438, -76.462],
    area: [
      [2.425, -76.45],
      [2.447, -76.447],
      [2.452, -76.463],
      [2.44, -76.478],
      [2.426, -76.47],
    ],
  },
]

/**
 * Buscador del mapa: municipios vecinos y veredas de las cuencas vigiladas
 * (AAPSA: Pisojé — La Unión La Cabrera, Pisojé Bajo, San Alfonso, El Paraíso,
 * Pisojé Alto; mapa oficial: oriente y noroccidente de Popayán).
 */
export const municipalities: Municipality[] = [
  { name: 'Popayán', center: [2.4448, -76.6148] },
  { name: 'Santa Bárbara', center: [2.455, -76.551] },
  { name: 'Las Piedras', center: [2.442, -76.492] },
  { name: 'El Sendero', center: [2.449, -76.546] },
  { name: 'Pisojé Alto', center: [2.444, -76.553] },
  { name: 'Pisojé Bajo', center: [2.465, -76.56] },
  { name: 'La Unión La Cabrera', center: [2.458, -76.562] },
  { name: 'San Alfonso', center: [2.452, -76.559] },
  { name: 'El Paraíso', center: [2.447, -76.556] },
  { name: 'Santa Elena', center: [2.396, -76.541] },
  { name: 'Santa Rosa', center: [2.545, -76.675] },
  { name: 'San Rafael', center: [2.552, -76.668] },
  { name: 'Las Mercedes', center: [2.542, -76.682] },
  { name: 'La Meseta', center: [2.538, -76.69] },
  { name: 'La Yunga', center: [2.512, -76.697] },
  { name: 'Cerrillos', center: [2.508, -76.702] },
  { name: 'Quintana', center: [2.436, -76.5] },
  { name: 'Poblazón', center: [2.395, -76.63] },
  { name: 'Totoró', center: [2.55, -76.48] },
  { name: 'Coconuco', center: [2.385, -76.51] },
  { name: 'Puracé', center: [2.36, -76.42] },
  { name: 'Timbío', center: [2.35, -76.68] },
]

export const layerColors: Record<LayerId, string> = {
  otorgados: '#c94f13',
  viabilizadas: '#df5e1d',
  tramite: '#f9ba6b',
  rios: '#7fb9e6',
  acueductos: '#7fb9e6',
  protegidas: '#9dc044',
}
