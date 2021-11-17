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
import { computed, PropType } from 'vue';

import { crop, hdpiSources, imageUrl } from '@/helpers/images';
import { GQLUploadFile } from '@/types/graphqlTypes';

import recipePlaceholder from '../assets/images/recipe-placeholder.svg';

const props = defineProps({
  image: {
    type: Object as PropType<Pick<GQLUploadFile, 'hash' | 'ext'>>,
    default: null,
  },
  width: {
    type: [Number, String],
    required: true,
  },
  height: {
    type: [Number, String],
    required: true,
  },
});

const picture = computed(() => {
  const url = imageUrl(props.image);
  const cropOptions = {
    w: props.width,
    h: props.height,
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
