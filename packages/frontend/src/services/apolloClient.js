import router from '@/router';
import store from '@/store';
import {
  from,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';

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

const httpLink = createHttpLink({
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
