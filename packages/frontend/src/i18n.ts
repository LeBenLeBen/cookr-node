import { createI18n } from 'vue-i18n';

import fr from './locales/fr';

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  globalInjection: true,
  legacy: false,
  messages: {
    fr,
  },
});

export default i18n;
