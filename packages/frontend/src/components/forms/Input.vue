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
    @input="(e) => $emit('update:model-value', e.target.value)"
  />
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
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
  },

  emits: ['update:model-value'],

  setup(props) {
    const formGroup = inject('formGroup', {});

    return {
      attrs: {
        required: props.required ?? formGroup?.required,
        disabled: props.disabled,
      },
    };
  },
};
</script>
