import { Pool } from "../deps.ts";

const CONNECTION_PARAMS = {
  user: "postgres",
  password: "abcd.1234",
  hostname: "localhost",
  port: 5432,
  database: "postgres",
  applicationName: "mydenoapptest",
};

const POOL = new Pool(CONNECTION_PARAMS, 10, true);

export const queryHandler = async (...args: any): Promise<any> => {
  let client: any;
  try {
    client = await POOL.connect();
    return await client.query(...args);
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release(true);
    }
  }
};
