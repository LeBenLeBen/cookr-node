import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import WindiCSS from 'vite-plugin-windicss';

const path = require('path');

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
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://backend:8055',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/assets': {
        target: 'http://backend:8055',
        changeOrigin: true,
      },
      '/files': {
        target: 'http://backend:8055',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.match(/^C[A-Z]/)) {
            return { name: componentName, from: 'chusho' };
          }
        },
        (componentName) => {
          if (['Form', 'Field'].includes(componentName)) {
            return { name: componentName, from: 'vee-validate' };
          }
        },
      ],
    }),
    WindiCSS({
      preflight: {
        enableAll: true,
      },
      scan: {
        include: ['./chusho.config.ts'],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['graphql'],
    include: [
      'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      'algoliasearch/lite',
      'scroll-into-view-if-needed',
      'vue-content-loader',
      '@vueform/multiselect',
    ],
  },
};
