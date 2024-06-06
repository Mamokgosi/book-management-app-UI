
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql', 
  cache: new InMemoryCache()
});

export { ApolloProvider, client };
