const path = require('path');

import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
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
        {
          name: 'vee-validate',
          entries: ['Form', 'Field'],
        },
      ],
    }),
    WindiCSS({
      preflight: {
        enableAll: true,
      },
      scan: {
        include: ['./chusho.config.js'],
      },
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
