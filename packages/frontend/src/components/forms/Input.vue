<template>
  <input
    :value="modelValue"
    class="
      block
      w-full
      py-3
      px-5
      border border-alt-300
      rounded-lg
      shadow-inner
      ring-offset-2 ring-offset-alt-100
    "
    :class="{
      'bg-alt-200': disabled,
      'bg-white': !disabled,
    }"
    v-bind="attrs"
    @input="(e) => $emit('update:model-value', (e.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
import { inject } from 'vue';

import { FormGroupProps } from './FormGroup.vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:model-value']);

const formGroup = inject<FormGroupProps | null>('formGroup', null);

const attrs = {
  required: props.required ?? formGroup?.required,
  disabled: props.disabled,
};
</script>
