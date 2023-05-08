import express from 'express';
import { produceKafkaMessage } from './graph/services/kafka/kafkaClient.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

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

const resolvers: any = {
  Mutation: {
    createUser: (root: any, params: any) => {
      console.log(root, params);
      return new Promise((resolve: any, reject: any) => {
        //TODO: init request based on proto file. exp: SendMessageRequest
        // add topic into SendMessageRequest
        const request = {}
        produceKafkaMessage('0.0.0.0:9092', request);
      });
    },
  },
  Query: {
    books: () => books,
  },
};

interface MyContext {
  token?: String;
}

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer<MyContext>({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
}

startApolloServer().catch((err) => {
  console.error('Failed to start Apollo Server:', err);
});
