<template>
  <div>
    <PageHeader :title="$t('recipe.new.title')" />

    <RecipeForm
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
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';

import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import usePageTitle from '@/composables/usePageTitle';
import {
  GQLMutation,
  GQLRecipeInput,
  MutationToCreateRecipeArgs,
} from '@/types/graphqlTypes';

usePageTitle(i18n.global.t('recipe.new.title'));

const input = reactive<GQLRecipeInput>({
  author: store.state.currentUser!.id,
  title: '',
  slug: '',
  ingredients: [{ title: undefined, amount: undefined }],
  steps: undefined,
  time: undefined,
  quantity: undefined,
  notes: undefined,
  tags: [],
  image: undefined,
});

const { executeMutation: save } = useMutation<
  Pick<GQLMutation, 'createRecipe'>,
  MutationToCreateRecipeArgs
>(
  gql`
    mutation createRecipe($input: createRecipeInput) {
      createRecipe(input: $input) {
        recipe {
          id
          slug
        }
      }
    }
  `
);

watch(
  () => input.title,
  (val) => {
    input.slug = kebabCase(deburr(val));
  }
);

function prepareToSave() {
  let data: GQLRecipeInput = omitBy(input, isNil) as GQLRecipeInput;
  data = omitBy(
    data,
    (val) => typeof val === 'string' && val.trim() === ''
  ) as GQLRecipeInput;
  data.ingredients = data.ingredients?.filter((i) => i?.title?.trim());

  save({ input: { data } }).then((response) => {
    if (response.error) return;

    const recipe = response.data?.createRecipe?.recipe;

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
</script>
