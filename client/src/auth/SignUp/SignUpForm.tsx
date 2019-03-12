import React from "react";
import { useFormInput } from "../../utils/customHooks";
import { SignUpVariables } from "../types/SignUp";
import { ApolloError } from "apollo-client";
import { formatSignUpError } from "./utils";
import "./styles.css";
import Label from "../../components/Label";
import InputGroup from "../../components/InputGroup";
import Input from "../../components/Input";
import Button from "../../components/Button";

export interface SignUpFormProps {
  signUp: (variables: SignUpVariables) => void;
  loading: boolean;
  error: ApolloError;
}

const SignUpForm: React.StatelessComponent<SignUpFormProps> = ({
  signUp,
  loading,
  error
}) => {
  const email = useFormInput("");
  const name = useFormInput("");
  const password = useFormInput("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp({
      name: name.value,
      email: email.value,
      password: password.value
    });
  };

  return (
    <section className="signup-form-grid">
      <div className="signup-first-item">
        <div className="bg-red white">{error && formatSignUpError(error)}</div>
        <form onSubmit={handleRegister}>
          <InputGroup>
            <Label>Name</Label>
            <Input
              id="sign-up-id"
              type="text"
              name="name"
              required
              controlHandler={name}
            />
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input
              id="signup-email"
              type="email"
              required
              minLength={5}
              name="email"
              controlHandler={email}
            />
          </InputGroup>
          <InputGroup>
            <Label>Password (6 minimum characters)</Label>
            <Input
              id="signup-password"
              type="password"
              required
              minLength={6}
              name="password"
              controlHandler={password}
            />
          </InputGroup>
          <div>
            <Button disabled={loading}>
              {loading ? "Loading..." : "Sign up"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
