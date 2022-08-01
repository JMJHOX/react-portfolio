import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = "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";
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization:  `Bearer ${token}` ,
      }
    }
  });
export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });