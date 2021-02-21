<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader,
  },
};
</script>

<template>
  <ContentLoader
    view-box="0 0 288 222"
    :speed="2"
    primary-color="#E7DFEC"
    secondary-color="#F5F2F8"
  >
    <rect x="0" y="0" rx="8" ry="8" width="288" height="192" />
    <rect x="8" y="202" rx="0" ry="0" width="250" height="20" />
  </ContentLoader>
</template>
