import React from "react";
import { render, RenderResult, RenderOptions } from "react-testing-library";
import AuthProvider from "../auth/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";

interface AllTheProvidersProps {
  children?: React.ReactNode;
}

const AllTheProviders: React.StatelessComponent<AllTheProvidersProps> = ({
  children
}) => (
  <Router>
    <AuthProvider>{children}</AuthProvider>
  </Router>
);

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "react-testing-library";

// override render method
export { customRender as render };
