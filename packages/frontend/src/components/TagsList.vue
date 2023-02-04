<template>
  <ul>
    <li v-for="(tag, i) in tags" :key="i" class="inline-flex mr-2 my-1">
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
