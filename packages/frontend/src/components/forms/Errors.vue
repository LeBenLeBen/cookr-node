<script lang="ts">
import { FormGroupSymbol } from 'chusho';
import { ErrorMessage } from 'vee-validate';
import {
  ComponentPublicInstance,
  defineComponent,
  h,
  inject,
  mergeProps,
} from 'vue';

export default defineComponent({
  setup(props, { attrs, slots }) {
    const formGroup = inject(FormGroupSymbol);

    return () =>
      h(
        ErrorMessage as unknown as ComponentPublicInstance,
        mergeProps(
          { class: 'mt-2 text-red-600 font-medium', as: 'div' },
          props,
          attrs,
          {
            id: attrs.id ?? formGroup?.ids.errors,
          }
        ),
        slots
      );
  },
});
</script>
