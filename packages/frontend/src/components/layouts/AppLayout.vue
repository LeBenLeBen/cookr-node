<template>
  <Header :menu="menu" />

  <div class="container pb-20">
    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-14">
      <div class="md:col-span-1 hidden md:block">
        <Nav :menu="menu" />
      </div>

      <main class="min-w-full md:col-start-2 md:col-span-2 lg:col-span-3">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  computed: {
    menu() {
      return [
        {
          label: this.$t('app.explore'),
          items: [
            {
              label: this.$t('app.home'),
              icon: 'home-alt2',
              to: { name: 'home' },
            },
            {
              label: this.$t('app.browse'),
              icon: 'restaurant',
              to: {
                name: 'recipes',
              },
            },
          ],
        },
        {
          label: this.$t('app.mySpace'),
          items: [
            {
              label: this.$t('app.myRecipes'),
              icon: 'book',
              to: {
                name: 'user',
                params: { username: store?.state?.currentUser?.username },
              },
            },
          ],
        },
      ];
    },
  },
};
</script>
