import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../endpoints/apollo-client';

const AppProvider: React.FC = (props) => {
  const { children } = props;
  return (
    <ApolloProvider client={apolloClient}>
      { children }
    </ApolloProvider>
  )
}

export default AppProvider;