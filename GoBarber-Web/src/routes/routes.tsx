import React from 'react';
import {
  Redirect,
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouterProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
