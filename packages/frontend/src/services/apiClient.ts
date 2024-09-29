import { authExchange } from '@urql/exchange-auth';
import { cacheExchange } from '@urql/exchange-graphcache';
import { simplePagination } from '@urql/exchange-graphcache/extras';
import {
  CombinedError,
  createClient,
  fetchExchange,
  mapExchange,
} from '@urql/vue';
import gql from 'graphql-tag';

import {
  MutationDelete_Recipes_ItemArgs,
  MutationDelete_Users_Favorite_Recipes_ItemArgs,
} from '@/gql/graphql';
import { Mutation, MutationAuth_RefreshArgs } from '@/gql/graphql';

import { notify } from '@/composables/useNotifications';

import i18n from '@/i18n';
import router from '@/router';
import store from '@/store';

export const GRAPHQL_URL = '/api/graphql';
export const GRAPHQL_SYSTEM_URL = '/api/graphql/system';

export default createClient({
  url: GRAPHQL_URL,

  fetchOptions: {
    // Prevent potential cookies from Directus admin to be used here
    credentials: 'omit',
  },

  exchanges: [
    cacheExchange({
      keys: {
        recipes_aggregated: () => null,
        users_favorite_recipes_aggregated: () => null,
      },

      resolvers: {
        Query: {
          recipes: simplePagination({
            offsetArgument: 'offset',
          }),
          users_favorite_recipes: simplePagination({
            offsetArgument: 'offset',
          }),
        },
      },

      updates: {
        Mutation: {
          delete_recipes_item(
            _result,
            args: MutationDelete_Recipes_ItemArgs,
            cache
          ) {
            const id = args?.id;
            if (id) {
              cache.invalidate({
                __typename: 'recipes',
                id,
              });
            }
          },

          delete_users_favorite_recipes_item(
            _result,
            args: MutationDelete_Users_Favorite_Recipes_ItemArgs,
            cache
          ) {
            const id = args?.id;
            if (id) {
              cache.invalidate({
                __typename: 'users_favorite_recipes',
                id,
              });
            }
          },
        },
      },
    }),

    mapExchange({
      onError: ({ graphQLErrors, networkError }) => {
        if (graphQLErrors?.length) {
          graphQLErrors.map(({ message, extensions }) => {
            const code = extensions?.code as string;
            const text = code ? i18n.global.t(`api.error.${code}`) : message;

            notify({
              type: 'error',
              id: code ?? text,
              message: text,
            });
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

    authExchange(async (utils) => {
      let accessToken = store.state.value.auth?.accessToken;
      let refreshToken = store.state.value.auth?.refreshToken;

      return {
        addAuthToOperation: (operation) => {
          if (!accessToken) {
            return operation;
          }

          // Don't add the auth header for the auth_refresh mutation
          if (
            operation.kind === 'mutation' &&
            operation.query.definitions.some((definition) => {
              return (
                definition.kind === 'OperationDefinition' &&
                definition.selectionSet.selections.some((node) => {
                  return (
                    node.kind === 'Field' && node.name.value === 'auth_refresh'
                  );
                })
              );
            })
          ) {
            return operation;
          }

          return utils.appendHeaders(operation, {
            Authorization: `Bearer ${accessToken}`,
          });
        },

        didAuthError: (error: CombinedError) => {
          return error.graphQLErrors.some(({ extensions }) =>
            ['INVALID_TOKEN', 'TOKEN_EXPIRED'].includes(
              extensions.code as string
            )
          );
        },

        refreshAuth: async () => {
          // Try to renew the authentication with the refresh token
          const result = await utils.mutate<Mutation, MutationAuth_RefreshArgs>(
            gql`
              mutation refresh($refresh_token: String!) {
                auth_refresh(refresh_token: $refresh_token, mode: json) {
                  access_token
                  refresh_token
                  expires
                }
              }
            `,
            {
              refresh_token: refreshToken,
            },
            {
              url: GRAPHQL_SYSTEM_URL,
            }
          );

          if (
            result.data?.auth_refresh?.access_token &&
            result.data.auth_refresh.refresh_token &&
            result.data.auth_refresh.expires
          ) {
            store.setAuth(
              result.data.auth_refresh.access_token,
              result.data.auth_refresh.refresh_token,
              result.data.auth_refresh.expires
            );

            accessToken = result.data.auth_refresh.access_token;
            refreshToken = result.data.auth_refresh.refresh_token;
          } else {
            store.resetAuth();
            router.replace({ name: 'login' });
          }
        },

        willAuthError: () => {
          const buffer = 15 * 1000; // 15 seconds
          const tokenWillExpiresSoon = store.state.value.auth?.expires
            ? Date.now() >= store.state.value.auth?.expires - buffer
            : false;

          return tokenWillExpiresSoon;
        },
      };
    }),

    fetchExchange,
  ],
});
