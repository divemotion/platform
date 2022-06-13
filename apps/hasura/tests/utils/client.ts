import { GraphQLClient } from "graphql-request";

import { getSdk } from "../../graphql/__generated__";

const Client = (): ReturnType<typeof getSdk> => {
  const client = new GraphQLClient("http://localhost:5001/v1/graphql");
  return getSdk(client);
};

export default Client;
