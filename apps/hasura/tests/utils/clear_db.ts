import { Client } from "pg";

let connected = false;
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgrespassword",
  port: 5432,
});
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
