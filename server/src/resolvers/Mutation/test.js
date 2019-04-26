const test = {
  createTest: async (parent, { data }, { prisma }) => {
    const { id } = await prisma.createTest({ ...data });
    return {
      id
    };
  },
};

export default test;
