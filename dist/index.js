var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        const server = new ApolloServer({
            typeDefs,
            resolvers,
        });
        yield server.start();
        server.applyMiddleware({ app });
        app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
    });
}
startApolloServer().catch((err) => {
    console.error('Failed to start Apollo Server:', err);
});
//# sourceMappingURL=index.js.map