import { createApp } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import Chusho, { $chusho } from 'chusho';
import chushoConfig from '../chusho.config.js';

import router from './router';
import i18n from './i18n';
import apolloClient from './services/apolloClient.js';
import App from './App.vue';

import './assets/css/main.css';

createApp(App)
  .use(router)
  .use(i18n)
  .use(Chusho, chushoConfig)
  .use({
    install: (app) => {
      app.provide(DefaultApolloClient, apolloClient);
    },
  })
  .mount('#app');

if (import.meta.hot) {
  import.meta.hot.accept('../chusho.config.js', (newConfig) => {
    $chusho.options = Object.assign({}, $chusho.options, newConfig.default);
  });
}
