import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { useAuthState } from "context/auth";

/** route guard */
const RouteWrapper: React.FC<any> = ({
  component: Component,
  isPrivate,
  guest,
  ...rest
}) => {
  const { user } = useAuthState();

  // const user = false; // bypass

  if (isPrivate && !user) {
    return <Redirect to="/sign-in" />;
  }

  if (guest && user) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
};

export default RouteWrapper;

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  guest: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  guest: false,
};
