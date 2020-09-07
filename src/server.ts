
import { ApolloServer, gql } from 'apollo-server'
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda'

const typeDefs = gql`
  type Query {
    me: String
    gender: String
    relation_status: String
    website: String

  }
`;

const resolvers = {
  Query: {
    me: () => "Hi! Love from Flora🤠.",
    gender: () => "Under investigation",
    relation_status: () => "In 30days trial period",
    website: () => "florajp.me"
  }
};

function createLambdaServer () {
  return new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

function createLocalServer () {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

export { createLambdaServer, createLocalServer }