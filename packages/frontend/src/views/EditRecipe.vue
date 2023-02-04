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
import { useMutation, useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import cloneDeep from 'lodash/cloneDeep';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import { reactive, watch } from 'vue';

import { recipeFragment } from '@/services/fragments';
import { RecipeIngredient } from '@/services/types';

import { Mutation, Query, Update_Recipes_Input } from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';
import useResult from '@/composables/useResult';

import { RecipeFormInput } from '../components/RecipeForm.vue';

import i18n from '@/i18n';
import router from '@/router';

const props = defineProps<{
  id: string;
}>();

usePageTitle(i18n.global.t('recipe.edit.title'));

const { executeMutation: updateRecipe } = useMutation<Mutation>(
  gql`
    mutation updateRecipe($id: ID!, $data: update_recipes_input!) {
      update_recipes_item(id: $id, data: $data) {
        ...RecipeFragment
      }
    }
    ${recipeFragment}
  `
);

const result = await useQuery<Query>({
  query: gql`
    query getRecipeToEdit($id: ID!) {
      recipes_by_id(id: $id) {
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

const recipe = useResult(result.data, null, (data) => data.recipes_by_id);

const input = reactive<RecipeFormInput>({
  title: recipe.value?.title || '',
  slug: recipe.value?.slug || '',
  ingredients: recipe.value?.ingredients?.length
    ? recipe.value?.ingredients.map(({ amount, title }: RecipeIngredient) => ({
        amount,
        title,
      }))
    : [{ title: undefined, amount: undefined }],
  steps: recipe.value?.steps,
  time: recipe.value?.time,
  quantity: recipe.value?.quantity,
  notes: recipe.value?.notes,
  tags:
    recipe.value?.tags.map((tag) => {
      return {
        id: tag.id,
        tags_id: {
          id: tag.tags_id.id,
        },
      };
    }) ?? [],
  image: recipe.value?.image?.id ? { id: recipe.value?.image?.id } : undefined,
});

function save(params: { id: string; data: Update_Recipes_Input }) {
  updateRecipe(params).then((response) => {
    if (response.error) return;

    const recipe = response.data?.update_recipes_item;

    if (recipe) {
      router.push({
        name: 'recipe',
        params: {
          id: recipe.id,
          slug: recipe.slug,
        },
      });
    }
  });
}

watch(
  () => input.title,
  (val) => {
    input.slug = val ? kebabCase(deburr(val)) : undefined;
  }
);

function prepareToSave() {
  let data = cloneDeep(input);
  data.ingredients =
    data.ingredients?.filter((i: RecipeIngredient) => i?.title?.trim()) || [];

  save({ id: props.id, data });
}
</script>
