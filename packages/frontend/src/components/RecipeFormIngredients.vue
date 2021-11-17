<template>
  <div>
    <ul ref="ingredientsList" aria-labelledby="ingredients" class="space-y-4">
      <li
        v-for="(ingredient, i) in modelValue"
        :key="i"
        class="grid grid-cols-3 gap-4"
      >
        <Field
          v-slot="{ field }"
          :model-value="ingredient.amount"
          :name="`ingredients[${i}].amount`"
          @update:model-value="(val: string) => updateField(i, 'amount', val)"
        >
          <Input
            v-bind="field"
            aria-labelledby="ingredients-quantity"
            data-field="ingredient-amount"
          />
        </Field>
        <Field
          v-slot="{ field }"
          :model-value="ingredient.title"
          :name="`ingredients[${i}].title`"
          @update:model-value="(val: string) => updateField(i, 'title', val)"
        >
          <Input
            v-bind="field"
            class="col-span-2"
            aria-labelledby="ingredients-label"
          />
        </Field>
      </li>
    </ul>

    <CBtn variant="default" class="mt-4" @click="addItem">
      <CIcon id="plus" class="-my-1 -ml-1 mr-2 text-alt-600" />
      {{ $t('recipe.form.addIngredient') }}
    </CBtn>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, PropType } from 'vue';

import { GQLComponentRecipesIngredients } from '@/types/graphqlTypes';

const props = defineProps({
  modelValue: {
    type: Array as PropType<Partial<GQLComponentRecipesIngredients>[]>,
    required: true,
  },
});

const emit = defineEmits(['update:model-value']);

const ingredientsList = ref<HTMLUListElement | null>(null);

function updateField(
  index: number,
  field: keyof GQLComponentRecipesIngredients,
  value: string
) {
  const ingredients = [...props.modelValue];
  ingredients[index] = { ...ingredients[index], [field]: value };
  emit('update:model-value', ingredients);
}

function addItem() {
  const ingredients: Partial<GQLComponentRecipesIngredients>[] = [
    ...props.modelValue,
    { title: undefined, amount: undefined },
  ];

  emit('update:model-value', ingredients);

  nextTick(() => {
    const amountFields = ingredientsList.value?.querySelectorAll(
      '[data-field="ingredient-amount"]'
    ) as NodeListOf<HTMLInputElement>;

    if (amountFields) {
      Array.from(amountFields).pop()?.focus();
    }
  });
}
</script>
