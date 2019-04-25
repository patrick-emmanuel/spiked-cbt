const { gql } = require('apollo-server-express');
import userSchema from './user';
import roleSchema from './role';
import testSchema from './test';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [
  linkSchema,
  userSchema,
  roleSchema,
  testSchema
];
