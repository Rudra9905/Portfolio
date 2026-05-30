import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages uses /Portfolio/; Vercel and local dev use /
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
});
