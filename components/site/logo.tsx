import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Marca oficial de la Veeduría (Manual de Identidad Gráfica).
 *
 * El imagotipo completo —los cuatro ríos con el frailejón, el barranquero y
 * las manos, rodeados por el nombre— funciona en tamaños grandes (footer,
 * impresos). En tamaños pequeños usamos solo el símbolo central, como permite
 * el manual: «los dos elementos pueden funcionar por separado».
 */
export function Logo({
  className,
  size = 56,
  tono = 'blanco',
}: {
  className?: string
  size?: number
  tono?: 'blanco' | 'azul'
}) {
  const completo = size >= 80
  const archivo = completo
    ? tono === 'blanco'
      ? '/identidad/imagotipo-blanco.png'
      : '/identidad/imagotipo-azul.png'
    : tono === 'blanco'
      ? '/identidad/simbolo-blanco.png'
      : '/identidad/simbolo-azul.png'

  return (
    <Image
      src={archivo}
      alt={
        completo
          ? 'Imagotipo de la Veeduría Ambiental Guardianes y Guardianas de los Ríos Cauca, Las Piedras, Molino y Pisojé'
          : 'Símbolo de la Veeduría Guardianes y Guardianas del Río'
      }
      width={size}
      height={size}
      priority={size >= 56}
      className={cn('shrink-0', className)}
    />
  )
}
