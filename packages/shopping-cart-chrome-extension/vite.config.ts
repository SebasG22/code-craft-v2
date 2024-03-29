/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
export default defineConfig({
  cacheDir: '../../node_modules/.vite/shopping-cart-chrome-extension',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    vue(),
    viteTsConfigPaths({
      root: '../../',
    }),
    // crx({ manifest })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
