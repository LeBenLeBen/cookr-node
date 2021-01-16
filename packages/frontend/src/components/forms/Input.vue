<template>
  <input
    :value="modelValue"
    class="block w-full py-3 px-5 border border-alt-200 bg-white rounded-lg ring-offset-2 ring-offset-alt-100"
    v-bind="attrs"
    @input="(e) => $emit('update:modelValue', e.target.value)"
  />
</template>

<script>
import { inject } from 'vue';
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: null,
    },
  },

  emits: ['update:modelValue'],

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
