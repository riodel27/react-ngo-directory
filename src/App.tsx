import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./views/Login";
import SignUp from "./views/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
