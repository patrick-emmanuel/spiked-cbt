import React, { Children } from "react";
import classnames from "classnames";
import "./styles.css";

export interface InputProps {
  classes?: string;
  children: React.ReactNode;
}

const InputGroup: React.StatelessComponent<InputProps> = ({
  classes,
  children
}) => {
  let inputGroupStyle = classnames("form-group-input", classes);

  return <div className={inputGroupStyle}>{children}</div>;
};

export default InputGroup;
