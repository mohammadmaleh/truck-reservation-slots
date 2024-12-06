/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';
export default defineConfig({
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
