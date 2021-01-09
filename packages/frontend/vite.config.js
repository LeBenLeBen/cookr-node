const path = require('path');

import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '/@': path.resolve(__dirname, 'src'),
  },
  plugins: [
    vue(),
    ViteComponents({
      dirs: ['src/components'],
      extensions: ['vue', 'js'],
      libraries: [{ name: 'chusho', entries: ['CIcon'] }],
    }),
  ],
  build: {
    rollupOptions: {
      external: ['react'],
    },
  },
  optimizeDeps: {
    include: [
      '@apollo/client/core',
      'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
    ],
  },
};
