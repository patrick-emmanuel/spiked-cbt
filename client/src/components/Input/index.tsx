import React from "react";
import classnames from "classnames";
import "./styles.css";

export interface InputProps {
  classes?: string;
  name: string;
  required?: boolean;
  type: "email" | "password" | "text" | "number";
  minLength?: number;
  id: string;
  controlHandler: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const Input: React.StatelessComponent<InputProps> = ({
  classes,
  name,
  type,
  id,
  required,
  controlHandler
}) => {
  let inputStyle = classnames("form-input", classes);

  return (
      <input
        className={inputStyle}
        id={id}
        type={type}
        name={name}
        required={required}
        {...controlHandler}
      />
  );
};

export default Input;
