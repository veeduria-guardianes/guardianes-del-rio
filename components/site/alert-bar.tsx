export function AlertBar() {
  return (
    <div className="bg-peach text-forest">
      <p className="mx-auto flex min-h-10 w-full max-w-[1200px] items-center justify-center px-6 py-2 text-center text-sm font-medium md:px-10">
        <a
          href="/concesiones"
          className="underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
        >
          Hay solicitudes mineras viabilizadas sobre zonas de interés hídrico —{' '}
          <span className="font-bold underline">ver estado</span>
        </a>
      </p>
    </div>
  )
}
