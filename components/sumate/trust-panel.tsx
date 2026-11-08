import Image from 'next/image'
import { EyeOff, MapPinned, ShieldCheck } from 'lucide-react'

const promises = [
  { icon: ShieldCheck, text: 'Tus datos solo los usa la veeduría' },
  { icon: EyeOff, text: 'Nunca publicamos información personal' },
  { icon: MapPinned, text: 'Puedes participar en línea o en territorio' },
]

export function TrustPanel() {
  return (
    <aside aria-label="Nuestro compromiso contigo" className="flex flex-col gap-8">
      <Image
        src="/images/manos-agua.webp"
        alt="Grabado de dos manos que sostienen agua"
        width={800}
        height={1000}
        className="mx-auto w-full max-w-sm rounded-2xl mix-blend-multiply"
      />
      <ul className="flex flex-col gap-5 border-t border-line pt-8">
        {promises.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mist text-teal">
              <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="text-lg font-medium text-forest">{text}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
