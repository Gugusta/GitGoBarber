import React from 'react';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  return <AuthRoutes />;
};

export default Routes;
