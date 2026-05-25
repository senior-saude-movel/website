function FitbitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden>
      <path d="M35.46 4.865c0 2.595-2.162 4.757-4.757 4.757s-4.757-2.162-4.757-4.757S28.108.108 30.702.108 35.46 2.27 35.46 4.865zm-4.757 8.65a4.89 4.89 0 0 0-4.973 4.973c0 2.81 2.162 4.973 4.973 4.973s4.973-2.162 4.973-4.973-2.162-4.973-4.973-4.973zm0 13.405c-2.8 0-5.2 2.378-5.2 5.2s2.378 5.2 5.2 5.2 5.2-2.378 5.2-5.2-2.378-5.2-5.2-5.2zm0 13.622a4.89 4.89 0 0 0-4.973 4.973c0 2.81 2.162 4.973 4.973 4.973s4.973-2.162 4.973-4.973c0-2.595-2.162-4.973-4.973-4.973zm0 13.838c-2.595 0-4.757 2.162-4.757 4.757s2.162 4.757 4.757 4.757 4.757-2.162 4.757-4.757-2.162-4.757-4.757-4.757zm13.2-41.513c-3.027 0-5.622 2.595-5.622 5.622s2.595 5.622 5.622 5.622 5.622-2.595 5.622-5.622-2.595-5.622-5.622-5.622zm0 13.405c-3.243 0-5.838 2.595-5.838 5.838s2.595 5.838 5.838 5.838 5.838-2.595 5.838-5.838-2.595-5.838-5.838-5.838zm0 13.622c-3.027 0-5.622 2.595-5.622 5.622s2.595 5.622 5.622 5.622 5.622-2.595 5.622-5.622-2.595-5.622-5.622-5.622zm13.622-14.27c-3.46 0-6.486 2.8-6.486 6.486 0 3.46 2.8 6.486 6.486 6.486S64 35.784 64 32.108c-.216-3.676-3.027-6.486-6.486-6.486zM17.3 14.164a4.34 4.34 0 0 0-4.324 4.324 4.34 4.34 0 0 0 4.324 4.324 4.34 4.34 0 0 0 4.324-4.324 4.34 4.34 0 0 0-4.324-4.324zm0 13.405c-2.595 0-4.54 1.946-4.54 4.54s1.946 4.54 4.54 4.54 4.54-1.946 4.54-4.54-1.946-4.54-4.54-4.54zm0 13.622a4.34 4.34 0 0 0-4.324 4.324 4.34 4.34 0 0 0 4.324 4.324 4.34 4.34 0 0 0 4.324-4.324 4.34 4.34 0 0 0-4.324-4.324zM3.892 28.216C1.73 28.216 0 29.946 0 32.108S1.73 36 3.892 36s3.892-1.73 3.892-3.892-1.73-3.892-3.892-3.892z" />
    </svg>
  );
}

function AppleWatchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="19" y="18" width="22" height="28" rx="7" />
      <path d="M23 18l2-9a3 3 0 0 1 3-2.5h4a3 3 0 0 1 3 2.5l2 9" />
      <path d="M23 46l2 9a3 3 0 0 0 3 2.5h4a3 3 0 0 0 3-2.5l2-9" />
      <path d="M41 27h4M41 33h4" />
    </svg>
  );
}

const devices = [
  {
    name: 'Fitbit',
    description: 'Pulseiras e relógios Fitbit conectados à plataforma.',
    Icon: FitbitIcon,
  },
  {
    name: 'Apple Watch',
    description: 'Dados de saúde do Apple Watch via aplicativo Saúde.',
    Icon: AppleWatchIcon,
  },
];

export default function CompatibleDevices() {
  return (
    <section className="bg-white py-16">
      <div className="container-max">
        <div className="rounded-3xl border border-secondary/10 bg-surface/60 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow">Dispositivos compatíveis</span>
              <h2 className="heading">Funciona com Fitbit e Apple Watch</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Usamos os wearables que você já conhece para captar dados de saúde com
                precisão e sem complicação. Conecte seu{' '}
                <strong className="text-secondary">Fitbit</strong> ou seu{' '}
                <strong className="text-secondary">Apple Watch</strong> e o
                monitoramento acontece automaticamente, 24 horas por dia.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {devices.map(({ name, description, Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-9 w-9" />
                  </div>
                  <span className="mt-4 text-lg font-semibold text-secondary">{name}</span>
                  <span className="mt-1 text-sm leading-relaxed text-muted">{description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
