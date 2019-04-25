import auth from "./auth";
import role from "./role";
import test from "./test";

const Mutation = {
  ...auth,
  ...role,
  ...test
};

export default Mutation;
