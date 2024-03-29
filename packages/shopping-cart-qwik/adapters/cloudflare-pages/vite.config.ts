import { cloudflarePagesAdaptor } from '@builder.io/qwik-city/adapters/cloudflare-pages/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: [
          'packages/shopping-cart-qwik/src/entry.cloudflare-pages.tsx',
          '@qwik-city-plan',
        ],
      },
    },
    plugins: [
      cloudflarePagesAdaptor({
        staticGenerate: true,
      }),
    ],
  };
});
