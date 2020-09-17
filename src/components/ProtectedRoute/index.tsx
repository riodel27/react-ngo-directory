import * as React from "react";
import * as Router from "react-router-dom";

/* Local */
import { AuthContext } from "../Authentication";

// ----------------------------------------------------------------------------

interface IRenderRouteProps {
  component: React.ComponentType<any>;
}

type ProtectedRouteProps = Router.RouteProps & IRenderRouteProps;

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props: any) => {
  const { authenticated } = React.useContext(AuthContext);
  // const authenticated = true;
  if (!authenticated) {
    return <Router.Redirect to="/sign-in" />;
  }

  const { component: Component, ...rest } = props;

  return <Component {...rest} />;
};

export default ProtectedRoute;
