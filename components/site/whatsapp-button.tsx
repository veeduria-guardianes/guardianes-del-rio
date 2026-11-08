import { CANAL_WHATSAPP, WHATSAPP } from '@/lib/contacto'

/**
 * Peldaño 3 de la escalera de involucramiento (04-comunicacion.md §4):
 * cuando exista el canal de la veeduría (CANAL_WHATSAPP en lib/contacto.ts),
 * el botón pasa de "escríbenos" a "únete al canal" con un solo cambio.
 */
export function WhatsAppButton() {
  const href = CANAL_WHATSAPP ?? WHATSAPP
  const etiqueta = CANAL_WHATSAPP ? 'Únete al canal de la veeduría' : 'Escríbenos por WhatsApp'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={etiqueta}
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.6l6.03-1.58a11.32 11.32 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.33-8.02z" />
      </svg>
    </a>
  )
}
