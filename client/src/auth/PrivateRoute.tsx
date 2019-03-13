import * as React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { getAuthToken } from "./utils";
import Navbar from "../components/Navbar";

const SectionRoute: React.StatelessComponent<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = getAuthToken();
  // Implement permissions here.
  return (
    <>
      <Route
        {...rest}
        render={props =>
          token ? (
            <div>
              <Navbar navData={["In"]} />
              <Component {...props} />
            </div>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </>
  );
};

SectionRoute.displayName = "Route";
export default SectionRoute;
