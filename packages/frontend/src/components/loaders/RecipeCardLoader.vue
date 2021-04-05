<template>
  <div class="overflow-hidden bg-alt-50 rounded-xl border-b border-alt-200">
    <ContentLoader
      view-box="0 0 288 236"
      :speed="2"
      primary-color="#E7DFEC"
      secondary-color="#F5F2F8"
    >
      <rect x="0" y="0" rx="0" ry="0" width="288" height="192" />
      <rect x="16" y="202" rx="0" ry="0" width="220" height="24" />
    </ContentLoader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader,
  },
};
</script>
