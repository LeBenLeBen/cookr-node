import { Ref, computed, ref } from 'vue';
import { useTitle } from '@vueuse/core';

const _pageTitle = ref<string | null | undefined>(null);

export default function usePageTitle(
  title: string | Ref<string> | null | undefined
) {
  _pageTitle.value = ref(title).value;
}

export const pageTitle = computed(() => _pageTitle.value);

const fullPageTitle = computed(() => {
  return _pageTitle?.value ? `${_pageTitle.value} · Cookr` : 'Cookr';
});

useTitle(fullPageTitle);
