<template>
  <CBtn
    :to="tag.slug ? { name: 'tag', params: { slug: tag.slug } } : undefined"
    class="py-2 px-4 text-xs sm:text-sm font-medium text-alt-700 leading-none sm:leading-none bg-alt-200 bg-opacity-75 hover:bg-opacity-100 rounded-full"
    :class="{ 'hover:text-alt-900': tag.slug }"
  >
    {{ tag.title }}
  </CBtn>
</template>

<script lang="ts" setup>
import { Tags } from '../gql/graphql';

defineProps<{
  tag: Tags;
}>();
</script>
