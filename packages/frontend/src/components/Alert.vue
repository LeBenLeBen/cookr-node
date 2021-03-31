<script>
import { h, mergeProps } from 'vue';
import { CAlert, CIcon } from 'chusho';

export default {
  setup(props, { attrs, slots }) {
    const icons = {
      error: 'danger',
      info: 'info',
    };
    const className = {
      error: 'text-red-500',
      info: 'text-blue-500',
    };
    const iconId = icons[attrs.variant];

    return () => {
      const children = [slots.default()];

      if (iconId) {
        children.unshift(
          h(CIcon, {
            id: iconId,
            class: [className[attrs.variant], 'mr-4'],
          })
        );
      }

      return h(CAlert, mergeProps({ class: 'flex' }, attrs), () => children);
    };
  },
};
</script>
