<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader,
  },
};
</script>

<template>
  <div class="p-3 bg-alt-50 rounded-xl">
    <ContentLoader
      :width="320"
      :height="320"
      :speed="2"
      primary-color="#F5F2F8"
      secondary-color="#E7DFEC"
      class="sm:hidden"
    >
      <rect x="0" y="0" rx="8" ry="8" width="320" height="212" />
      <rect x="0" y="228" rx="3" ry="3" width="300" height="30" />
      <rect x="0" y="264" rx="3" ry="3" width="120" height="14" />
      <rect x="0" y="295" rx="3" ry="3" width="240" height="25" />
    </ContentLoader>
    <ContentLoader
      :width="698"
      :height="120"
      :speed="2"
      primary-color="#F5F2F8"
      secondary-color="#E7DFEC"
      class="hidden sm:block"
    >
      <rect x="0" y="0" rx="8" ry="8" width="180" height="120" />
      <rect x="200" y="0" rx="3" ry="3" width="400" height="30" />
      <rect x="360" y="11" rx="3" ry="3" width="3" height="14" />
      <rect x="200" y="40" rx="3" ry="3" width="100" height="20" />
      <rect x="200" y="95" rx="3" ry="3" width="250" height="25" />
    </ContentLoader>
  </div>
</template>
