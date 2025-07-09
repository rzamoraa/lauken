import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import sitemap from 'vite-plugin-sitemap';

// Configura tu dominio aquí
// const domain = 'https://inmobiliarialauken.cl';  // Cambia a tu dominio real

export default defineConfig({
  plugins: [
    react(),
    // sitemap({
    //   hostname: domain,
    //   routes: [
    //     '/',
    //     '/entre-valles',
    //     '/costa-pulin',
    //     '/san-rafael',
    //   ],
    // }),
  ],
});