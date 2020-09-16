import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import SignIn from "./views/Login";
import SignUp from "./views/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
