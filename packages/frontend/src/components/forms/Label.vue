<template>
  <CLabel>
    <slot />
    <abbr
      v-if="formGroup?.required.value"
      :title="$t('forms.rules.required')"
      class="text-red-700 ml-1"
      >*</abbr
    >
  </CLabel>
</template>

<script lang="ts" setup>
import { inject } from 'vue';

import { FormGroupSymbol } from 'chusho';

const formGroup = inject(FormGroupSymbol);
</script>
