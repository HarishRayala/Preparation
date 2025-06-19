const graphql = require("graphql");
const _ = require("lodash");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;

// GraphQLSchema takes in a rootquery and returns a GraphQL Schema instance.

const users = [
  { id: "23", firstName: "Bill", age: 20 },
  { id: "47", firstName: "Samantha", age: 21 },
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

// the purpose of root query is to allow graphql to jump and land on the specific node

// from resolve function we want to return a very particular user, the user with some given id

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
