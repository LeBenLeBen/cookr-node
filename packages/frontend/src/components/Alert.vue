<script lang="ts">
import { CAlert, CIcon } from 'chusho';
import { VNode, defineComponent, h, mergeProps } from 'vue';

export default defineComponent({
  setup(props, { attrs, slots }) {
    const icons = {
      success: 'ok',
      error: 'danger',
      info: 'info',
    };
    const className = {
      success: 'text-green-500',
      error: 'text-red-500',
      info: 'text-blue-500',
    };
    const iconId = icons[attrs.variant as keyof typeof icons];

    return () => {
      const children: VNode[] = slots.default ? slots.default() : [];

      if (iconId) {
        children.unshift(
          h(CIcon, {
            id: iconId,
            class: [
              className[attrs.variant as keyof typeof className],
              'mr-4 flex-shrink-0',
            ],
          })
        );
      }

      return h(CAlert, mergeProps({ class: 'flex' }, attrs), () => children);
    };
  },
});
</script>
