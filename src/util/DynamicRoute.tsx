import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthState } from "context/auth";

const DynamicRoute: React.FC<any> = (props) => {
  const { user } = useAuthState();

  // const user = false; // bypass

  if (props.authenticated && !user) {
    return <Redirect to="/sign-in" />;
  } else if (props.guest && user) {
    return <Redirect to="/" />;
  } else {
    return <Route component={props.component} {...props} />;
  }
};

export default DynamicRoute;
