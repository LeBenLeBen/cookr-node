import { authExchange } from '@urql/exchange-auth';
import { cacheExchange } from '@urql/exchange-graphcache';
import { simplePagination } from '@urql/exchange-graphcache/extras';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { createClient, dedupExchange, mapExchange } from '@urql/vue';
import gql from 'graphql-tag';
import { watch } from 'vue';

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

let authStateListening = false;

type AuthState = {
  accessToken?: string;
  refreshToken?: string;
  expires?: number;
};

export default createClient({
  url: GRAPHQL_URL,

  exchanges: [
    dedupExchange,

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

    authExchange<AuthState>({
      addAuthToOperation: ({ authState, operation }) => {
        if (!authState?.accessToken) {
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

        const fetchOptions =
          typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {};

        return {
          ...operation,
          context: {
            ...operation.context,
            fetchOptions: {
              ...fetchOptions,
              headers: {
                ...fetchOptions.headers,
                Authorization: `Bearer ${authState.accessToken}`,
              },
            },
          },
        };
      },

      didAuthError: ({ error }) => {
        const responseContainsAuthError = error.graphQLErrors.some(
          ({ extensions }) =>
            ['INVALID_TOKEN', 'TOKEN_EXPIRED'].includes(
              extensions.code as string
            )
        );

        return responseContainsAuthError;
      },

      getAuth: async ({ authState, mutate }) => {
        if (!authState) {
          const authState: AuthState = {};

          if (!authStateListening) {
            authStateListening = true;

            // Ensure the store state is reflected immediately in the authState
            // for the upcoming requests, since getAuth is not called after the login
            watch(
              () => store.state.value.auth,
              () => {
                authState.accessToken = store.state.value.auth?.accessToken;
                authState.refreshToken = store.state.value.auth?.refreshToken;
                authState.expires = store.state.value.auth?.expires;
              }
            );
          }

          authState.accessToken = store.state.value.auth?.accessToken;
          authState.refreshToken = store.state.value.auth?.refreshToken;
          authState.expires = store.state.value.auth?.expires;

          return Promise.resolve(authState);
        }

        // Try to renew the authentication with the refresh token
        const result = await mutate<Mutation, MutationAuth_RefreshArgs>(
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
            refresh_token: authState.refreshToken,
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

          return {
            accessToken: result.data.auth_refresh.access_token,
            refreshToken: result.data.auth_refresh.refresh_token,
            expires: result.data.auth_refresh.expires,
          };
        }

        store.resetAuth();
        router.replace({ name: 'login' });

        return null;
      },

      willAuthError: () => {
        const buffer = 15 * 1000; // 15 seconds
        const tokenWillExpiresSoon = store.state.value.auth?.expires
          ? Date.now() >= store.state.value.auth?.expires - buffer
          : false;

        if (tokenWillExpiresSoon) {
          return true;
        }

        return false;
      },
    }),

    multipartFetchExchange,
  ],
});
