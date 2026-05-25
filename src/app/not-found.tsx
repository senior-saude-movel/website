import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 text-center">
      <Image
        src="/brand/logo-mark.png"
        alt={site.name}
        width={150}
        height={150}
        className="h-20 w-20"
      />
      <p className="mt-8 text-6xl font-bold text-secondary">404</p>
      <h1 className="mt-2 text-xl font-semibold text-secondary">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-sm text-muted">
        A página que você procura não existe ou foi movida.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
