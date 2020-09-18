import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "components/Header";
import Routes from "routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
