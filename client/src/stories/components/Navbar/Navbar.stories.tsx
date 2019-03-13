import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar, { NavbarProps } from "../../../components/Navbar";

const messageProps: NavbarProps = {
  navData: ["Something"]
};
storiesOf("components / Navbar", module)
  .add("default", () => <Navbar />)
  .add("navbar with message", () => <Navbar {...messageProps} />);
