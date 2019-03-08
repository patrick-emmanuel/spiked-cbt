import React from "react";
import classnames from "classnames";
import "./styles.css";

export interface ButtonProps {
  classes?: string;
  disabled?: boolean;
}

const Button: React.StatelessComponent<ButtonProps> = ({
  classes,
  disabled,
  children
}) => {
  let buttonStyle = classnames("button", classes);

  return <button className={buttonStyle} disabled={disabled}>{children}</button>;
};

export default Button;
