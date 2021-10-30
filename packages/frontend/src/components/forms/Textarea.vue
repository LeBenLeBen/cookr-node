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
    @input="(e) => $emit('update:model-value', e.target.value)"
  />
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: null,
    },
  },

  emits: ['update:model-value'],

  setup(props) {
    const formGroup = inject('formGroup', {});

    return {
      attrs: {
        required: props.required ?? formGroup?.required,
      },
    };
  },
};
</script>
