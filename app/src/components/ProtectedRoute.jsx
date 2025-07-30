/*
Determines whether or not someone is logged in or not -- if yes logged in,
then will route to the assigned page. Else, the default route will be to redirect
to the login page.
*/

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
