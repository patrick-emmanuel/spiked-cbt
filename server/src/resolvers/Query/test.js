const test = {
  async test(parent, { where }, { prisma }) {
    return await prisma.test({ ...where });
  }
};

export default test;
