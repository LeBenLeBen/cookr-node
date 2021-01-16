<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { provide } from 'vue';

export default {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    provide('formGroup', props);
  },
};
</script>
