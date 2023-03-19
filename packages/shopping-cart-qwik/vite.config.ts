/// <reference types="vitest" />
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/shopping-cart-qwik',
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/shopping-cart-qwik/client',
      },
      ssr: {
        outDir: '../../dist/apps/shopping-cart-qwik/server',
      },
    }
    ),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
  

  // Uncomment this if you are using workers.
  worker: {
   plugins: [
     viteTsConfigPaths({
       root: '../../',
     }),
   ],
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
