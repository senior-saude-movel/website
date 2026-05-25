/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática — a LP não precisa de servidor (deploy no Netlify via ./out)
  output: 'export',
  trailingSlash: true,
  images: {
    // next/image precisa de unoptimized no modo export
    unoptimized: true,
  },
};

export default nextConfig;
