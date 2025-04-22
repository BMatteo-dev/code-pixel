import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(), // ➕ GZIP activé par défaut
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
});
