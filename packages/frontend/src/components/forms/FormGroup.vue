<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export type FormGroupProps = {
  required: boolean;
};
</script>

<script lang="ts" setup>
import { provide } from 'vue';

const props: FormGroupProps = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
});

provide('formGroup', props);
</script>
