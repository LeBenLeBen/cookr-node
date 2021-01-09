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
        <label for="search" class="sr-only">{{ $t('search.label') }}</label>
        <div class="relative text-alt-400 -mx-4">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <CIcon id="search" :scale="1.5" />
          </div>
          <input
            id="search"
            name="search"
            class="appearance-none block w-full pl-14 pr-4 py-3 border border-transparent rounded-full bg-transparent placeholder-alt-400 outline-none focus:outline-none focus:bg-white focus:ring-0 focus:border-transparent focus:text-alt-800 sm:text-lg"
            :placeholder="$t('search.label')"
            type="search"
          />
        </div>
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
