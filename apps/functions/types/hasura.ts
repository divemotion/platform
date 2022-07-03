import { EVHN } from "./EVHN";

export interface Dictionary {
  [key: string]: string | Dictionary[] | Dictionary | undefined | boolean | any;
}

export enum HasuraEventTriggerOperations {
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  INSERT = "INSERT",
  MANUAL = "MANUAL",
}
export interface HasuraEventTriggerBody<T extends Dictionary>
  extends Dictionary {
  event: {
    session_variables?: {
      [key: string]: string;
    } | null;
    data: {
      new: T | null;
      old: T | null;
    };
    op: HasuraEventTriggerOperations;
  };
  id: string;
  trigger: {
    name: string;
  };
  table: {
    schema: string;
    name: string;
  };
}

export interface HasuraEventHeaders extends Dictionary {
  "user-agent": string;
  "content-type": string;
  authorization: string;
  [EVHN.GRAPHQL_URL]: string;
  [EVHN.HASURA_ADMIN_SECRET]: string;
}
