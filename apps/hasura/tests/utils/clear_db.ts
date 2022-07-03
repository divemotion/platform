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
  // await client.query("TRUNCATE booking CASCADE;");
  await client.query(`
    DO $$ DECLARE
      r RECORD;
    BEGIN
      FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = current_schema()) LOOP
        EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || ' CASCADE';
      END LOOP;
    END $$;
  `);
};

export default clearAllTables;
