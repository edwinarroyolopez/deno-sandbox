import { queryHandler } from "../data/db.ts";

export const getProperties = async (): Promise<any[] | undefined> => {
  let properties = [];
  try {
    const QUERY_GET_PROPERTIES = "SELECT * FROM  fincaraiz.property LIMIT 10";

    const  { rows }  = await queryHandler(QUERY_GET_PROPERTIES);
    console.log(rows);
    properties = rows;
  } catch (error) {
    console.error(error);
  }
  return properties;
};
