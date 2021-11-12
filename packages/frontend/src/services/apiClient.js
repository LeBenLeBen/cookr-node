import { createClient, dedupExchange, errorExchange } from '@urql/vue';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { cacheExchange } from '@urql/exchange-graphcache';
import { simplePagination } from '@urql/exchange-graphcache/extras';

import router from '@/router';
import store from '@/store';

import { notify } from '@/composables/useNotifications';

export default createClient({
  url: '/api/graphql',

  exchanges: [
    dedupExchange,
    cacheExchange({
      keys: {
        RecipeAggregator: () => null,
        UsersFavoriteRecipesAggregator: () => null,
      },
      resolvers: {
        Query: {
          recipes: simplePagination({
            offsetArgument: 'start',
          }),
          usersFavoriteRecipes: simplePagination({
            offsetArgument: 'start',
          }),
        },
      },
      updates: {
        Mutation: {
          deleteRecipe(_result, args, cache) {
            cache.invalidate({
              __typename: 'Recipe',
              id: args.input.where.id,
            });
          },
          deleteUsersFavoriteRecipe(_result, args, cache) {
            cache.invalidate({
              __typename: 'UsersFavoriteRecipes',
              id: args.input.where.id,
            });
          },
        },
      },
    }),
    errorExchange({
      onError: ({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, extensions }) => {
            if (message === 'User Not Found' || message === 'Invalid token.') {
              store.setToken(null);
              store.setCurrentUser(null);
              router.replace({ name: 'login' });
            }

            // Bad requests should be handled in the context
            if (extensions?.exception?.code !== 400) {
              notify({
                type: 'error',
                id: message,
                message,
              });
            }
          });
        } else if (networkError) {
          notify({
            type: 'error',
            id: 'network-error',
            message: networkError.message,
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
