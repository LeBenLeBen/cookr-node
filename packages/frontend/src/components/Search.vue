<template>
  <div
    v-if="open && results.length"
    class="fixed inset-0 z-30 bg-alt-500 bg-opacity-70"
  ></div>
  <div
    v-clickOutside="() => (open = false)"
    class="relative z-40"
    role="search"
  >
    <label for="search" class="sr-only">{{ $t('search.label') }}</label>
    <div
      class="relative text-alt-400 -mx-4"
      role="combobox"
      :aria-expanded="open ? 'true' : 'false'"
      aria-owns="search-results"
      aria-haspopup="listbox"
    >
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <CIcon id="search" :scale="1.5" />
      </div>
      <input
        id="search"
        ref="searchInput"
        v-model.trim="query"
        name="search"
        class="appearance-none block w-full pl-14 pr-4 py-3 placeholder-alt-400 focus:text-alt-800 sm:text-lg rounded-full bg-alt-50 focus:bg-white border border-transparent focus:border-transparent"
        :placeholder="$t('search.label')"
        autocomplete="off"
        type="search"
        :aria-activedescendant="
          Number.isInteger(indexHighlighted)
            ? `search-result-${indexHighlighted}`
            : ''
        "
        @focus="() => (open = true)"
        @blur="() => (open = false)"
        @keydown="handleKeydown"
      />
      <div
        v-show="!open"
        class="hidden lg:block py-1 px-2 absolute right-5 top-1/2 leading-tight transform -translate-y-1/2 rounded border border-alt-200"
      >
        ⌘ K
      </div>
    </div>

    <ul
      id="search-results"
      aria-labelledby="#search-results-title"
      role="listbox"
      class="search-results absolute top-full mt-3 w-full overflow-x-hidden overflow-y-auto bg-alt-100 rounded-lg shadow-xl divide-y divide-alt-200"
      :class="{ hidden: !open || !results.length }"
      @click="reset"
    >
      <li
        role="presentation"
        class="flex items-center justify-between py-3 px-5"
      >
        <div
          id="search-results-title"
          class="text-sm uppercase text-alt-600 font-bold"
        >
          {{ $t('search.results') }}
        </div>
        <a href="https://www.algolia.com/" target="_blank" rel="noopener">
          <img
            src="../assets/images/search-by-algolia.svg"
            alt="Search by Algolia"
            width="140"
            height="20"
            loading="lazy"
          />
        </a>
      </li>
      <li
        v-for="(result, index) in results"
        :id="`search-result-${index}`"
        :key="result.id"
      >
        <router-link
          :to="{ name: 'recipe', params: { slug: result.slug } }"
          class="flex items-center py-3 pr-4 pl-5 text-alt-800 hover:text-alt-800 hover:bg-white"
          :class="{ 'bg-white': index == indexHighlighted }"
        >
          <div class="flex-grow">
            <div class="text-lg font-bold">
              {{ result.title }}
            </div>
            <RecipeAuthor
              :username="result.author"
              class="text-sm text-alt-600"
            />
          </div>
          <div>
            <TagsList :tags="result.tags" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { ref, watch } from 'vue';
import { clickOutside } from 'chusho';
import scrollIntoView from 'scroll-into-view-if-needed';
import { useDebounceFn, useEventListener } from '@vueuse/core';

export default {
  directives: { clickOutside },

  setup() {
    const client = algoliasearch(
      import.meta.env.VITE_ALGOLIA_APP_ID,
      import.meta.env.VITE_ALGOLIA_SEARCH_ONLY_API_KEY
    );
    const index = client.initIndex(import.meta.env.VITE_ALGOLIA_INDEX);
    const searchInput = ref(null);
    const open = ref(false);
    const query = ref(null);
    const results = ref([]);
    const indexHighlighted = ref(null);

    watch(
      () => query.value,
      useDebounceFn(async (query) => {
        if (!query) {
          results.value = [];
          indexHighlighted.value = null;
          return;
        }

        const { hits } = await index.search(query, {
          hitsPerPage: 10,
        });
        results.value = hits;
      }, 300)
    );

    useEventListener(document, 'keydown', (e) => {
      if (e.metaKey && e.key === 'k') {
        searchInput.value?.focus();
      }
    });

    return {
      open,
      query,
      results,
      indexHighlighted,
      searchInput,
    };
  },

  methods: {
    handleKeydown(e) {
      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          if (this.indexHighlighted === this.results.length - 1) return;
          this.indexHighlighted =
            this.indexHighlighted !== null ? this.indexHighlighted + 1 : 0;
          this.scrollToHighlightedElement();
          break;
        }

        case 'ArrowUp': {
          e.preventDefault();
          if (this.indexHighlighted === 0) return;
          const index =
            this.indexHighlighted !== null
              ? this.indexHighlighted
              : this.results.length;
          this.indexHighlighted = index - 1;
          this.scrollToHighlightedElement();
          break;
        }

        case 'Enter': {
          e.preventDefault();
          const { slug } = this.results[this.indexHighlighted];
          if (slug) {
            this.$router.push({ name: 'recipe', params: { slug } });
          }
          this.reset();
          break;
        }

        case 'Escape': {
          e.preventDefault();
          this.reset();
          break;
        }

        default:
          this.indexHighlighted = null;
          break;
      }
    },

    scrollToHighlightedElement() {
      const el = document.querySelector(
        `#search-result-${this.indexHighlighted}`
      );
      if (el) {
        scrollIntoView(el, { scrollMode: 'if-needed', behavior: 'smooth' });
      }
    },

    reset() {
      this.query = '';
      this.results = [];
      this.indexHighlighted = null;
      this.open = false;
      document.activeElement.blur();
    },
  },
};
</script>

<style>
.search-results {
  max-height: 60vh;
}
</style>
