import { ApolloServer } from '@apollo/server';
import express from 'express';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {expressMiddleware} from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const httpServer = http.createServer(app);

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
);

app.listen(4000);
// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
