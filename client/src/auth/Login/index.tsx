import React, { useContext } from "react";
import LoginView from "./LoginView";
import { AuthContext } from "../AuthProvider/context";

const Login: React.StatelessComponent = () => {
  const value = useContext(AuthContext);
  const { login, loginLoading, loginError } = value;
  return <LoginView login={login} loading={loginLoading} error={loginError} />;
};

export default Login;
