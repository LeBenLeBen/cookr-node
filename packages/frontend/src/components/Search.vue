<template>
  <div
    v-if="isOpen && query"
    class="fixed inset-0 z-30 bg-alt-800 bg-opacity-95"
  ></div>
  <div v-clickOutside="close" class="relative z-40 w-full" role="search">
    <label for="search" class="sr-only">{{ $t('search.label') }}</label>
    <div
      class="relative max-w-xs text-alt-400"
      role="combobox"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-owns="search-results"
      aria-haspopup="listbox"
    >
      <div
        class="absolute inset-y-0 left-0 pl-2 md:pl-3 flex items-center pointer-events-none"
      >
        <CIcon id="search" :scale="1.25" class="md:w-8 md:h-8" />
      </div>
      <input
        id="search"
        ref="searchInput"
        v-model.trim="query"
        name="search"
        class="appearance-none block w-full pl-10 md:pl-12 pr-4 py-2 placeholder-alt-400 focus:text-alt-800 md:text-lg rounded-full bg-transparent focus:bg-white border-2 border-alt-200 focus:border-transparent"
        :placeholder="$t('search.label')"
        autocomplete="off"
        type="search"
        :aria-activedescendant="
          Number.isInteger(indexHighlighted)
            ? `search-result-${indexHighlighted}`
            : ''
        "
        @focus="open"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />
      <div
        v-show="!isOpen"
        class="hidden lg:block py-1 px-2 absolute right-5 top-1/2 leading-tight transform -translate-y-1/2 rounded border border-alt-200 pointer-events-none"
      >
        ⌘ K
      </div>
    </div>

    <div
      id="search-results"
      class="search-results absolute top-full mt-3 w-full overflow-x-hidden overflow-y-auto bg-white rounded-lg shadow-xl"
      :class="{ hidden: !isOpen || !query }"
    >
      <header
        class="flex items-center justify-between py-3 px-5 sticky top-0 bg-white border-b-2 border-alt-200"
      >
        <div
          id="search-results-title"
          class="text-xs sm:text-sm uppercase text-alt-600 font-bold"
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
      </header>

      <ul
        v-if="results.length"
        aria-labelledby="#search-results-title"
        role="listbox"
        class="divide-y divide-alt-200"
        @click="reset"
      >
        <li
          v-for="(result, index) in results"
          :id="`search-result-${index}`"
          :key="result.id"
        >
          <router-link
            :to="{ name: 'recipe', params: { slug: result.slug } }"
            class="flex items-center py-3 pr-4 pl-5 text-alt-800 hover:text-alt-800 hover:bg-alt-100"
            :class="{ 'bg-alt-100': index == indexHighlighted }"
          >
            <div class="flex-grow">
              <div class="mb-1 text-lg leading-tight font-bold">
                {{ result.title }}
              </div>
              <RecipeAuthor
                :username="result.author"
                class="text-sm text-alt-600"
              />
            </div>
            <div>
              <TagsList :tags="result.tags" class="justify-items-end" />
            </div>
          </router-link>
        </li>
      </ul>
      <div v-else-if="isLoading" class="py-4 px-5 text-alt-500">
        {{ $t('common.loading') }}
      </div>
      <div v-else class="py-4 px-5 text-alt-500">
        {{ $t('search.empty') }}
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { ref, watch } from 'vue';
import { clickOutside } from 'chusho';
import scrollIntoView from 'scroll-into-view-if-needed';
import { debouncedWatch, useEventListener } from '@vueuse/core';

export default {
  directives: { clickOutside },

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['update:isOpen'],

  setup() {
    const client = algoliasearch(
      import.meta.env.VITE_ALGOLIA_APP_ID,
      import.meta.env.VITE_ALGOLIA_SEARCH_ONLY_API_KEY
    );
    const index = client.initIndex(import.meta.env.VITE_ALGOLIA_INDEX);
    const searchInput = ref(null);
    const isLoading = ref(false);
    const query = ref(null);
    const results = ref([]);
    const indexHighlighted = ref(null);

    watch(
      () => query.value,
      () => {
        isLoading.value = true;
      }
    );

    debouncedWatch(
      () => query.value,
      async (query) => {
        if (!query) {
          results.value = [];
          indexHighlighted.value = null;
          isLoading.value = false;
          return;
        }

        const { hits } = await index.search(query, {
          hitsPerPage: 10,
        });
        results.value = hits;
        isLoading.value = false;
      },
      { debounce: 300 }
    );

    useEventListener(document, 'keydown', (e) => {
      if (e.metaKey && e.key === 'k') {
        searchInput.value?.focus();
        e.preventDefault();
      }
    });

    return {
      isLoading,
      query,
      results,
      indexHighlighted,
      searchInput,
    };
  },

  methods: {
    open() {
      this.$emit('update:isOpen', true);
    },

    close() {
      this.$emit('update:isOpen', false);
    },

    handleBlur() {
      if (!this.query) {
        this.close();
      }
    },

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
          const slug = this.results?.[this.indexHighlighted]?.slug;
          if (slug) {
            this.$router.push({ name: 'recipe', params: { slug } });
            this.reset();
          }
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
      this.close();
      document.activeElement.blur();
    },
  },
};
</script>

<style>
.search-results {
  max-height: 250px;

  @screen md {
    max-height: 440px;
  }
}
</style>
