import { GraphQLClient } from "graphql-request";

import { getSdk } from "../graphql/__generated__";

interface Options {
  admin_secret: string;
  uri: string;
}
export const Client = (options: Options): ReturnType<typeof getSdk> => {
  const client = new GraphQLClient(options.uri, {
    headers: {
      "x-hasura-admin-secret": options.admin_secret,
    },
  });
  return getSdk(client);
};

export * from "../types/EVHN";
