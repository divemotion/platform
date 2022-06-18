import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

let connected = false;
const client = new Client(process.env.POSTGRES_CONNECTION);
const getClient = async (): Promise<Client> => {
  if (!connected) {
    await client.connect();
    connected = true;
  }
  return client;
};

export const closeConnection = async () => {
  if (connected) {
    await client.end();
  }
};

const clearAllTables = async (): Promise<void> => {
  const client = await getClient();
  await client.query("TRUNCATE users;");
};

export default clearAllTables;
