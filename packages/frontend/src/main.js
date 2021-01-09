import { createApp } from 'vue';
import Chusho from 'chusho';

import router from './router';
import i18n from './i18n';
import App from './App.vue';

import './assets/css/main.css';
import spriteUrl from './assets/images/icons.svg';

createApp(App)
  .use(router)
  .use(i18n)
  .use(Chusho, {
    components: {
      icon: {
        spriteUrl,
        class: 'icon',
      },
    },
  })
  .mount('#app');
