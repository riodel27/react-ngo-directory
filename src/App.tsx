import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Dashboard from "views/Dashboard";
import SignIn from "views/Login";
import SignUp from "views/SignUp";
import PageNotFound from "views/PageNotFound";

import DynamicRoute from "util/DynamicRoute";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* todo: create a wrapper route for this dynamic route */}
        <DynamicRoute exact path="/" component={Dashboard} authenticated />
        <DynamicRoute exact path="/sign-in" component={SignIn} guest />
        <DynamicRoute exact path="/sign-up" component={SignUp} guest />
        <DynamicRoute path="/dashboard" component={Dashboard} authenticated />
        {/* todo: ngo list */}
        {/* todo: users list */}
        <Route path="*" component={PageNotFound} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
