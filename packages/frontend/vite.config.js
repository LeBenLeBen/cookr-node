const path = require('path');

import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  plugins: [
    vue(),
    ViteComponents({
      libraries: [
        {
          name: 'chusho',
          entries: [
            'CAlert',
            'CBtn',
            'CIcon',
            'CCollapse',
            'CCollapseBtn',
            'CCollapseContent',
            'CPicture',
          ],
        },
      ],
    }),
  ],
  optimizeDeps: {
    exclude: ['graphql'],
    include: [
      '@apollo/client/core',
      '@apollo/client/link/core/from',
      '@apollo/client/link/error',
      'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      'algoliasearch/lite',
      'scroll-into-view-if-needed',
      'vue-content-loader',
      '@vueform/multiselect',
    ],
  },
};
