import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import ResetPassword from '../pages/ResetPassword';
import ForgotPassword from '../pages/ForgotPassword';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route path="/profile" exact component={Profile} isPrivate />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
