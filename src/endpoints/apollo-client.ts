import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'http://graphql-weather-api.herokuapp.com',
  cache: new InMemoryCache()
});
