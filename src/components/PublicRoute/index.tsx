import * as React from "react";

import { Redirect } from "react-router-dom";

import { AuthContext } from "components/Authentication";

const PublicRoutes: React.FC<{}> = () => {
  const { authenticated } = React.useContext(AuthContext);

  if (!authenticated) return <Redirect to="/sign-in" />;

  return <Redirect to="/dashboard" />;
};

export default PublicRoutes;
