import { UserInputError, ForbiddenError } from "apollo-server-core";

const test = {
  createTest: async (parent, { data }, { prisma }) => {
    console.log(data);
    const { id } = await prisma.createTest({ ...data });
    return {
      id
    };
  }
};

export default test;
