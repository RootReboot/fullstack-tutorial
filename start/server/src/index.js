const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { createStore } = require("./utils");

const LaunchAPI = require("./schema");
const UserAPI = require("./datasources/user");

const store = createStore();

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
