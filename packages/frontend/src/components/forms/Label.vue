<template>
  <label class="block font-medium">
    <slot />
    <abbr
      v-if="attrs.required"
      :title="$t('forms.rules.required')"
      class="text-red-700 ml-1"
      >*</abbr
    >
  </label>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const formGroup = inject('formGroup', {});

    return {
      attrs: {
        required: props.required || formGroup?.required,
      },
    };
  },
};
</script>
