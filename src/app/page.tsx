import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScreensMarquee from '@/components/ScreensMarquee';
import CompatibleDevices from '@/components/CompatibleDevices';
import { site } from '@/lib/site';

const pillars = [
  {
    icon: '/features/professional.svg',
    title: 'Tratamento personalizado',
    text: 'O idoso é motivado a tornar-se corresponsável da sua evolução terapêutica, atuando como componente ativo do próprio tratamento.',
  },
  {
    icon: '/features/evolution.svg',
    title: 'Autogerenciamento',
    text: 'A estratégia terapêutica é definida para o nível funcional de cada idoso, considerando as particularidades de cada indivíduo.',
  },
  {
    icon: '/features/protection.svg',
    title: 'Funcionalidade',
    text: 'Olhamos para além do diagnóstico clínico: focamos a queixa funcional e valorizamos as potencialidades de cada idoso.',
  },
];

const metrics = [
  { icon: "/features/sleep.svg", label: "Sono", color: "#432970" },
  { icon: "/features/heart-rate.svg", label: "Frequência cardíaca" },
  { icon: "/features/activity.svg", label: "Atividades físicas" },
  { icon: "/features/speed.svg", label: "Velocidade da marcha" },
  { icon: "/features/steps.svg", label: "Passos" },
  { icon: "/features/distance.svg", label: "Distância" },
  { icon: "/features/calories.svg", label: "Calorias" },
  { icon: "/features/active_minutes.svg", label: "Minutos Ativos" },
]

const highlights = [
  {
    icon: '/features/device.svg',
    title: 'Fitbit e Apple Watch',
    text: 'Captamos informações do paciente 24h por dia diretamente do Fitbit e do Apple Watch, sem atrapalhar a rotina.',
  },
  {
    icon: '/features/diagnosis.svg',
    title: 'Avaliação continuada',
    text: 'Dados cruciais para a predição de condições adversas à saúde e apoio à tomada de decisão fisioterapêutica.',
  },
  {
    icon: '/features/caregiver.svg',
    title: 'Cuidado humanizado',
    text: 'Profissionais e cuidadores acompanham a evolução em tempo real, com assistência próxima e personalizada.',
  },
];

const partners = [
  { src: '/partners/nutes.jpg', alt: 'Núcleo de Tecnologias Estratégicas em Saúde — NUTES', href: 'http://nutes.uepb.edu.br' },
  { src: '/partners/centelha.jpg', alt: 'Programa Centelha', href: 'https://programacentelha.com.br' },
  { src: '/partners/fapesq.jpg', alt: 'Fundação de Apoio à Pesquisa do Estado da Paraíba — FAPESQPB', href: 'http://fapesq.rpp.br' },
  { src: '/partners/softex.png', alt: 'Softex', href: 'https://softex.br' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface to-surface pb-20 pt-32 sm:pt-40">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

          <div className="container-max relative grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <span className="eyebrow">Saúde na palma da sua mão</span>
              <h1 className="text-4xl font-bold leading-[1.1] text-secondary sm:text-5xl lg:text-6xl">
                {site.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {site.tagline}. Monitoramento remoto inteligente e fisioterapia
                especializada para um cuidado contínuo, personalizado e
                humanizado.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={site.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Entrar na plataforma
                </a>
                <a href={`mailto:${site.email}`} className="btn-ghost">
                  Fale conosco
                </a>
              </div>

              <div className="mt-10">
                <p className="text-sm font-medium text-muted">
                  Em breve disponível para Android e iOS
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Play"
                  >
                    <Image
                      src="/badges/play-store.png"
                      alt="Disponível no Google Play"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </a>
                  <a href="/politica-de-privacidade" title="App Store">
                    <Image
                      src="/badges/app-store.svg"
                      alt="Disponível na App Store"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 -z-10 m-auto h-80 w-80 rounded-full bg-primary/15 blur-2xl" />
              <div className="relative animate-float">
                <Image
                  src="/screens/app/dashboard.png"
                  alt="Dashboard do aplicativo Sênior Saúde Móvel"
                  width={300}
                  height={620}
                  priority
                  className="w-64 rounded-[2rem] border-8 border-white shadow-soft sm:w-80"
                />
              </div>
              <div className="relative -ml-10 mt-16 hidden animate-float [animation-delay:1.5s] sm:block">
                <Image
                  src="/screens/app/sleep.png"
                  alt="Tela de sono do aplicativo Sênior Saúde Móvel"
                  width={300}
                  height={620}
                  className="w-60 rounded-[2rem] border-8 border-white shadow-soft sm:w-72"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOBRE ===== */}
        <section id="sobre" className="section bg-white">
          <div className="container-max grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/about-healthy.jpeg"
                alt="Cuidado humanizado na melhor idade"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">Sobre</span>
              <h2 className="heading">
                Nascida para transformar o cuidado na melhor idade
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                A Sênior Saúde Móvel nasceu em Campina Grande, fruto do projeto
                de doutorado e mestrado de Eujessika Rodrigues. Entusiasta do
                universo do envelhecimento humano, dedica-se nos últimos anos à
                prestação de um atendimento fisioterapêutico cada vez mais
                inovador, personalizado e humanizado, que estimula a autonomia e
                a independência do idoso.
              </p>
            </div>
          </div>
        </section>

        {/* ===== INOVAÇÃO ===== */}
        <section id="inovacao" className="section bg-secondary text-white">
          <div className="container-max">
            <div className="max-w-3xl">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Inovação
              </span>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Monitoramento remoto inteligente, 24 horas por dia
              </h2>
              <p className="mt-5 leading-relaxed text-white/75">
                Após profunda dedicação em estudos nessa área, a Sênior Saúde
                Móvel implementou uma estratégia tecnológica aos atendimentos
                fisioterapêuticos. Desenvolvemos um sistema de monitoramento
                remoto de idosos, que capta informações do paciente 24h por dia
                fazendo uso avançado de wearables como o Fitbit e o Apple Watch.
                Esse serviço auxilia na avaliação continuada e na tomada de
                decisão fisioterapêutica — idosos em diferentes condições
                funcionais podem se beneficiar.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                    <Image
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DISPOSITIVOS COMPATÍVEIS ===== */}
        <CompatibleDevices />

        {/* ===== SERVIÇOS ===== */}
        <section id="servicos" className="section bg-white">
          <div className="container-max">
            <div className="max-w-3xl">
              <span className="eyebrow">Serviços</span>
              <h2 className="heading">
                Fisioterapia fundamentada em evidências
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                A Sênior Saúde Móvel realiza atendimentos em fisioterapia em
                gerontologia e fisioterapia neurofuncional para idosos. Os
                tratamentos baseiam-se nos seguintes pilares:
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group rounded-3xl border border-secondary/10 bg-surface/60 p-8 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary/20">
                    <Image src={pillar.icon} alt="" width={36} height={36} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-secondary">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FUNCIONALIDADES / MONITORAMENTO ===== */}
        <section id="funcionalidades" className="section bg-surface">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">O que monitoramos</span>
              <h2 className="heading">Dados de saúde acompanhados de perto</h2>
              <p className="mt-5 leading-relaxed text-muted">
                Reunimos automaticamente os principais indicadores de saúde do
                idoso em um só lugar, com leitura simples para pacientes,
                cuidadores e profissionais.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Image src={metric.icon} alt="" width={30} height={30} />
                  </div>
                  <span className="text-sm font-medium text-secondary">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PLATAFORMA / TELAS ===== */}
        <section id="plataforma" className="section bg-white">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Tecnologia</span>
              <h2 className="heading">
                Acompanhamento que vai além das sessões
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                A Sênior Saúde Móvel dispõe de tecnologias para acompanhamento
                remoto que vão além das sessões de fisioterapia. O paciente é
                motivado a buscar hábitos de vida mais saudáveis com nossas
                aplicações, e nossa equipe presta assistência em tempo real.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <ScreensMarquee />
          </div>
        </section>

        {/* ===== FUNDADORA ===== */}
        <section className="section bg-surface">
          <div className="container-max">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Fundadora</span>
              <h2 className="heading">
                Quem está por trás da Sênior Saúde Móvel
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl bg-white shadow-soft md:flex">
              <div className="md:w-2/5">
                <Image
                  src="/team/eujessika.jpeg"
                  alt="Dra. Eujessika Rodrigues"
                  width={500}
                  height={600}
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-3/5">
                <h3 className="text-2xl font-semibold text-secondary">
                  Dra. Eujessika Rodrigues
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Fundadora da startup Sênior Saúde Móvel e pesquisadora no
                  Núcleo de Tecnologias Estratégicas em Saúde (NUTES/UEPB).
                  Dedica-se ao estudo do envelhecimento humano e à inovação no
                  cuidado fisioterapêutico.
                </p>
                <a
                  href="https://www.instagram.com/eujessika_rodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                >
                  <Image
                    src="/social/instagram.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                  @eujessika_rodrigues
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARCEIROS ===== */}
        <section id="parceiros" className="section bg-white">
          <div className="container-max text-center">
            <span className="eyebrow">Patrocinadores</span>
            <h2 className="heading">Quem apoia o nosso propósito</h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
              {partners.map((partner) => (
                <a
                  key={partner.src}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.alt}
                  className="grayscale transition hover:grayscale-0"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={120}
                    className="h-20 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTATO / MAPA ===== */}
        <section className="bg-surface py-16 sm:py-24">
          <div className="container-max grid items-stretch gap-2 overflow-hidden rounded-3xl bg-white p-2 shadow-card lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Endereço da Sênior Saúde Móvel"
                src={site.mapEmbed}
                className="h-64 w-full sm:h-80 lg:h-full lg:min-h-[22rem]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <span className="eyebrow">Onde estamos</span>
              <h2 className="heading">Venha nos visitar</h2>
              <p className="mt-4 leading-relaxed text-muted">
                {site.address.line1}, {site.address.line2}. CEP{" "}
                {site.address.zip}.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="btn-primary mt-6 w-full sm:w-fit"
              >
                {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
