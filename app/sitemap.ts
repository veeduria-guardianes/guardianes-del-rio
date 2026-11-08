import type { MetadataRoute } from 'next'
import { concessions } from '@/lib/mapa-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://guardianesdelrio.org'
  const rutas: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/mapa`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/concesiones`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/exigimos`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/evidencia`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/quienes-somos`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sumate`, changeFrequency: 'yearly', priority: 0.7 },
  ]
  for (const c of concessions) {
    rutas.push({
      url: `${base}/concesiones/${c.id}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }
  return rutas
}
