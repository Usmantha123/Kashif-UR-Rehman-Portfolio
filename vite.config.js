import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path can be configured for GitHub Pages if needed: base: '/kashif-Portfolio/'
  base: './',
  server: {
    port: 3000,
    open: false,
  },
});

