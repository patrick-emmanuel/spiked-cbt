import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import Logo from "../../components/Logo";
import { AuthContext } from "../AuthProvider/context";


const LoginView: React.StatelessComponent = () => {

  const value = useContext(AuthContext);
  const { login, loginLoading, loginError } = value;

  return (
    <section className="auth-wrapper">
      <div className="login-logo-wrapper">
        <Logo />
      </div>
      <LoginForm login={login} loading={loginLoading} error={loginError} />
    </section>
  );
};

export default LoginView;
