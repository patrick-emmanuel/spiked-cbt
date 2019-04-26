const { gql } = require("apollo-server-express");

export default gql`
  extend type Mutation {
    createTest(data: TestCreateInput!): Test!
  }

  extend type Query {
    test(where: TestWhereUniqueInput!): Test!
    # tests(where: TestWhereInput,
    #     orderBy: String,
    #     skip: Int,
    #     after: String,
    #     before: String,
    #     first: Int,
    #     last: Int
    # ): FragmentableTestArray;
  }

  type Test {
    id: ID!
    name: String
    questions: [TestQuestion]
  }

  type TestQuestion {
    id: ID!
    multipleChoice: Boolean
    options: [TestQuestionOption]
  }

  type TestQuestionOption {
    id: ID
    value: String
    correctOption: Boolean
  }

  input TestQuestionOptionCreateInput {
    value: String!
    correctOption: Boolean!
  }

  input TestQuestionOptionCreateManyInput {
    create: [TestQuestionOptionCreateInput]!
  }

  input TestQuestionCreateInput {
    multipleChoice: Boolean
    options: TestQuestionOptionCreateManyInput!
  }

  input TestQuestionCreateManyInput {
    create: [TestQuestionCreateInput!]!
  }

  input TestCreateInput {
    name: String!
    questions: TestQuestionCreateManyInput
  }

  input TestWhereInput {
    id: ID!
  }

  input TestWhereUniqueInput {
    id: ID!
  }
`;
