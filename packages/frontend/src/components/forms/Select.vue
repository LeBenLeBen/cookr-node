<template>
  <div class="relative">
    <select
      :value="modelValue"
      class="
        appearance-none
        block
        w-full
        overflow-ellipsis
        border border-alt-300
        bg-white
        shadow-inner
        ring-offset-2 ring-offset-alt-100
      "
      :class="{
        'py-3 pl-5 pr-10 rounded-lg': !variant,
        'py-2 pl-2 pr-6 text-sm rounded': variant.includes('small'),
      }"
      v-bind="attrs"
      @input="(e) => $emit('update:modelValue', e.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <CIcon
      id="chevron-down"
      class="absolute top-1/2 -mt-3 text-alt-500"
      :class="{
        'right-3': !variant,
        'right-2': variant.includes('small'),
      }"
    />
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: [Array],
      default: () => [],
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
