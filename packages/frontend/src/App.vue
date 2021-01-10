<template>
  <div class="container pt-4 pb-10">
    <div class="grid grid-cols-4 gap-y-10 gap-x-16">
      <div class="col-start-0 col-span-1 self-center">
        <router-link
          :to="{ name: 'home' }"
          class="font-display text-3xl text-primary-500"
        >
          Cookr
        </router-link>
      </div>

      <div class="col-start-2 col-span-5 self-center">
        <Search />
      </div>

      <div class="col-start-0 col-span-1 row-start-2">
        <nav class="sticky top-8">
          <div class="mb-3 uppercase font-bold text-sm text-alt-500">
            {{ $t('app.explore') }}
          </div>
          <ul class="space-y-1">
            <li v-for="item in menu" :key="item.label">
              <router-link
                v-slot="{ href, navigate, isActive }"
                :to="item.to"
                custom
              >
                <a
                  :href="href"
                  class="flex items-center px-5 py-2 -ml-5 font-bold rounded-full"
                  :class="{
                    'text-primary-500 focus:text-primary-500 bg-white': isActive,
                    'text-alt-600 hover:text-alt-800': !isActive,
                  }"
                  @click="navigate"
                >
                  <CIcon
                    :id="item.icon"
                    class="mr-3"
                    :class="{
                      'text-primary-300': isActive,
                      'text-alt-400': !isActive,
                    }"
                  />
                  {{ item.label }}
                </a>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <main class="col-start-2 col-span-5 row-start-2">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';

import apolloClient from './services/apolloClient';

export default {
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  computed: {
    menu() {
      return [
        {
          label: this.$t('app.home'),
          icon: 'home-alt2',
          to: { name: 'home' },
        },
        {
          label: this.$t('app.myRecipes'),
          icon: 'book',
          to: {
            name: 'user',
            params: { username: 'leben' },
          },
        },
      ];
    },
  },
};
</script>
