<h1 align="center">
  Web Site — Sênior Saúde Móvel
</h1>

<p align="center">
  Landing page institucional da Sênior Saúde Móvel.<br/>
  Desenvolvida com <strong>Next.js (App Router) + TypeScript + Tailwind CSS</strong>.
</p>

## 🚀 Começando

1. **Clone o projeto**

   ```shell
   git clone git@github.com:senior-saude-movel/website.git
   cd website
   ```

2. **Instale as dependências**

   ```shell
   npm install
   ```

3. **Rode em modo de desenvolvimento**

   ```shell
   npm run dev
   ```

   O site estará disponível em `http://localhost:3000`.

## 📦 Scripts

| Comando          | Descrição                                              |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`    | Inicia o servidor de desenvolvimento.                  |
| `npm run build`  | Gera o build estático em `out/` (`output: 'export'`).  |
| `npm run start`  | Serve o build de produção localmente.                  |
| `npm run lint`   | Executa o ESLint.                                      |
| `npm run format` | Formata o código com Prettier.                         |

## 🧐 Estrutura

```
.
├── public/                 # Assets estáticos
│   ├── brand/              # Logos da marca
│   ├── features/           # Ícones de funcionalidades (sono, frequência, etc.)
│   ├── screens/            # Capturas de tela do app e da plataforma web
│   ├── partners/           # Logos dos parceiros
│   └── _redirects          # Redirecionamentos do Netlify
├── src/
│   ├── app/
│   │   ├── layout.tsx                       # Layout raiz + metadados/SEO
│   │   ├── page.tsx                         # Landing page
│   │   ├── politica-de-privacidade/         # Política de Privacidade
│   │   ├── termos-de-uso/                   # Termos de Uso
│   │   ├── globals.css                      # Estilos globais + Tailwind
│   │   ├── robots.ts / sitemap.ts           # SEO
│   │   └── not-found.tsx                     # Página 404
│   ├── components/         # Navbar, Footer, ScreensMarquee, LegalShell
│   └── lib/site.ts         # Dados e constantes do site (contato, links)
├── next.config.mjs        # Configuração do Next.js (export estático)
└── tailwind.config.ts     # Tema e paleta de cores da marca
```

## 🎨 Paleta da marca

| Token            | Cor       |
| ---------------- | --------- |
| `primary`        | `#5e929f` |
| `primary-dark`   | `#53828d` |
| `secondary`      | `#1a475c` |
| `surface`        | `#f0f0f0` |
| `muted`          | `#6a6a6a` |

## 💫 Deploy

O deploy é feito automaticamente no **Netlify** a cada push na branch `master`
(ver `.github/workflows/main.yml`). O build estático é publicado a partir do
diretório `out/`.
