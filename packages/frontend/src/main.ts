import urql from '@urql/vue';
import Chusho, { $chusho, mergeDeep } from 'chusho';
import { createApp } from 'vue';
import 'windi.css';

import apiClient from '@/services/apiClient';

import '@/assets/css/main.css';

import App from '@/App.vue';
import i18n from '@/i18n';
import router from '@/router';
import '@/rules';

import chushoConfig from '../chusho.config';

createApp(App)
  .use(urql, apiClient)
  .use(router)
  .use(i18n)
  .use(Chusho, chushoConfig)
  .mount('#app');

if (import.meta.hot) {
  import.meta.hot.accept('../chusho.config.ts', (newConfig) => {
    mergeDeep($chusho.options, newConfig?.default);
  });
}
