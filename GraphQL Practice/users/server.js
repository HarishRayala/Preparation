const express = require("express");
const { createHandler } = require("graphql-http/lib/use/http");
const schema = require("./schema/schema");

// You need to define a GraphQL schema

const app = express();

// Create the GraphQL handler
app.use(
  "/graphql",
  createHandler({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("GraphQL server running on http://localhost:4000/graphql");
});
