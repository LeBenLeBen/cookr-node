<template>
  <div class="overflow-hidden bg-alt-50 rounded-xl border-b border-alt-200">
    <ContentLoader
      view-box="0 0 280 259"
      :speed="2"
      primary-color="#E7DFEC"
      secondary-color="#F5F2F8"
    >
      <rect x="0" y="0" rx="0" ry="0" width="280" height="187" />
      <rect x="16" y="200" rx="0" ry="0" width="220" height="22" />
      <rect x="16" y="229" rx="0" ry="0" width="100" height="16" />
    </ContentLoader>
  </div>
</template>

<script lang="ts" setup>
import { ContentLoader } from 'vue-content-loader';
</script>
