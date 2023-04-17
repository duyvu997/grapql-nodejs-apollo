import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './graph/resolvers/index';

const typeDefs = `#graphql
type Query {
  books: [Book]
}

type Book {
  title: String
  author: String
}

type User {
  username: String
  email: String
  password: String
}

type CreateUserMutationResponse {
  uid: String
  username: String
  createdAt: String
}

type Mutation {
  createUser(email: String, username: String, password: String): CreateUserMutationResponse
}
`;

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer().catch((err) => {
  console.error('Failed to start Apollo Server:', err);
});
