import * as React from "react";

import { Redirect } from "react-router-dom";

import { AuthContext } from "../Authentication";

const PublicRoutes: React.FC<{}> = () => {
  const { authenticated } = React.useContext(AuthContext);

  console.log("authenticated: ", authenticated);

  if (!authenticated) return <Redirect to="/sign-in" />;

  return <Redirect to="/dashboard" />;
};

export default PublicRoutes;
