<template>
  <CCollapse
    v-model="menuIsOpen"
    class="sticky md:relative top-0 py-3 sm:py-4 mb-4 bg-alt-100"
    :class="{ 'shadow-md md:shadow-none': windowScroll.y.value > 0 }"
  >
    <header>
      <div class="container">
        <div
          class="flex items-center md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-14"
        >
          <div
            :class="{
              'w-0 md:w-auto overflow-hidden': searchIsOpen,
              'mr-4 sm:mr-6': !searchIsOpen,
            }"
            class="flex-shrink-0"
          >
            <router-link
              :to="{ name: 'home' }"
              class="font-display text-2xl lg:text-3xl text-primary-500"
            >
              Cookr
            </router-link>
          </div>

          <div class="flex-grow flex items-center md:col-start-2 md:col-span-3">
            <Search
              :is-open="searchIsOpen"
              @update:isOpen="(val) => (searchIsOpen = val)"
            />
            <div class="ml-8 hidden md:block">
              <CurrentUser />
            </div>
          </div>

          <div
            :class="{
              'w-0 md:w-auto overflow-hidden': searchIsOpen,
              'ml-2 sm:ml-4': !searchIsOpen,
            }"
            class="md:hidden flex-shrink-0"
          >
            <CCollapseBtn
              class="flex items-center justify-center w-10 h-10 p-1 hover:bg-alt-200 rounded-md"
            >
              <CIcon id="hamburger" :scale="1.5" />
            </CCollapseBtn>
          </div>
        </div>
      </div>
    </header>

    <CCollapseContent
      class="md:hidden flex flex-col items-center justify-center p-8 fixed inset-0 z-40 text-center bg-alt-800 bg-opacity-95"
      :transition="{
        enterActiveClass: 'transition ease-out duration-100',
        enterFromClass: 'transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveActiveClass: 'transition ease-in duration-75',
        leaveFromClass: 'transform opacity-100 scale-100',
        leaveToClass: 'transform opacity-0 scale-95',
      }"
      @click="() => (menuIsOpen = false)"
    >
      <CurrentUser
        class="absolute top-3 left-4 text-alt-200 hover:text-white"
      />

      <CCollapseBtn
        class="absolute top-3 right-4 flex items-center justify-center w-10 h-10 p-1 text-alt-200 hover:text-white hover:bg-alt-900 rounded-md"
      >
        <CIcon id="close" :scale="1.5" />
      </CCollapseBtn>

      <div v-for="(group, i) in menu" :key="i">
        <div class="mb-3 uppercase font-bold text-sm text-alt-500">
          {{ group.label }}
        </div>
        <ul class="space-y-1">
          <li v-for="item in group.items" :key="item.label">
            <router-link
              v-slot="{ href, navigate, isActive }"
              :to="item.to"
              custom
            >
              <a
                :href="href"
                class="flex items-center px-4 py-2 lg:-ml-4 text-lg font-bold rounded-full"
                :class="{
                  'text-primary-500 focus:text-primary-500 bg-white': isActive,
                  'text-alt-200 hover:text-white': !isActive,
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
      </div>
    </CCollapseContent>
  </CCollapse>
</template>

<script>
import { ref } from 'vue';
import { useWindowScroll } from '@vueuse/core';

export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },

  setup() {
    return {
      searchIsOpen: ref(false),
      menuIsOpen: ref(false),
      windowScroll: useWindowScroll(),
    };
  },
};
</script>
