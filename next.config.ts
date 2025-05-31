// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1) Le dice a Next.js que prepare la app para `next export`
  output: "export",

  // 2) Con `trailingSlash: true`, cada ruta se exporta como carpeta/index.html
  trailingSlash: true,

  // 3) (Opcional) Si quieres que tu PWA funcione offline, instala `next-pwa`
  // y descomenta la sección siguiente. Si no necesitas service worker, omite todo esto.
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  // },
};

export default nextConfig;


