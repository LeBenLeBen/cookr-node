<template>
  <div>
    <ul aria-labelledby="ingredients" class="space-y-4">
      <li
        v-for="(ingredient, i) in modelValue"
        :key="i"
        class="grid grid-cols-3 gap-4"
      >
        <Field
          v-slot="{ field }"
          :model-value="ingredient.amount"
          :name="`ingredients[${i}].amount`"
          @update:modelValue="(val) => updateField(i, 'amount', val)"
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
          @update:modelValue="(val) => updateField(i, 'title', val)"
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
      {{ $t('recipe.new.addIngredient') }}
    </CBtn>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },

  emits: ['update:modelValue'],

  methods: {
    updateField(index, field, value) {
      const ingredients = [...this.modelValue];
      ingredients[index] = { ...ingredients[index], [field]: value };
      this.$emit('update:modelValue', ingredients);
    },

    addItem() {
      this.$emit('update:modelValue', [
        ...this.modelValue,
        { title: null, amount: null },
      ]);

      this.$nextTick(function () {
        Array.from(
          this.$el.querySelectorAll('[data-field="ingredient-amount"]')
        )
          .pop()
          ?.focus();
      });
    },
  },
};
</script>
