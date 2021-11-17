<script lang="ts">
import { defineComponent, h, mergeProps } from 'vue';
import { ErrorMessage } from 'vee-validate';

export default defineComponent({
  setup(props, { attrs, slots }) {
    return () =>
      h(
        defineComponent(ErrorMessage),
        mergeProps(
          { class: 'mt-2 text-red-600 font-medium', as: 'div' },
          props,
          attrs
        ),
        slots
      );
  },
});
</script>
