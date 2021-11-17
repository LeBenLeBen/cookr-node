<template>
  <textarea
    :value="modelValue"
    class="
      block
      w-full
      py-3
      px-5
      border border-alt-300
      bg-white
      rounded-lg
      shadow-inner
      ring-offset-2 ring-offset-alt-100
    "
    v-bind="attrs"
    @input="(e) => $emit('update:model-value', (e.target as HTMLTextAreaElement).value)"
  />
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { FormGroupProps } from './FormGroup.vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: null,
  },
});

defineEmits(['update:model-value']);

const formGroup = inject<FormGroupProps | null>('formGroup', null);

const attrs = {
  required: props.required ?? formGroup?.required,
};
</script>
