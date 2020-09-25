import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import Header from "components/Header";
import Routes from "routes";

const queryCache = new QueryCache();

//TODO: implement loading and error handling
//TODO: implement react-query backround prefetch status...

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Header />
        <Routes />
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  );
}

export default App;
