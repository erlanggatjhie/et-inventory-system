import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

var app = express();

const PORT_NUMBER = 8000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER} ${server.graphqlPath}`);
});
