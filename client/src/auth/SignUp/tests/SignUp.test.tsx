import React from 'react'
import SignUp from "..";
import { render, fireEvent } from "../../../utils/testUtils";
import 'jest-dom/extend-expect';

test("should disable button sign up", () => {
  const { getByText } = render(<SignUp />);
  const button = getByText('Sign up')

  fireEvent.click(button)

  expect(button).toHaveAttribute('disabled');
});
