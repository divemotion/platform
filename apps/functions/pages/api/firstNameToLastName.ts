import { NextApiRequest, NextApiResponse } from "next";

import { User } from "../../graphql/__generated__";
import { Client } from "../../lib/client";
import { HasuraEventHeaders, HasuraEventTriggerBody } from "../../types/hasura";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const headers = request.headers as HasuraEventHeaders;
    const client = Client({
      admin_secret: headers.hasura_admin_secret,
      uri: headers.graphql_url,
    });

    const eventBody: HasuraEventTriggerBody<User> = request.body;

    await client.FirstNameToLastName({
      userId: eventBody.event.data.old?.id,
      input: {
        last_name: eventBody.event.data.new?.first_name,
      },
    });

    response.status(200).json({
      body: request.body,
      query: request.query,
      header: request.headers,
      cookies: request.cookies,
      env: process.env.HASURA_ACTION_BASE_URL,
    });
  } catch (error) {
    response.status(500);
  }
};

export default handler;
