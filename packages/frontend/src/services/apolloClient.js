import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql',
});

const cache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache,
});
