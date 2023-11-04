<template>
  <div class="overflow-hidden bg-alt-50 rounded-xl border-b border-alt-200">
    <ContentLoader
      view-box="0 0 343 109"
      :speed="2"
      primary-color="#E7DFEC"
      secondary-color="#F5F2F8"
      class="sm:hidden"
    >
      <rect x="0" y="0" rx="0" ry="0" width="114" height="109" />
      <rect x="130" y="14" rx="3" ry="3" width="196" height="24" />
      <rect x="130" y="44" rx="3" ry="3" width="70" height="18" />
      <rect x="130" y="76" rx="3" ry="3" width="110" height="20" />
    </ContentLoader>
    <ContentLoader
      view-box="0 0 718 150"
      :speed="2"
      primary-color="#E7DFEC"
      secondary-color="#F5F2F8"
      class="hidden sm:block"
    >
      <rect x="0" y="0" rx="0" ry="0" width="200" height="150" />
      <rect x="224" y="20" rx="3" ry="3" width="400" height="30" />
      <rect x="224" y="60" rx="3" ry="3" width="100" height="20" />
      <rect x="224" y="105" rx="3" ry="3" width="250" height="25" />
    </ContentLoader>
  </div>
</template>

<script lang="ts" setup>
import { ContentLoader } from 'vue-content-loader';
</script>
