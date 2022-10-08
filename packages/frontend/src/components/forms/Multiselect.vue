<template>
  <div class="relative">
    <RawMultiselect v-bind="$attrs" />
    <CIcon
      id="chevron-down"
      class="absolute top-1/2 right-3 -mt-3 text-alt-500"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RawMultiselect from '@vueform/multiselect';

export default defineComponent({
  name: 'Multiselect',

  components: {
    RawMultiselect,
  },

  inheritAttrs: false,
});
</script>

<style lang="postcss">
.multiselect {
  position: relative;
}

.multiselect.is-searchable {
  cursor: auto;
}

.multiselect-input {
  @apply flex items-center w-full px-3 relative border border-alt-300 bg-white shadow-inner rounded-lg cursor-pointer;
  min-height: 50px;
}

.is-open .multiselect-input {
  @apply ring-2 ring-primary-400 ring-offset-2 ring-offset-alt-100;
}

.is-tags .multiselect-search {
  flex-grow: 1;
}

.is-tags .multiselect-search input {
  @apply mb-2 ml-2 ring-0;
  flex-grow: 1;
  min-width: 100%;
}

.multiselect-tags {
  @apply flex flex-wrap items-center w-full h-full justify-start mt-2 pr-8;
}

.multiselect-tag {
  @apply flex items-center pl-3 mr-2 mb-2 overflow-hidden text-xs sm:text-sm font-medium whitespace-nowrap bg-alt-200 rounded-full;
}

.multiselect-tag i {
  @apply ml-2;
  cursor: pointer;
}

.multiselect-tag i::before {
  content: '✗';
  @apply flex items-center py-1 pr-3 pl-1 text-alt-500 not-italic;
}

.multiselect-tag i:hover::before {
  @apply text-alt-800;
}

.multiselect-options {
  @apply mt-2 bg-white border border-alt-300 rounded-lg shadow-lg;

  position: absolute;
  left: 0;
  right: 0;

  max-height: 160px;
  overflow: scroll;
}

.multiselect-option {
  @apply flex py-2 px-4 text-alt-600;
}

.multiselect-option.is-pointed {
  @apply text-alt-800 bg-alt-100;
}

.is-tags .multiselect-option.is-selected {
  color: #999;
  background: transparent;
}

.multiselect-no-options,
.multiselect-no-results {
  display: flex;
  padding: 10px 12px;
  color: #777;
}

.multiselect-enter-active {
  transition: all 0.15s ease;
}

.multiselect-leave-active {
  transition: all 0s;
}

.multiselect-enter,
.multiselect-leave-active {
  opacity: 0;
}

.multiselect-loading-enter-active,
.multiselect-loading-leave-active {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}

.multiselect-loading-enter,
.multiselect-loading-leave-active {
  opacity: 0;
}
</style>
