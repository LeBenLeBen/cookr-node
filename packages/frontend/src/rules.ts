import { configure, defineRule } from 'vee-validate';
import { required, integer, min_value } from '@vee-validate/rules';
import i18n from './i18n';

configure({
  generateMessage: ({ rule }) => {
    switch (rule?.name) {
      case 'required':
        return i18n.global.t('forms.rules.required');
      case 'integer':
        return i18n.global.t('forms.rules.integer');
      case 'min_value': {
        let min = null;

        if (Array.isArray(rule.params)) {
          min = rule.params[0];
        } else if (rule.params) {
          min = rule.params.min;
        }

        return i18n.global.t('forms.rules.minValue', {
          value: min,
        });
      }
      default:
        return i18n.global.t('forms.rules.invalid');
    }
  },
});

defineRule('required', required);
defineRule('integer', integer);
defineRule('min_value', min_value);

export default {};
