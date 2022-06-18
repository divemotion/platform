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
  await client.query("SET FOREIGN_KEY_CHECKS = 0;");
  await client.query("TRUNCATE booking;");
  await client.query("TRUNCATE users;");
  await client.query("SET FOREIGN_KEY_CHECKS = 1;");
};

export default clearAllTables;
