'use client'

import { useActionState } from 'react'
import { CircleCheck, Lock } from 'lucide-react'
import { submitSignup } from '@/app/sumate/actions'
import { PARTICIPATION_OPTIONS, type SignupField, type SignupState } from '@/lib/sumate'

const initialState: SignupState = { status: 'idle' }

const inputClass =
  'mt-2 block w-full rounded-lg border border-line bg-paper/40 px-4 py-3 text-base text-forest placeholder:text-ink-soft/60 transition-colors focus:border-teal focus:bg-surface focus:outline-none focus:ring-2 focus:ring-teal/25 aria-[invalid=true]:border-ember'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-[#b84a12]">
      {message}
    </p>
  )
}

export function SignupForm() {
  const [state, formAction, pending] = useActionState(submitSignup, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-10 shadow-[0_1px_0_rgba(34,81,48,0.04)]"
      >
        <CircleCheck className="size-10 text-teal" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="text-3xl">Ya eres parte de la veeduría</h2>
        <p className="max-w-md text-lg text-ink-soft">{state.message}</p>
      </div>
    )
  }

  const errors = state.fieldErrors ?? {}
  const values = state.values ?? {}
  const describedBy = (field: SignupField) => (errors[field] ? `${field}-error` : undefined)

  return (
    <form
      action={formAction}
      noValidate
      aria-describedby={state.status === 'error' ? 'form-error' : undefined}
      className="rounded-2xl border border-line bg-surface p-8 md:p-10"
    >
      <h2 className="text-2xl">Tu registro</h2>
      <p className="mt-1 text-ink-soft">Toma menos de un minuto.</p>

      {state.status === 'error' && (
        <p
          id="form-error"
          role="alert"
          className="mt-6 rounded-lg bg-peach/30 px-4 py-3 text-sm font-medium text-forest"
        >
          {state.message}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="font-semibold text-forest">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              required
              defaultValue={values.nombre}
              aria-invalid={Boolean(errors.nombre)}
              aria-describedby={describedBy('nombre')}
              className={inputClass}
            />
            <FieldError id="nombre-error" message={errors.nombre} />
          </div>
          <div>
            <label htmlFor="municipio" className="font-semibold text-forest">
              Municipio o vereda
            </label>
            <input
              id="municipio"
              name="municipio"
              type="text"
              autoComplete="address-level2"
              placeholder="Ej. Popayán, vereda Las Piedras"
              required
              defaultValue={values.municipio}
              aria-invalid={Boolean(errors.municipio)}
              aria-describedby={describedBy('municipio')}
              className={inputClass}
            />
            <FieldError id="municipio-error" message={errors.municipio} />
          </div>
        </div>

        <div>
          <label htmlFor="contacto" className="font-semibold text-forest">
            Correo o WhatsApp
          </label>
          <input
            id="contacto"
            name="contacto"
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com o +57 300 000 0000"
            required
            defaultValue={values.contacto}
            aria-invalid={Boolean(errors.contacto)}
            aria-describedby={describedBy('contacto')}
            className={inputClass}
          />
          <FieldError id="contacto-error" message={errors.contacto} />
        </div>

        <fieldset aria-describedby={describedBy('participacion')}>
          <legend className="font-semibold text-forest">¿Cómo quieres participar?</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {PARTICIPATION_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-paper/40 p-4 transition-colors hover:border-teal/50 has-[:checked]:border-teal has-[:checked]:bg-mist has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal/30"
              >
                <input
                  type="radio"
                  name="participacion"
                  value={option.value}
                  defaultChecked={values.participacion === option.value}
                  className="mt-1 size-4 shrink-0 accent-teal"
                />
                <span className="flex flex-col">
                  <span className="font-semibold text-forest">{option.label}</span>
                  <span className="text-sm text-ink-soft">{option.hint}</span>
                </span>
              </label>
            ))}
          </div>
          <FieldError id="participacion-error" message={errors.participacion} />
        </fieldset>

        <div>
          <label htmlFor="motivo" className="font-semibold text-forest">
            Cuéntanos por qué te importa el agua{' '}
            <span className="font-normal text-ink-soft">(opcional)</span>
          </label>
          <textarea
            id="motivo"
            name="motivo"
            rows={4}
            maxLength={1000}
            defaultValue={values.motivo}
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-ember px-8 text-lg font-semibold text-surface transition-colors hover:bg-[#a83d0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:opacity-70 sm:w-auto"
      >
        {pending ? 'Enviando…' : 'Enviar mi registro'}
      </button>

      <p className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
        <Lock className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        Usamos tus datos solo para contactarte desde la veeduría. Nunca los compartimos.
      </p>
    </form>
  )
}
