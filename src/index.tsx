import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import { AuthProvider } from "context/auth";

import App from "./App";

const queryCache = new QueryCache();

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
