import { applyGraphQL } from "./deps.ts";
import { getProperties } from "./models/propertyModel.ts";

/* @graphql */
import { types } from "./services/types.ts";
import { resolvers } from "./services/resolver.ts";

const GraphQLService = applyGraphQL({
  typeDefs: types,
  resolvers: resolvers,
});

//const api = new Router();

/* @graphql-schema */


/*
api.get("/", async (req: Request, res: Response) => {
  let properties = await getProperties();
  res.status(200).send({ properties });
});

api.get("/:id", (req: Request, res: Response) => {
  res.status(200).send({ param: req.params.id });
});

*/

//export { api };
