<template>
  <div
    class="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full bg-alt-200"
  >
    <CPicture
      v-if="picture"
      v-bind="picture"
      class="w-full h-full object-cover"
    />
    <CIcon v-else id="person" :scale="1.75" class="text-alt-300" />
  </div>
</template>

<script>
import { crop, hdpiSources, imageUrl } from '@/helpers/images';

export default {
  props: {
    image: {
      type: Object,
      default: null,
    },
  },

  setup(props) {
    const url = imageUrl(props.image);
    const cropOptions = {
      w: 48,
      h: 48,
    };
    const picture = url
      ? {
          src: crop(url, cropOptions),
          sources: hdpiSources(url, cropOptions),
          loading: 'lazy',
        }
      : null;

    return {
      picture,
    };
  },
};
</script>
