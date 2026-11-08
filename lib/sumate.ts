export const PARTICIPATION_OPTIONS = [
  { value: 'difundir', label: 'Difundir', hint: 'Comparto información con mi comunidad' },
  { value: 'voluntariado', label: 'Voluntariado', hint: 'Acompaño recorridos y asambleas' },
  { value: 'juridico', label: 'Apoyo jurídico', hint: 'Aporto conocimiento legal o técnico' },
  { value: 'donacion', label: 'Donación', hint: 'Ayudo a sostener la veeduría' },
] as const

export type Participation = (typeof PARTICIPATION_OPTIONS)[number]['value']

export type SignupField = 'nombre' | 'municipio' | 'contacto' | 'participacion' | 'motivo'

export type SignupState = {
  status: 'idle' | 'error' | 'success'
  message?: string
  fieldErrors?: Partial<Record<SignupField, string>>
  values?: Partial<Record<SignupField, string>>
}
