<template>
  <div class="overflow-hidden">
    <CPicture
      v-bind="picture"
      :width="width"
      :height="height"
      alt=""
      class="min-w-full min-h-full object-cover"
      loading="lazy"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { Image } from '@/services/types';

import { crop, hdpiSources, imageUrl } from '@/helpers/images';

import recipePlaceholder from '../assets/images/recipe-placeholder.svg';

const props = defineProps<{
  image?: Image | null;
  width: number | string;
  height: number | string;
}>();

const picture = computed(() => {
  const url = imageUrl(props.image);
  const cropOptions = {
    width: props.width,
    height: props.height,
  };
  return url
    ? {
        src: crop(url, cropOptions),
        sources: hdpiSources(url, cropOptions),
      }
    : {
        src: recipePlaceholder,
      };
});
</script>
