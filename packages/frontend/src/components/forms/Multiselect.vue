<template>
  <div class="relative">
    <RawMultiselect v-bind="$attrs" />
    <CIcon
      id="chevron-down"
      class="absolute top-1/2 right-3 -mt-3 text-alt-500 pointer-events-none"
    />
  </div>
</template>

<script lang="ts">
import RawMultiselect from '@vueform/multiselect';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Multiselect',

  components: {
    RawMultiselect,
  },

  inheritAttrs: false,
});
</script>

<style>
.multiselect {
  position: relative;
}

.multiselect.is-searchable {
  cursor: auto;
}

.multiselect-wrapper {
  @apply flex items-center w-full px-3 py-2 relative border border-alt-300 bg-white shadow-inner rounded-lg cursor-pointer;
  min-height: 50px;
}

.multiselect-tags-search-wrapper {
  display: inline-block;
  position: relative;
  flex: 1 1 auto;
  height: 100%;
}

.multiselect-tags-search-copy {
  visibility: hidden;
  white-space: pre-wrap;
  display: inline-block;
  height: 1px;
  width: 100%;
}

.multiselect-tags-search {
  @apply ring-0;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  appearance: none;
  outline: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
}

.multiselect-tags {
  @apply flex flex-wrap items-center gap-2 w-full h-full justify-start;
}

.multiselect-tag {
  @apply flex items-center pl-3 overflow-hidden text-xs sm:text-sm font-medium whitespace-nowrap bg-alt-200 rounded-full;
}

.multiselect-tag-remove {
  @apply ml-2;
  cursor: pointer;
}

.multiselect-tag-remove-icon::before {
  content: '✗';
  @apply flex items-center py-1 pr-3 text-alt-500 not-italic;
}

.multiselect-tag-remove-icon:hover::before {
  @apply text-alt-800;
}

.multiselect-dropdown {
  @apply mt-2 bg-white border border-alt-300 rounded-lg shadow-lg;

  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;

  max-height: 160px;
  overflow: scroll;

  &.is-hidden {
    display: none;
  }
}

.multiselect-option {
  @apply flex py-2 px-4 text-alt-600;
}

.multiselect-option.is-pointed {
  @apply text-alt-800 bg-alt-100;
}

.multiselect-no-options,
.multiselect-no-results {
  display: flex;
  padding: 10px 12px;
  color: #777;
}

.multiselect-clear {
  display: none;
}

.multiselect-assistive-text {
  @apply sr-only;
}
</style>
