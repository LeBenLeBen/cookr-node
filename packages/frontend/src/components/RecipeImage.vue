<template>
  <div class="overflow-hidden">
    <CPicture
      v-bind="picture"
      :width="width"
      :height="height"
      alt=""
      class="min-w-full min-h-full object-cover bg-alt-200"
      loading="lazy"
    />
  </div>
</template>

<script>
import { crop, hdpiSources, imageUrl } from '../helpers/images.js';
import recipePlaceholder from '../assets/images/recipe-placeholder.svg';

export default {
  props: {
    image: {
      type: Object,
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
  },

  computed: {
    picture() {
      const url = imageUrl(this.image);
      const cropOptions = {
        w: this.width,
        h: this.height,
      };
      return url
        ? {
            src: crop(url, cropOptions),
            sources: hdpiSources(url, cropOptions),
          }
        : {
            src: recipePlaceholder,
          };
    },
  },
};
</script>
