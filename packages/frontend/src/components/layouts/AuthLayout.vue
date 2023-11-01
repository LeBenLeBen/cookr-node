<template>
  <div
    class="layout px-4 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex items-center justify-center"
  >
    <div class="container container-xs">
      <header class="mb-8 text-center">
        <router-link
          :to="{ name: 'login' }"
          class="mb-2 font-display text-5xl text-primary-500"
        >
          Cookr
        </router-link>
        <div
          v-if="pageTitle"
          role="heading"
          aria-level="1"
          class="text-alt-500 text-sm uppercase font-bold"
        >
          {{ pageTitle }}
        </div>
      </header>

      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { pageTitle } from '@/composables/usePageTitle';
</script>

<style scoped>
.layout {
  min-height: 100vh;

  @supports (min-height: -webkit-fill-available) {
    min-height: -webkit-fill-available;
  }
}
</style>
