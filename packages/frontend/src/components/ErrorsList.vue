<template>
  <Alert v-if="errors" variant="error" class="mb-4">
    <ul>
      <li v-for="(error, i) in errors" :key="i">
        {{
          typeof error === 'string'
            ? error
            : $t(`api.${error.id.toLowerCase()}`)
        }}
      </li>
    </ul>
  </Alert>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

import { NormalizedApiErrors } from '@/helpers/api';

defineProps({
  errors: {
    type: Array as PropType<NormalizedApiErrors | null>,
    default: null,
  },
});
</script>
