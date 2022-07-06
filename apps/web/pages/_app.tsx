import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import createApolloClient from "ui/Apollo/client";

function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient({
    headers: {
      "x-hasura-admin-secret": process.env.ADMIN_SECRET,
    },
    uri: process.env.GQL_URL || "",
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default App;
