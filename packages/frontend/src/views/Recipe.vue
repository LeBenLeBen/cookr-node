<template>
  <template v-if="recipe">
    <header class="mb-8">
      <h1 class="mb-3">{{ recipe.title }}</h1>
      <ul class="flex items-center text-alt-600">
        <li class="mr-6">
          <RecipeAuthor :username="recipe.author.username" />
        </li>
        <li v-if="recipe.time" class="inline-flex items-center mr-6">
          <RecipeTime :time="recipe.time" />
        </li>
        <li v-if="recipe.quantity" class="inline-flex items-center mr-6">
          <RecipeQuantity :quantity="recipe.quantity" />
        </li>
      </ul>
    </header>

    <div v-if="recipe.image" class="-ml-8">
      <RecipeImage
        :image="recipe.image"
        width="792"
        height="528"
        class="rounded-xl mb-10"
      />
    </div>

    <div class="grid grid-cols-3 gap-10 items-start">
      <div class="col-start-1 col-span-2 space-y-10">
        <div
          v-if="steps.length"
          class="bg-white rounded-lg shadow-lg"
          :class="{ '-mt-20': recipe.image }"
        >
          <ol class="divide-y divide-alt-100">
            <li v-for="(step, i) in steps" :key="i" class="p-6">
              <div class="flex">
                <div class="w-8 mr-6 text-5xl text-primary-300 text-center">
                  {{ i + 1 }}
                </div>
                <div class="w-full">{{ step }}</div>
              </div>
            </li>
          </ol>
        </div>

        <div v-if="recipe.notes">
          <h2 class="mb-3 text-alt-600 font-bold text-sm uppercase">
            {{ $t('recipe.notes') }}
          </h2>
          <div class="text-sm">
            {{ recipe.notes }}
          </div>
        </div>
      </div>

      <aside class="col-start-3 col-span-1 space-y-10">
        <div v-if="recipe.ingredients.length">
          <h2 class="mb-3 text-alt-600 font-bold text-sm uppercase">
            {{ $t('recipe.ingredients') }}
          </h2>
          <table>
            <tbody class="divide-y divide-alt-200">
              <tr
                v-for="(ingredient, i) in recipe.ingredients"
                :key="i"
                class="align-top"
              >
                <td class="pr-3 py-2 font-bold text-right">
                  {{ ingredient.amount }}
                </td>
                <td class="py-2">
                  {{ ingredient.title }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="recipe.tags.length">
          <h2 class="mb-3 text-alt-600 font-bold text-sm uppercase">
            {{ $t('recipe.tags') }}
          </h2>
          <TagsList :tags="recipe.tags.map((t) => t.title)" />
        </div>
      </aside>
    </div>
  </template>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { result } = useQuery(
      gql`
        query getRecipeBySlug($slug: String!) {
          recipes(where: { slug: $slug }) {
            title
            author {
              username
            }
            time
            quantity
            steps
            notes
            ingredients {
              amount
              title
            }
            tags {
              title
            }
            image {
              hash
              ext
            }
          }
        }
      `,
      () => ({ slug: props.slug })
    );

    return {
      result,
    };
  },

  computed: {
    recipe() {
      return this.result?.recipes?.[0];
    },

    steps() {
      return this.recipe?.steps.length
        ? this.recipe?.steps.split(/\r?\n/).filter((s) => !!s.trim())
        : [];
    },
  },
};
</script>
