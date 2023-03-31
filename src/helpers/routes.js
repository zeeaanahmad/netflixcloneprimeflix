import React from "react";
import { Route, Redirect } from "react-router-dom";

//redirects a logged in user to the browse page if they hit the signin/signup pages
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
}

//protects the browse page from unregistered users
export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
          );
        }
        return null;
      }}
    />
  );
}
