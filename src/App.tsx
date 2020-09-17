import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Dashboard from "./views/Dashboard";
import SignIn from "./views/Login";
import SignUp from "./views/SignUp";
import PageNotFound from "./views/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={PublicRoute} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/not-found" component={PageNotFound} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
