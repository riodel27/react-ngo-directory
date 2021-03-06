import Dashboard from 'pages/Dashboard';
import SignIn from 'pages/Login';
import Ngo from 'pages/Ngo';
import PageNotFound from 'pages/PageNotFound';
import SignUp from 'pages/SignUp';
import User from 'pages/User';
import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

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
