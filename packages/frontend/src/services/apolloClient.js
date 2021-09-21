import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { from } from '@apollo/client/link/core/from';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

import router from '@/router';
import store from '@/store';

import { notify } from '@/composables/useNotifications';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, extensions }) => {
      if (
        message === 'User Not Found' ||
        message === 'Invalid token.' ||
        message === 'Forbidden'
      ) {
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
});

const httpLink = createUploadLink({
  uri: `/api/graphql`,
});

const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const token = store.state.token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export default new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
  },
});
