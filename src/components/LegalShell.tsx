import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type LegalShellProps = {
  title: string;
  updatedAt: string;
  intro?: string;
  children: React.ReactNode;
};

export default function LegalShell({
  title,
  updatedAt,
  intro,
  children,
}: LegalShellProps) {
  return (
    <>
      <Navbar solid />
      <main>
        <header className="bg-secondary pb-16 pt-36 text-white sm:pt-44">
          <div className="container-max">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              <span aria-hidden>←</span> Voltar para a página inicial
            </Link>
            <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{title}</h1>
            <p className="mt-3 text-sm text-white/60">
              Última atualização: {updatedAt}
            </p>
            {intro && (
              <p className="mt-6 max-w-3xl leading-relaxed text-white/80">{intro}</p>
            )}
          </div>
        </header>

        <div className="bg-white py-16">
          <article className="container-max legal max-w-3xl">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
