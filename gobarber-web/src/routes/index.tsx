import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/dashboard" exact component={dashboard} isPrivate />
  </Switch>
);

export default Routes;
