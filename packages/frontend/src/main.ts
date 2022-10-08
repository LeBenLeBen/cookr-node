import { createApp } from 'vue';
import urql from '@urql/vue';
import Chusho, { $chusho, mergeDeep } from 'chusho';
import 'windi.css';

import '@/assets/css/main.css';

import i18n from '@/i18n';
import router from '@/router';
import '@/rules';

import apiClient from '@/services/apiClient';

import App from '@/App.vue';

import chushoConfig from '../chusho.config';

createApp(App)
  .use(urql, apiClient)
  .use(router)
  .use(i18n)
  .use(Chusho, chushoConfig)
  .mount('#app');

if (import.meta.hot) {
  import.meta.hot.accept('../chusho.config.ts', (newConfig) => {
    mergeDeep($chusho.options, newConfig.default);
  });
}
