<template>
  <h1 class="h1 mb-6 md:mb-8">{{ $t('recipe.edit.title') }}</h1>

  <RecipeForm
    v-if="input"
    v-model:title="input.title"
    v-model:slug="input.slug"
    v-model:ingredients="input.ingredients"
    v-model:steps="input.steps"
    v-model:time.number="input.time"
    v-model:quantity.number="input.quantity"
    v-model:notes="input.notes"
    v-model:tags="input.tags"
    v-model:image="input.image"
    @submit="prepareToSave"
  />
</template>

<script>
import { reactive } from 'vue';
import { useMutation, useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';

import router from '@/router';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { result } = useQuery(
      gql`
        query getRecipeToEdit($id: ID!) {
          recipe(id: $id) {
            id
            title
            slug
            time
            quantity
            steps
            notes
            ingredients {
              amount
              title
            }
            tags {
              id
            }
            image {
              id
            }
          }
        }
      `,
      () => ({ id: props.id }),
      {
        fetchPolicy: 'network-only',
      }
    );

    const input = useResult(result, null, ({ recipe }) => {
      return reactive({
        title: recipe.title,
        slug: recipe.slug,
        ingredients: recipe.ingredients.map(({ amount, title }) => ({
          amount,
          title,
        })),
        steps: recipe.steps,
        time: recipe.time,
        quantity: recipe.quantity,
        notes: recipe.notes,
        tags: recipe.tags.map((t) => t.id),
        image: recipe.image?.id,
      });
    });

    const { mutate: save, onDone } = useMutation(
      gql`
        mutation updateRecipe($id: ID!, $data: editRecipeInput) {
          updateRecipe(input: { where: { id: $id }, data: $data }) {
            recipe {
              id
              slug
            }
          }
        }
      `
    );

    onDone((result) => {
      router.push({
        name: 'recipe',
        params: {
          id: result.data.updateRecipe.recipe.id,
          slug: result.data.updateRecipe.recipe.slug,
        },
      });
    });

    return {
      input,
      save,
    };
  },

  watch: {
    'input.title'(val) {
      this.input.slug = kebabCase(deburr(val));
    },
  },

  methods: {
    prepareToSave() {
      let data = omitBy(this.input, isNil);
      data = omitBy(data, (i) => typeof i === 'string' && i.trim() === '');
      data.ingredients = data.ingredients.filter((i) => i.title?.trim());

      this.save({ id: this.id, data: data });
    },
  },
};
</script>
