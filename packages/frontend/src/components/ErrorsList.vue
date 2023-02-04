<template>
  <Alert v-if="errors?.length" variant="error" class="mb-4">
    <ul>
      <li v-for="(error, i) in errors" :key="i">
        {{ $t(`api.errors.${error.extensions.code}`) }}
      </li>
    </ul>
  </Alert>
</template>

<script lang="ts" setup>
import { GraphQLError } from 'graphql';

defineProps<{
  errors: GraphQLError[] | null;
}>();
</script>
