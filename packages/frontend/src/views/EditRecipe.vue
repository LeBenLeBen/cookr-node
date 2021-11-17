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
  GQLMutation,
  GQLQuery,
  GQLRecipeInput,
  MutationToUpdateRecipeArgs,
} from '@/types/graphqlTypes';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

usePageTitle(i18n.global.t('recipe.edit.title'));

const { executeMutation: updateRecipe } = useMutation<
  Pick<GQLMutation, 'updateRecipe'>,
  MutationToUpdateRecipeArgs
>(
  gql`
    mutation updateRecipe($input: updateRecipeInput!) {
      updateRecipe(input: $input) {
        recipe {
          ...RecipeFragment
        }
      }
    }
    ${recipeFragment}
  `
);

const result = await useQuery<Pick<GQLQuery, 'recipe'>>({
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

const input = reactive<GQLRecipeInput>({
  title: recipe.value?.title || '',
  slug: recipe.value?.slug || '',
  ingredients: recipe.value?.ingredients?.length
    ? recipe.value?.ingredients.map(({ amount, title }) => ({
        amount,
        title,
      }))
    : [{ title: undefined, amount: undefined }],
  steps: recipe.value?.steps,
  time: recipe.value?.time,
  quantity: recipe.value?.quantity,
  notes: recipe.value?.notes,
  tags: recipe.value?.tags.map((t) => t.id),
  image: recipe.value?.image?.id,
});

function save(params: MutationToUpdateRecipeArgs) {
  updateRecipe(params).then((response) => {
    if (response.error) return;

    const recipe = response.data?.updateRecipe?.recipe;

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
    input.slug = kebabCase(deburr(val));
  }
);

function prepareToSave() {
  let data = cloneDeep(input);
  data.ingredients = data.ingredients?.filter((i) => i?.title?.trim()) || [];

  save({ input: { where: { id: props.id }, data } });
}
</script>
