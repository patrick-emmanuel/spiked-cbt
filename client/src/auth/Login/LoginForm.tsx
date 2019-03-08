import React from "react";
import { Link } from "react-router-dom";
import { ApolloError } from "apollo-client";
import { LoginVariables } from "../types/Login";
import { useFormInput } from "../../utils/customHooks";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";
import Label from "../../components/Label";
import Button from "../../components/Button";

export interface LoginFormProps {
  login: (variables: LoginVariables) => void;
  loading: boolean;
  error: ApolloError;
}

const LoginForm: React.StatelessComponent<LoginFormProps> = ({
  loading,
  login,
  error
}) => {
  const email = useFormInput("");
  const password = useFormInput("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: email.value,
      password: password.value
    });
  };

  return (
    <div className="form-grid">
      <div className="first-item">
        <p className="slide-up">
          {error ? error.message.split(": ")[1] : ""}
        </p>
        <form onSubmit={handleLogin}>
          <InputGroup>
            <Label classes="login-form-label"> Email</Label>
            <Input
              id="login-email"
              type="email"
              minLength={5}
              required
              name="password"
              controlHandler={email}
            />
          </InputGroup>
          <InputGroup>
            <Label classes="login-form-label">Password</Label>
            <Input
              id="login-password"
              type="password"
              minLength={6}
              required
              name="password"
              controlHandler={password}
            />
          </InputGroup>
          <InputGroup>
            <Button disabled={loading}>
              {loading ? "Loggin in..." : "Login"}
            </Button>
          </InputGroup>
          <div className="loginFooter">
            <Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
