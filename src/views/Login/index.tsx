import React, { useContext } from "react";
import * as Router from "react-router-dom";

import { AuthContext } from "components/Authentication";

import LoginModule from "components/Login";

export const Login: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  if (authenticated) return <Router.Redirect to="/" />;

  return <LoginModule />;
};

export default Login;
