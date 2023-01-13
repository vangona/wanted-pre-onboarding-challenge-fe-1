import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  condition: boolean;
  validRoute: React.ReactNode;
  invalidTo: string;
}

const ProtectedRoute = ({
  condition,
  validRoute,
  invalidTo,
}: ProtectedRouteProps) => {
  return <>{condition ? validRoute : <Navigate to={invalidTo} />}</>;
};

export default ProtectedRoute;
