import router from '@/router';
import store from '@/store';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { from } from '@apollo/client/link/core/from';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      if (message === 'Invalid token.' || message === 'Forbidden') {
        store.setCurrentUser(null);
        router.replace({ name: 'login' });
      }
    });
  }
});

const httpLink = createUploadLink({
  uri: `${import.meta.env.VITE_API_ORIGIN}/graphql`,
  credentials: 'include',
});

const cache = new InMemoryCache();

export default new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
  },
});
