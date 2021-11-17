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

<script lang="ts" setup>
import { inject } from 'vue';

import { FormGroupProps } from './FormGroup.vue';

const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
});

const formGroup = inject<FormGroupProps | null>('formGroup', null);

const attrs = {
  required: props.required || formGroup?.required,
};
</script>
