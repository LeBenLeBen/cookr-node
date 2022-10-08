<template>
  <div :id="formGroup?.ids.help" class="mt-2 text-sm text-alt-600">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';

import { FormGroupSymbol } from 'chusho';

const formGroup = inject(FormGroupSymbol);
</script>
