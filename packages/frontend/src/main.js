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
      alert: {
        class: ({ variant }) => {
          return [
            'block py-3 px-4 rounded',
            {
              'bg-red-100 text-red-700': variant?.includes('error'),
            },
          ];
        },
      },
      btn: {
        class: ({ variant }) => {
          return [
            'inline-block ring-offset-2 ring-offset-alt-100',
            {
              'py-3 px-5 text-white font-bold bg-primary-500 rounded-lg': variant?.includes(
                'primary'
              ),
              'block w-full': variant?.includes('block'),
            },
          ];
        },
      },
      icon: {
        spriteUrl,
        class: 'icon',
      },
    },
  })
  .mount('#app');
