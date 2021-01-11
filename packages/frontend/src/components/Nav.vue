<template>
  <nav class="sticky top-8">
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
              class="flex items-center px-4 py-2 lg:-ml-4 font-bold rounded-full"
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
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>
