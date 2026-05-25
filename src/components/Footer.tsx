import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-max grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/logo_dark.png"
            alt={site.name}
            width={310}
            height={150}
            className="h-[5rem] w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.tagline}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary"
            >
              <Image src="/social/instagram.svg" alt="" width={20} height={20} className="brightness-0 invert" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="E-mail"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary"
            >
              <Image src="/social/email.svg" alt="" width={20} height={20} className="brightness-0 invert" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Contato
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>{site.address.line1}</li>
            <li>{site.address.line2}</li>
            <li>{site.address.zip}</li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-primary">
                {site.email}
              </a>
            </li>
            <li>{site.instagramHandle}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Institucional
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              <Link href="/politica-de-privacidade" className="transition hover:text-primary">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="transition hover:text-primary">
                Termos de Uso
              </Link>
            </li>
            <li>
              <a
                href={site.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                Acessar a plataforma
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-white/50 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>Campina Grande - PB, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
