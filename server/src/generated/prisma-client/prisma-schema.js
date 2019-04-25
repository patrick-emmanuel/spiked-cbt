module.exports = {
        typeDefs: /* GraphQL */ `type AggregateRole {
  count: Int!
}

type AggregateTest {
  count: Int!
}

type AggregateTestQuestion {
  count: Int!
}

type AggregateTestQuestionOption {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserRole {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createTest(data: TestCreateInput!): Test!
  updateTest(data: TestUpdateInput!, where: TestWhereUniqueInput!): Test
  updateManyTests(data: TestUpdateManyMutationInput!, where: TestWhereInput): BatchPayload!
  upsertTest(where: TestWhereUniqueInput!, create: TestCreateInput!, update: TestUpdateInput!): Test!
  deleteTest(where: TestWhereUniqueInput!): Test
  deleteManyTests(where: TestWhereInput): BatchPayload!
  createTestQuestion(data: TestQuestionCreateInput!): TestQuestion!
  updateTestQuestion(data: TestQuestionUpdateInput!, where: TestQuestionWhereUniqueInput!): TestQuestion
  updateManyTestQuestions(data: TestQuestionUpdateManyMutationInput!, where: TestQuestionWhereInput): BatchPayload!
  upsertTestQuestion(where: TestQuestionWhereUniqueInput!, create: TestQuestionCreateInput!, update: TestQuestionUpdateInput!): TestQuestion!
  deleteTestQuestion(where: TestQuestionWhereUniqueInput!): TestQuestion
  deleteManyTestQuestions(where: TestQuestionWhereInput): BatchPayload!
  createTestQuestionOption(data: TestQuestionOptionCreateInput!): TestQuestionOption!
  updateTestQuestionOption(data: TestQuestionOptionUpdateInput!, where: TestQuestionOptionWhereUniqueInput!): TestQuestionOption
  updateManyTestQuestionOptions(data: TestQuestionOptionUpdateManyMutationInput!, where: TestQuestionOptionWhereInput): BatchPayload!
  upsertTestQuestionOption(where: TestQuestionOptionWhereUniqueInput!, create: TestQuestionOptionCreateInput!, update: TestQuestionOptionUpdateInput!): TestQuestionOption!
  deleteTestQuestionOption(where: TestQuestionOptionWhereUniqueInput!): TestQuestionOption
  deleteManyTestQuestionOptions(where: TestQuestionOptionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserRole(data: UserRoleCreateInput!): UserRole!
  updateUserRole(data: UserRoleUpdateInput!, where: UserRoleWhereUniqueInput!): UserRole
  upsertUserRole(where: UserRoleWhereUniqueInput!, create: UserRoleCreateInput!, update: UserRoleUpdateInput!): UserRole!
  deleteUserRole(where: UserRoleWhereUniqueInput!): UserRole
  deleteManyUserRoles(where: UserRoleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  test(where: TestWhereUniqueInput!): Test
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test]!
  testsConnection(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestConnection!
  testQuestion(where: TestQuestionWhereUniqueInput!): TestQuestion
  testQuestions(where: TestQuestionWhereInput, orderBy: TestQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TestQuestion]!
  testQuestionsConnection(where: TestQuestionWhereInput, orderBy: TestQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestQuestionConnection!
  testQuestionOption(where: TestQuestionOptionWhereUniqueInput!): TestQuestionOption
  testQuestionOptions(where: TestQuestionOptionWhereInput, orderBy: TestQuestionOptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TestQuestionOption]!
  testQuestionOptionsConnection(where: TestQuestionOptionWhereInput, orderBy: TestQuestionOptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestQuestionOptionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userRole(where: UserRoleWhereUniqueInput!): UserRole
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole]!
  userRolesConnection(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRoleConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  userRoles: UserRoleCreateManyWithoutRoleInput
}

input RoleCreateOneWithoutUserRolesInput {
  create: RoleCreateWithoutUserRolesInput
  connect: RoleWhereUniqueInput
}

input RoleCreateWithoutUserRolesInput {
  name: String!
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateInput {
  name: String
  userRoles: UserRoleUpdateManyWithoutRoleInput
}

input RoleUpdateManyMutationInput {
  name: String
}

input RoleUpdateOneRequiredWithoutUserRolesInput {
  create: RoleCreateWithoutUserRolesInput
  update: RoleUpdateWithoutUserRolesDataInput
  upsert: RoleUpsertWithoutUserRolesInput
  connect: RoleWhereUniqueInput
}

input RoleUpdateWithoutUserRolesDataInput {
  name: String
}

input RoleUpsertWithoutUserRolesInput {
  update: RoleUpdateWithoutUserRolesDataInput!
  create: RoleCreateWithoutUserRolesInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  userRoles_every: UserRoleWhereInput
  userRoles_some: UserRoleWhereInput
  userRoles_none: UserRoleWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  test(where: TestSubscriptionWhereInput): TestSubscriptionPayload
  testQuestion(where: TestQuestionSubscriptionWhereInput): TestQuestionSubscriptionPayload
  testQuestionOption(where: TestQuestionOptionSubscriptionWhereInput): TestQuestionOptionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userRole(where: UserRoleSubscriptionWhereInput): UserRoleSubscriptionPayload
}

type Test {
  id: ID!
  name: String!
  questions(where: TestQuestionWhereInput, orderBy: TestQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TestQuestion!]
}

type TestConnection {
  pageInfo: PageInfo!
  edges: [TestEdge]!
  aggregate: AggregateTest!
}

input TestCreateInput {
  name: String!
  questions: TestQuestionCreateManyInput
}

input TestCreateManyInput {
  create: [TestCreateInput!]
  connect: [TestWhereUniqueInput!]
}

type TestEdge {
  node: Test!
  cursor: String!
}

enum TestOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TestPreviousValues {
  id: ID!
  name: String!
}

type TestQuestion {
  id: ID!
  multipleChoice: Boolean!
  options(where: TestQuestionOptionWhereInput, orderBy: TestQuestionOptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TestQuestionOption!]
}

type TestQuestionConnection {
  pageInfo: PageInfo!
  edges: [TestQuestionEdge]!
  aggregate: AggregateTestQuestion!
}

input TestQuestionCreateInput {
  multipleChoice: Boolean
  options: TestQuestionOptionCreateManyInput
}

input TestQuestionCreateManyInput {
  create: [TestQuestionCreateInput!]
  connect: [TestQuestionWhereUniqueInput!]
}

type TestQuestionEdge {
  node: TestQuestion!
  cursor: String!
}

type TestQuestionOption {
  id: ID!
  value: String!
  correctOption: Boolean!
}

type TestQuestionOptionConnection {
  pageInfo: PageInfo!
  edges: [TestQuestionOptionEdge]!
  aggregate: AggregateTestQuestionOption!
}

input TestQuestionOptionCreateInput {
  value: String!
  correctOption: Boolean
}

input TestQuestionOptionCreateManyInput {
  create: [TestQuestionOptionCreateInput!]
  connect: [TestQuestionOptionWhereUniqueInput!]
}

type TestQuestionOptionEdge {
  node: TestQuestionOption!
  cursor: String!
}

enum TestQuestionOptionOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  correctOption_ASC
  correctOption_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TestQuestionOptionPreviousValues {
  id: ID!
  value: String!
  correctOption: Boolean!
}

input TestQuestionOptionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  correctOption: Boolean
  correctOption_not: Boolean
  AND: [TestQuestionOptionScalarWhereInput!]
  OR: [TestQuestionOptionScalarWhereInput!]
  NOT: [TestQuestionOptionScalarWhereInput!]
}

type TestQuestionOptionSubscriptionPayload {
  mutation: MutationType!
  node: TestQuestionOption
  updatedFields: [String!]
  previousValues: TestQuestionOptionPreviousValues
}

input TestQuestionOptionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestQuestionOptionWhereInput
  AND: [TestQuestionOptionSubscriptionWhereInput!]
  OR: [TestQuestionOptionSubscriptionWhereInput!]
  NOT: [TestQuestionOptionSubscriptionWhereInput!]
}

input TestQuestionOptionUpdateDataInput {
  value: String
  correctOption: Boolean
}

input TestQuestionOptionUpdateInput {
  value: String
  correctOption: Boolean
}

input TestQuestionOptionUpdateManyDataInput {
  value: String
  correctOption: Boolean
}

input TestQuestionOptionUpdateManyInput {
  create: [TestQuestionOptionCreateInput!]
  update: [TestQuestionOptionUpdateWithWhereUniqueNestedInput!]
  upsert: [TestQuestionOptionUpsertWithWhereUniqueNestedInput!]
  delete: [TestQuestionOptionWhereUniqueInput!]
  connect: [TestQuestionOptionWhereUniqueInput!]
  disconnect: [TestQuestionOptionWhereUniqueInput!]
  deleteMany: [TestQuestionOptionScalarWhereInput!]
  updateMany: [TestQuestionOptionUpdateManyWithWhereNestedInput!]
}

input TestQuestionOptionUpdateManyMutationInput {
  value: String
  correctOption: Boolean
}

input TestQuestionOptionUpdateManyWithWhereNestedInput {
  where: TestQuestionOptionScalarWhereInput!
  data: TestQuestionOptionUpdateManyDataInput!
}

input TestQuestionOptionUpdateWithWhereUniqueNestedInput {
  where: TestQuestionOptionWhereUniqueInput!
  data: TestQuestionOptionUpdateDataInput!
}

input TestQuestionOptionUpsertWithWhereUniqueNestedInput {
  where: TestQuestionOptionWhereUniqueInput!
  update: TestQuestionOptionUpdateDataInput!
  create: TestQuestionOptionCreateInput!
}

input TestQuestionOptionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  correctOption: Boolean
  correctOption_not: Boolean
  AND: [TestQuestionOptionWhereInput!]
  OR: [TestQuestionOptionWhereInput!]
  NOT: [TestQuestionOptionWhereInput!]
}

input TestQuestionOptionWhereUniqueInput {
  id: ID
}

enum TestQuestionOrderByInput {
  id_ASC
  id_DESC
  multipleChoice_ASC
  multipleChoice_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TestQuestionPreviousValues {
  id: ID!
  multipleChoice: Boolean!
}

input TestQuestionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  multipleChoice: Boolean
  multipleChoice_not: Boolean
  AND: [TestQuestionScalarWhereInput!]
  OR: [TestQuestionScalarWhereInput!]
  NOT: [TestQuestionScalarWhereInput!]
}

type TestQuestionSubscriptionPayload {
  mutation: MutationType!
  node: TestQuestion
  updatedFields: [String!]
  previousValues: TestQuestionPreviousValues
}

input TestQuestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestQuestionWhereInput
  AND: [TestQuestionSubscriptionWhereInput!]
  OR: [TestQuestionSubscriptionWhereInput!]
  NOT: [TestQuestionSubscriptionWhereInput!]
}

input TestQuestionUpdateDataInput {
  multipleChoice: Boolean
  options: TestQuestionOptionUpdateManyInput
}

input TestQuestionUpdateInput {
  multipleChoice: Boolean
  options: TestQuestionOptionUpdateManyInput
}

input TestQuestionUpdateManyDataInput {
  multipleChoice: Boolean
}

input TestQuestionUpdateManyInput {
  create: [TestQuestionCreateInput!]
  update: [TestQuestionUpdateWithWhereUniqueNestedInput!]
  upsert: [TestQuestionUpsertWithWhereUniqueNestedInput!]
  delete: [TestQuestionWhereUniqueInput!]
  connect: [TestQuestionWhereUniqueInput!]
  disconnect: [TestQuestionWhereUniqueInput!]
  deleteMany: [TestQuestionScalarWhereInput!]
  updateMany: [TestQuestionUpdateManyWithWhereNestedInput!]
}

input TestQuestionUpdateManyMutationInput {
  multipleChoice: Boolean
}

input TestQuestionUpdateManyWithWhereNestedInput {
  where: TestQuestionScalarWhereInput!
  data: TestQuestionUpdateManyDataInput!
}

input TestQuestionUpdateWithWhereUniqueNestedInput {
  where: TestQuestionWhereUniqueInput!
  data: TestQuestionUpdateDataInput!
}

input TestQuestionUpsertWithWhereUniqueNestedInput {
  where: TestQuestionWhereUniqueInput!
  update: TestQuestionUpdateDataInput!
  create: TestQuestionCreateInput!
}

input TestQuestionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  multipleChoice: Boolean
  multipleChoice_not: Boolean
  options_every: TestQuestionOptionWhereInput
  options_some: TestQuestionOptionWhereInput
  options_none: TestQuestionOptionWhereInput
  AND: [TestQuestionWhereInput!]
  OR: [TestQuestionWhereInput!]
  NOT: [TestQuestionWhereInput!]
}

input TestQuestionWhereUniqueInput {
  id: ID
}

input TestScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TestScalarWhereInput!]
  OR: [TestScalarWhereInput!]
  NOT: [TestScalarWhereInput!]
}

type TestSubscriptionPayload {
  mutation: MutationType!
  node: Test
  updatedFields: [String!]
  previousValues: TestPreviousValues
}

input TestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestWhereInput
  AND: [TestSubscriptionWhereInput!]
  OR: [TestSubscriptionWhereInput!]
  NOT: [TestSubscriptionWhereInput!]
}

input TestUpdateDataInput {
  name: String
  questions: TestQuestionUpdateManyInput
}

input TestUpdateInput {
  name: String
  questions: TestQuestionUpdateManyInput
}

input TestUpdateManyDataInput {
  name: String
}

input TestUpdateManyInput {
  create: [TestCreateInput!]
  update: [TestUpdateWithWhereUniqueNestedInput!]
  upsert: [TestUpsertWithWhereUniqueNestedInput!]
  delete: [TestWhereUniqueInput!]
  connect: [TestWhereUniqueInput!]
  disconnect: [TestWhereUniqueInput!]
  deleteMany: [TestScalarWhereInput!]
  updateMany: [TestUpdateManyWithWhereNestedInput!]
}

input TestUpdateManyMutationInput {
  name: String
}

input TestUpdateManyWithWhereNestedInput {
  where: TestScalarWhereInput!
  data: TestUpdateManyDataInput!
}

input TestUpdateWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput!
  data: TestUpdateDataInput!
}

input TestUpsertWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput!
  update: TestUpdateDataInput!
  create: TestCreateInput!
}

input TestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  questions_every: TestQuestionWhereInput
  questions_some: TestQuestionWhereInput
  questions_none: TestQuestionWhereInput
  AND: [TestWhereInput!]
  OR: [TestWhereInput!]
  NOT: [TestWhereInput!]
}

input TestWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole!]
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  userRoles: UserRoleCreateManyWithoutUserInput
  tests: TestCreateManyInput
}

input UserCreateOneWithoutUserRolesInput {
  create: UserCreateWithoutUserRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutUserRolesInput {
  email: String!
  password: String!
  name: String!
  tests: TestCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserRole {
  id: ID!
  user: User!
  role: Role!
}

type UserRoleConnection {
  pageInfo: PageInfo!
  edges: [UserRoleEdge]!
  aggregate: AggregateUserRole!
}

input UserRoleCreateInput {
  user: UserCreateOneWithoutUserRolesInput!
  role: RoleCreateOneWithoutUserRolesInput!
}

input UserRoleCreateManyWithoutRoleInput {
  create: [UserRoleCreateWithoutRoleInput!]
  connect: [UserRoleWhereUniqueInput!]
}

input UserRoleCreateManyWithoutUserInput {
  create: [UserRoleCreateWithoutUserInput!]
  connect: [UserRoleWhereUniqueInput!]
}

input UserRoleCreateWithoutRoleInput {
  user: UserCreateOneWithoutUserRolesInput!
}

input UserRoleCreateWithoutUserInput {
  role: RoleCreateOneWithoutUserRolesInput!
}

type UserRoleEdge {
  node: UserRole!
  cursor: String!
}

enum UserRoleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserRolePreviousValues {
  id: ID!
}

input UserRoleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [UserRoleScalarWhereInput!]
  OR: [UserRoleScalarWhereInput!]
  NOT: [UserRoleScalarWhereInput!]
}

type UserRoleSubscriptionPayload {
  mutation: MutationType!
  node: UserRole
  updatedFields: [String!]
  previousValues: UserRolePreviousValues
}

input UserRoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserRoleWhereInput
  AND: [UserRoleSubscriptionWhereInput!]
  OR: [UserRoleSubscriptionWhereInput!]
  NOT: [UserRoleSubscriptionWhereInput!]
}

input UserRoleUpdateInput {
  user: UserUpdateOneRequiredWithoutUserRolesInput
  role: RoleUpdateOneRequiredWithoutUserRolesInput
}

input UserRoleUpdateManyWithoutRoleInput {
  create: [UserRoleCreateWithoutRoleInput!]
  delete: [UserRoleWhereUniqueInput!]
  connect: [UserRoleWhereUniqueInput!]
  disconnect: [UserRoleWhereUniqueInput!]
  update: [UserRoleUpdateWithWhereUniqueWithoutRoleInput!]
  upsert: [UserRoleUpsertWithWhereUniqueWithoutRoleInput!]
  deleteMany: [UserRoleScalarWhereInput!]
}

input UserRoleUpdateManyWithoutUserInput {
  create: [UserRoleCreateWithoutUserInput!]
  delete: [UserRoleWhereUniqueInput!]
  connect: [UserRoleWhereUniqueInput!]
  disconnect: [UserRoleWhereUniqueInput!]
  update: [UserRoleUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserRoleUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [UserRoleScalarWhereInput!]
}

input UserRoleUpdateWithoutRoleDataInput {
  user: UserUpdateOneRequiredWithoutUserRolesInput
}

input UserRoleUpdateWithoutUserDataInput {
  role: RoleUpdateOneRequiredWithoutUserRolesInput
}

input UserRoleUpdateWithWhereUniqueWithoutRoleInput {
  where: UserRoleWhereUniqueInput!
  data: UserRoleUpdateWithoutRoleDataInput!
}

input UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  data: UserRoleUpdateWithoutUserDataInput!
}

input UserRoleUpsertWithWhereUniqueWithoutRoleInput {
  where: UserRoleWhereUniqueInput!
  update: UserRoleUpdateWithoutRoleDataInput!
  create: UserRoleCreateWithoutRoleInput!
}

input UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  update: UserRoleUpdateWithoutUserDataInput!
  create: UserRoleCreateWithoutUserInput!
}

input UserRoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  role: RoleWhereInput
  AND: [UserRoleWhereInput!]
  OR: [UserRoleWhereInput!]
  NOT: [UserRoleWhereInput!]
}

input UserRoleWhereUniqueInput {
  id: ID
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  userRoles: UserRoleUpdateManyWithoutUserInput
  tests: TestUpdateManyInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutUserRolesInput {
  create: UserCreateWithoutUserRolesInput
  update: UserUpdateWithoutUserRolesDataInput
  upsert: UserUpsertWithoutUserRolesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutUserRolesDataInput {
  email: String
  password: String
  name: String
  tests: TestUpdateManyInput
}

input UserUpsertWithoutUserRolesInput {
  update: UserUpdateWithoutUserRolesDataInput!
  create: UserCreateWithoutUserRolesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  userRoles_every: UserRoleWhereInput
  userRoles_some: UserRoleWhereInput
  userRoles_none: UserRoleWhereInput
  tests_every: TestWhereInput
  tests_some: TestWhereInput
  tests_none: TestWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    