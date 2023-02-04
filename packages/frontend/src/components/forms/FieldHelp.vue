<template>
  <div :id="formGroup?.ids.help" class="mt-2 text-sm text-alt-600">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { FormGroupSymbol } from 'chusho';
import { inject } from 'vue';

const formGroup = inject(FormGroupSymbol);
</script>
