import { createClient, dedupExchange, errorExchange } from '@urql/vue';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { cacheExchange } from '@urql/exchange-graphcache';
import { simplePagination } from './simplePagination';

import router from '@/router';
import store from '@/store';

import { notify } from '@/composables/useNotifications';
import { StrapiGraphQLException } from '@/helpers/api';

export default createClient({
  url: '/api/graphql',

  exchanges: [
    dedupExchange,

    cacheExchange({
      keys: {
        Pagination: () => null,
        Recipe: () => null,
        RecipeEntityResponse: () => null,
        RecipeEntityResponseCollection: () => null,
        ResponseCollectionMeta: () => null,
        Tag: () => null,
        TagEntityResponseCollection: () => null,
        TagRelationResponseCollection: () => null,
        UploadFile: () => null,
        UploadFileEntityResponse: () => null,
        UserFavoriteRecipe: () => null,
        UserFavoriteRecipeEntityResponseCollection: () => null,
        UsersPermissionsUser: () => null,
        UsersPermissionsUserEntityResponse: () => null,
        UsersPermissionsUserEntityResponseCollection: () => null,
        UserViewedRecipeEntityResponseCollection: () => null,
      },

      resolvers: {
        Query: {
          recipes: simplePagination(),
          usersFavoriteRecipes: simplePagination(),
        },
      },

      updates: {
        Mutation: {
          // deleteRecipe(_result, args: MutationToDeleteRecipeArgs, cache) {
          //   const id = args?.input?.where?.id;
          //   if (id) {
          //     cache.invalidate({
          //       __typename: 'Recipe',
          //       id,
          //     });
          //   }
          // },
          // deleteUsersFavoriteRecipe(
          //   _result,
          //   args: MutationToDeleteUsersFavoriteRecipeArgs,
          //   cache
          // ) {
          //   const id = args?.input?.where?.id;
          //   if (id) {
          //     cache.invalidate({
          //       __typename: 'UsersFavoriteRecipes',
          //       id,
          //     });
          //   }
          // },
        },
      },
    }),

    errorExchange({
      onError: (error) => {
        if (error.graphQLErrors?.length) {
          error.graphQLErrors.map(({ message, extensions }) => {
            if (
              message === 'User Not Found' ||
              message === 'Invalid credentials' ||
              message === 'Missing or invalid credentials'
            ) {
              store.setToken(null);
              store.setCurrentUser(null);
              router.replace({ name: 'login' });
            }

            // Bad requests should be handled in the context
            if (
              (extensions?.exception as StrapiGraphQLException)?.code !== 400
            ) {
              notify({
                type: 'error',
                id: message,
                message,
              });
            }
          });
        } else if (error.networkError) {
          notify({
            type: 'error',
            id: 'network-error',
            message: error.networkError.message,
          });
        }
      },
    }),

    multipartFetchExchange,
  ],

  fetchOptions: () => {
    const token = store.state.token;
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  },
});
