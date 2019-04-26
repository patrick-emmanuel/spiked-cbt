import user from "./user";
import role from "./role";
import test from "./test";

const Query = {
  ...role,
  ...user,
  ...test
};

export default Query;
