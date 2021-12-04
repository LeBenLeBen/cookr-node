<template>
  <div>
    <PageHeader :title="$t('recipe.edit.title')" />

    <RecipeForm
      v-if="input"
      v-model:title="input.title"
      v-model:ingredients="input.ingredients"
      v-model:steps="input.steps"
      v-model:time.number="input.time"
      v-model:quantity.number="input.quantity"
      v-model:notes="input.notes"
      v-model:tags="input.tags"
      v-model:image="input.image"
      @submit="prepareToSave"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useMutation, useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import cloneDeep from 'lodash/cloneDeep';

import router from '@/router';
import i18n from '@/i18n';

import { recipeFragment } from '@/services/fragments';
import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';
import {
  Mutation,
  MutationUpdateRecipeArgs,
  Query,
  QueryRecipeArgs,
  RecipeInput,
} from '@/gql/graphql';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

usePageTitle(i18n.global.t('recipe.edit.title'));

const { executeMutation: updateRecipe } = useMutation<
  Mutation,
  MutationUpdateRecipeArgs
>(
  gql`
    mutation updateRecipe($id: ID!, $data: RecipeInput!) {
      updateRecipe(id: $id, data: $data) {
        data {
          id
          attributes {
            ...RecipeFragment
          }
        }
      }
    }
    ${recipeFragment}
  `
);

const result = await useQuery<Query, QueryRecipeArgs>({
  query: gql`
    query getRecipeToEdit($id: ID!) {
      recipe(id: $id) {
        data {
          id
          attributes {
            ...RecipeFragment
          }
        }
      }
    }
    ${recipeFragment}
  `,
  variables: { id: props.id },
  context: {
    requestPolicy: 'network-only',
  },
});

const recipe = useResult(result.data, null, (data) => data.recipe.data);

const input = reactive<RecipeInput>({
  title: recipe.value?.attributes.title || '',
  slug: recipe.value?.attributes.slug || '',
  ingredients: recipe.value?.attributes.ingredients?.length
    ? recipe.value?.attributes.ingredients.map(({ amount, title }) => ({
        amount,
        title,
      }))
    : [{ title: '', amount: '' }],
  steps: recipe.value?.attributes.steps,
  time: recipe.value?.attributes.time,
  quantity: recipe.value?.attributes.quantity,
  notes: recipe.value?.attributes.notes,
  tags: recipe.value?.attributes.tags.data.map((t) => t.id),
  image: recipe.value?.attributes.image?.data?.id,
});

function save(params: MutationUpdateRecipeArgs) {
  updateRecipe(params).then((response) => {
    if (response.error) return;

    const recipe = response.data?.updateRecipe?.data;

    if (recipe) {
      router.push({
        name: 'recipe',
        params: {
          id: recipe.id,
          slug: recipe.attributes?.slug,
        },
      });
    }
  });
}

watch(
  () => input.title,
  (title) => {
    input.slug = title ? kebabCase(deburr(title)) : '';
  }
);

function prepareToSave() {
  let data = cloneDeep(input);
  data.ingredients = data.ingredients?.filter((i) => i?.title?.trim()) || [];

  save({ id: props.id, data });
}
</script>
