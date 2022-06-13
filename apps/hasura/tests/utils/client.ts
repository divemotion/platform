import { GraphQLClient } from "graphql-request";

import { getSdk as adminSdk } from "../../graphql/admin/__generated__";
import { getSdk as operationSdk } from "../../graphql/operation/__generated__";
import { getSdk as webSdk } from "../../graphql/web/__generated__";

export const AdminClient = (): ReturnType<typeof adminSdk> => {
  const client = new GraphQLClient("http://localhost:5001/v1/graphql");
  return adminSdk(client);
};

export const WebClient = (): ReturnType<typeof webSdk> => {
  const client = new GraphQLClient("http://localhost:5001/v1/graphql");
  return webSdk(client);
};

export const OperationClient = (): ReturnType<typeof operationSdk> => {
  const client = new GraphQLClient("http://localhost:5001/v1/graphql");
  return adminSdk(client);
};
