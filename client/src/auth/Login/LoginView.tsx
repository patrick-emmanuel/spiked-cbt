import React from "react";
import { LoginVariables } from "../types/Login";
import { ApolloError } from "apollo-client";
import LoginForm from "./LoginForm";
import "./styles.css";
import Logo from "../../components/Logo";

export interface LoginViewProps {
  login: (variables: LoginVariables) => void;
  loading: boolean;
  error: ApolloError;
}

const LoginView: React.StatelessComponent<LoginViewProps> = ({
  login,
  loading,
  error
}) => {
  return (
    <section className="auth-wrapper">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <LoginForm login={login} loading={loading} error={error} />
    </section>
  );
};

export default LoginView;
