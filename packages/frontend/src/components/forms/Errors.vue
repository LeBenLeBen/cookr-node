<script>
import { ErrorMessage } from 'vee-validate';
import { h, mergeProps } from 'vue';

export default {
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ErrorMessage,
        mergeProps(
          { class: 'mt-2 text-red-600 font-medium', as: 'div' },
          props,
          attrs
        ),
        slots
      );
  },
};
</script>
