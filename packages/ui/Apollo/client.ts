import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import fetch from "isomorphic-unfetch";

const createHttpLink = (headers: any, uri: string): HttpLink => {
  return new HttpLink({
    uri,
    credentials: "include",
    headers, // auth token is fetched on the server side
    fetch,
  });
};

interface ApolloClientProps {
  headers: any;
  uri: string;
}

const createApolloClient = ({
  headers,
  uri,
}: ApolloClientProps): ApolloClient<NormalizedCacheObject> => {
  const link = createHttpLink(headers, uri);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
