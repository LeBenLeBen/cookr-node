<template>
  <div class="bg-alt-200 overflow-hidden">
    <img
      :src="imageUrl"
      :width="width"
      :height="height"
      alt=""
      class="min-w-full min-h-full object-cover"
      loading="lazy"
    />
  </div>
</template>

<script>
import { crop, imageUrl } from '../helpers/images.js';
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
    imageUrl() {
      const url = imageUrl(this.image);

      return url
        ? crop(url, {
            w: this.width,
            h: this.height,
          })
        : recipePlaceholder;
    },
  },
};
</script>
