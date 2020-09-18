import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Dashboard from "views/Dashboard";
import Ngo from "views/Ngo";
import PageNotFound from "views/PageNotFound";
import SignIn from "views/Login";
import SignUp from "views/SignUp";
import User from "views/User";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} isPrivate />
      <Route exact path="/sign-in" component={SignIn} guest />
      <Route exact path="/sign-up" component={SignUp} guest />
      <Route path="/organizations" component={Ngo} isPrivate />
      <Route path="/users" component={User} isPrivate />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
