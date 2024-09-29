<template>
  <ul class="flex flex-wrap gap-2">
    <li v-for="(tag, i) in tags" :key="i">
      <Tag :tag="tag" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Tags } from '@/gql/graphql';

defineProps<{
  tags: Readonly<Tags[]>;
}>();
</script>
