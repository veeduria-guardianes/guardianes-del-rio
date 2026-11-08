'use server'

import { PARTICIPATION_OPTIONS, type SignupState } from '@/lib/sumate'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/
const VALID_PARTICIPATION: string[] = PARTICIPATION_OPTIONS.map((option) => option.value)

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function submitSignup(_prev: SignupState, formData: FormData): Promise<SignupState> {
  const nombre = clean(formData.get('nombre'), 120)
  const municipio = clean(formData.get('municipio'), 120)
  const contacto = clean(formData.get('contacto'), 160)
  const participacion = clean(formData.get('participacion'), 20)
  const motivo = clean(formData.get('motivo'), 1000)

  const fieldErrors: SignupState['fieldErrors'] = {}
  if (nombre.length < 2) fieldErrors.nombre = 'Escribe tu nombre.'
  if (municipio.length < 2) fieldErrors.municipio = 'Dinos tu municipio o vereda.'
  if (!EMAIL_RE.test(contacto) && !PHONE_RE.test(contacto)) {
    fieldErrors.contacto = 'Escribe un correo o un número de WhatsApp válido.'
  }
  if (!VALID_PARTICIPATION.includes(participacion)) {
    fieldErrors.participacion = 'Elige una forma de participar.'
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Revisa los campos marcados.',
      fieldErrors,
      values: { nombre, municipio, contacto, participacion, motivo },
    }
  }

  return {
    status: 'success',
    message: `Gracias, ${nombre.split(' ')[0]}. Te escribiremos pronto para contarte cómo empezar.`,
  }
}
