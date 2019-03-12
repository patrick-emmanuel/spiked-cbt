import React from "react";
import { ApolloError } from "apollo-client";
import SignUpForm from "./SignUpForm";
import "./styles.css";
import Logo from "../../components/Logo";
import { SignUpVariables } from "../types/SignUp";

export interface SignUpViewProps {
  signUp: (variables: SignUpVariables) => void;
  loading: boolean;
  error: ApolloError;
}

const SignUpView: React.StatelessComponent<SignUpViewProps> = ({
  signUp,
  loading,
  error
}) => {
  return (
    <section className="auth-wrapper">
      <div className="signup--logo-wrapper">
        <Logo />
      </div>
      <SignUpForm signUp={signUp} loading={loading} error={error} />
    </section>
  );
};

export default SignUpView;
