import { createApp } from 'vue';
import Chusho, { $chusho } from 'chusho';
import chushoConfig from '../chusho.config.js';

import router from './router';
import i18n from './i18n';
import '@/rules';
import App from './App.vue';

import 'windi.css';
import './assets/css/main.css';

createApp(App).use(router).use(i18n).use(Chusho, chushoConfig).mount('#app');

if (import.meta.hot) {
  import.meta.hot.accept('../chusho.config.js', (newConfig) => {
    $chusho.options = Object.assign({}, $chusho.options, newConfig.default);
  });
}
