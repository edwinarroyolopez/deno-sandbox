import { Application, Router, graphql } from "./deps.ts";
/* @graphql */
import types from "./services/types.ts";
import resolvers from "./services/resolver.ts";

const router = new Router();
const executeSchema = async ({ query }: any) => {
  const result = await graphql(types, query, new resolvers());
  return result;
};

const env = Deno.env.toObject();
const PORT = parseInt(env.PORT) || 3000;

router.post("/graph", async ({ request, response }) => {
  if (request.hasBody) {
    // Proceed
    const body = await request.body();
    const result = await executeSchema(body.value);
    response.body = result;
  } else {
    response.body = "Query Not Available";
  }
});

let app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`Server running on http://localhost:${PORT}/graph`);

/*
    PORT=4444 deno run --allow-net --allow-env main.ts
    http://localhost:4444/api
    http://localhost:4444/api/1234


    {
        getProperties{
            description
        }
    }
*/
