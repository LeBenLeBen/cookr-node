<template>
  <div
    class="layout px-4 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex items-center justify-center"
  >
    <div class="container container-xs">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: -webkit-fill-available;
}
</style>
