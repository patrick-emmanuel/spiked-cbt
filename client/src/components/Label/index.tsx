import React from "react";
import classnames from "classnames";
import "./styles.css";

export interface LabelProps {
  classes?: string;
  children: React.ReactNode;
}

const Label: React.StatelessComponent<LabelProps> = ({
  classes,
  children
}) => {
  let labelStyle = classnames("form-label", classes);

  return <label className={labelStyle}>{children}</label>;
};

export default Label;
