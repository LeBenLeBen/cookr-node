<template>
  <div class="relative">
    <select
      :value="modelValue"
      class="
        appearance-none
        block
        w-full
        overflow-ellipsis
        border border-alt-300
        bg-white
        shadow-inner
        ring-offset-2 ring-offset-alt-100
      "
      :class="{
        'py-3 pl-5 pr-10 rounded-lg': !variant,
        'py-2 pl-2 pr-6 text-sm rounded': variant?.includes('small'),
      }"
      v-bind="attrs"
      @input="(e) => $emit('update:model-value', (e.target as HTMLSelectElement).value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <CIcon
      id="chevron-down"
      class="absolute top-1/2 -mt-3 text-alt-500"
      :class="{
        'right-3': !variant,
        'right-2': variant?.includes('small'),
      }"
    />
  </div>
</template>

<script lang="ts">
export type SelectOption = {
  value: string | number;
  label: string;
};
</script>

<script lang="ts" setup>
import { inject, mergeProps, useAttrs } from 'vue';

import { FormGroupSymbol } from 'chusho';

const props = defineProps<{
  variant?: string;
  modelValue?: string | number;
  options?: SelectOption[];
  required?: boolean;
}>();

defineEmits(['update:model-value']);

const formGroup = inject(FormGroupSymbol);

const attrs = mergeProps(useAttrs(), {
  id: formGroup?.ids.field,
  required: props.required ?? formGroup?.required.value,
});
</script>
