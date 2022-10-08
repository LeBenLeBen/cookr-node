<script lang="ts">
import {
  ComponentPublicInstance,
  defineComponent,
  h,
  inject,
  mergeProps,
} from 'vue';
import { ErrorMessage } from 'vee-validate';

import { FormGroupSymbol } from 'chusho';

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
