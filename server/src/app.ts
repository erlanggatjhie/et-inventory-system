import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { SignupInput } from './types';
import User from './models/user';
import bcrypt from 'bcrypt';

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    signup(username: String!, password: String!): Boolean
    login(username: String!, password: String!): Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world'
  },
  Mutation: {
    signup: async (_obj: null, params: SignupInput) => {
      await User.create({
        userName: params.username,
        passwordHash: await bcrypt.hash(params.password, 10)
      });

      return true;
    },
    login: async (_obj: null, params: SignupInput) => {
      const user = await User.findOne({ where: { userName: params.username } });

      if (!user) {
        throw new Error('No user found');
      }

      return await bcrypt.compare(params.password, user.passwordHash);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

export default app;
