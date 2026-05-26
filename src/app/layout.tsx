import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Sênior Saúde Móvel',
    'fisioterapia',
    'gerontologia',
    'monitoramento remoto',
    'saúde do idoso',
    'telemonitoramento',
  ],
  authors: [{ name: site.name }],
  verification: {
    google: 'uuh7bO3Ekur-Cji1dIkQVv_Pkl_sj3XKQpnpD3IFHNE',
  },
  icons: {
    icon: '/brand/favicon.png',
    apple: '/brand/logo-192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/og-image.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
