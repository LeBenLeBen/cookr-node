<template>
  <div>
    <div class="text-center">
      <h1 class="h1 mb-3">{{ $t('notFound.title') }}</h1>
      <p class="text-alt-600 mb-6">{{ $t('notFound.body') }}</p>
      <div>
        <CBtn variant="default" :to="{ name: 'home' }">
          {{ $t('notFound.home') }}
        </CBtn>
      </div>
    </div>

    <teleport to="head">
      <meta name="robots" content="noindex" />
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import usePageTitle from '@/composables/usePageTitle';

usePageTitle(null);
</script>
