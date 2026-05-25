import Image from 'next/image';

const screens = [
  { src: '/screens/app/dashboard.png', alt: 'Dashboard do paciente no aplicativo' },
  { src: '/screens/app/sleep.png', alt: 'Registros de sono no aplicativo' },
  { src: '/screens/app/heart-rate.png', alt: 'Frequência cardíaca no aplicativo' },
  { src: '/screens/app/activity.png', alt: 'Atividades físicas no aplicativo' },
  { src: '/screens/app/blood-pressure.png', alt: 'Pressão arterial no aplicativo' },
  { src: '/screens/app/measurements.png', alt: 'Medições no aplicativo' },
  { src: '/screens/app/sleep-details.png', alt: 'Detalhes de sono no aplicativo' },
  { src: '/screens/app/health.png', alt: 'Diagnósticos no aplicativo' },
  { src: '/screens/app/notifications.png', alt: 'Notificações no aplicativo' },
  { src: '/screens/app/profile.png', alt: 'Perfil do paciente no aplicativo' },
];

export default function ScreensMarquee() {
  const loop = [...screens, ...screens];

  return (
    <div className="relative overflow-hidden py-4">
      {/* fades laterais */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />

      <div className="flex w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
        {loop.map((screen, i) => (
          <div
            key={`${screen.src}-${i}`}
            className="mr-6 w-72 shrink-0 overflow-hidden rounded-3xl border border-secondary/10 bg-white shadow-card sm:w-96"
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              width={420}
              height={900}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
