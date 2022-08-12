import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
   
    uri:  process.env.NEXT_PUBLIC_DRUPAL_URL+"graphql",
    cache: new InMemoryCache(),
});

export default client;
