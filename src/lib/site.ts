/** Dados e constantes compartilhados do site. */

export const site = {
  name: "Sênior Saúde Móvel",
  shortName: "Sênior Saúde Móvel",
  tagline: "Tecnologia para mais cuidados humanizados na melhor idade",
  description:
    "A Sênior Saúde Móvel une fisioterapia em gerontologia e monitoramento remoto inteligente para oferecer um cuidado contínuo, personalizado e humanizado para a melhor idade.",
  url: "https://www.seniorsaudemovel.com.br",
  email: "seniorsaudemovel@gmail.com",
  platformUrl: "https://senior.nutes.uepb.edu.br",
  instagram: "https://www.instagram.com/seniorsaudemovel",
  instagramHandle: "@seniorsaudemovel",
  address: {
    line1: "Av. Juvêncio Arruda, S/N - Universitário",
    line2: "Campina Grande - PB",
    zip: "58.429-600",
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2693124728344!2d-35.91790822454156!3d-7.210087192795591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1fd57d8c7c8d%3A0x94de9e94cb6a462f!2sN%C3%BAcleo%20de%20Tecnologias%20Estrat%C3%A9gicas%20em%20Sa%C3%BAde%20(NUTES)!5e0!3m2!1spt-BR!2sbr!4v1779731241228!5m2!1spt-BR!2sbr',
} as const

export const navLinks = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Inovação', href: '/#inovacao' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Monitoramento', href: '/#funcionalidades' },
  { label: 'Plataforma', href: '/#plataforma' },
  { label: 'Parceiros', href: '/#parceiros' },
] as const;
