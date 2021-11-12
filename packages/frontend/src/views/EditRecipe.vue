<template>
  <div>
    <PageHeader :title="$t('recipe.edit.title')" />

    <RecipeForm
      v-if="input"
      v-model:title.trim="input.title"
      v-model:ingredients="input.ingredients"
      v-model:steps.trim="input.steps"
      v-model:time.number="input.time"
      v-model:quantity.number="input.quantity"
      v-model:notes.trim="input.notes"
      v-model:tags="input.tags"
      v-model:image="input.image"
      @submit="prepareToSave"
    />
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, watch } from 'vue';
import { useMutation, useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import cloneDeep from 'lodash/cloneDeep';

import router from '@/router';
import i18n from '@/i18n';
import { recipeFragment } from '@/services/fragments';
import { useResult } from '@/composables/useResult';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const setPageTitle = inject('setPageTitle');

onMounted(() => {
  setPageTitle(i18n.global.t('recipe.edit.title'));
});

const { executeMutation } = useMutation(
  gql`
    mutation updateRecipe($id: ID!, $data: editRecipeInput) {
      updateRecipe(input: { where: { id: $id }, data: $data }) {
        recipe {
          ...RecipeFragment
        }
      }
    }
    ${recipeFragment}
  `
);

const result = await useQuery({
  query: gql`
    query getRecipeToEdit($id: ID!) {
      recipe(id: $id) {
        ...RecipeFragment
      }
    }
    ${recipeFragment}
  `,
  variables: { id: props.id },
  context: {
    requestPolicy: 'network-only',
  },
});

const recipe = useResult(result.data, null, (data) => data.recipe);

const input = reactive({
  title: recipe.value.title,
  slug: recipe.value.slug,
  ingredients: recipe.value.ingredients?.length
    ? recipe.value.ingredients.map(({ amount, title }) => ({
        amount,
        title,
      }))
    : [{ title: null, amount: null }],
  steps: recipe.value.steps,
  time: recipe.value.time,
  quantity: recipe.value.quantity,
  notes: recipe.value.notes,
  tags: recipe.value.tags.map((t) => t.id),
  image: recipe.value.image?.id,
});

function save(params) {
  executeMutation(params).then((result) => {
    router.push({
      name: 'recipe',
      params: {
        id: result.data.updateRecipe.recipe.id,
        slug: result.data.updateRecipe.recipe.slug,
      },
    });
  });
}

watch(
  () => input.title,
  (val) => {
    input.slug = kebabCase(deburr(val));
  }
);

function prepareToSave() {
  let data = cloneDeep(input);
  data.ingredients = data.ingredients.filter((i) => i.title?.trim());

  save({ id: props.id, data });
}
</script>
