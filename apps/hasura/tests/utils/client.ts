import dotenv from "dotenv";
import { GraphQLClient } from "graphql-request";

import { getSdk as adminSdk } from "../../graphql/admin/__generated__";
import { getSdk as operationSdk } from "../../graphql/operation/__generated__";
import { getSdk as webSdk } from "../../graphql/web/__generated__";

dotenv.config();

const GQL_URL = process.env.GRAPHQL_SCHEMA_URL as string;
const ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET as string;

const mapUserIdToHeader = (userId: string) => ({
  "x-hasura-user-id": userId,
});

interface Options {
  userId: string;
}
export const AdminClient = (options: Options): ReturnType<typeof adminSdk> => {
  const client = new GraphQLClient(GQL_URL, {
    headers: {
      "x-hasura-admin-secret": ADMIN_SECRET,
      "x-hasura-role": "admin_user",
      ...mapUserIdToHeader(options.userId),
    },
  });
  return adminSdk(client);
};

export const WebClient = (options: Options): ReturnType<typeof webSdk> => {
  const client = new GraphQLClient(GQL_URL, {
    headers: {
      "x-hasura-admin-secret": ADMIN_SECRET,
      "x-hasura-role": "user",
      ...mapUserIdToHeader(options.userId),
    },
  });
  return webSdk(client);
};

export const OperationClient = (): ReturnType<typeof operationSdk> => {
  const client = new GraphQLClient(GQL_URL, {
    headers: {
      "x-hasura-admin-secret": ADMIN_SECRET,
    },
  });
  return adminSdk(client);
};
