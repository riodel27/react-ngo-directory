import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import { FullPageSpinner } from "components/lib";
import Header from "components/Header";

const Routes = React.lazy(() => import("routes"));

const queryCache = new QueryCache();

//TODO: implement loading and error handling
//TODO: implement react-query backround prefetch status...

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Header />
        <React.Suspense fallback={<FullPageSpinner />}>
          <Routes />
        </React.Suspense>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  );
}

export default App;
