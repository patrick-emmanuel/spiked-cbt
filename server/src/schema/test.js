const { gql } = require("apollo-server-express");

export default gql`
  extend type Mutation {
    createTest(data: TestCreateInput!): Test!
  }

  type Test {
    id: ID!
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
`;
