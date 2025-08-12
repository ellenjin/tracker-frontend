import { Navigate } from 'react-router-dom';
import NavHeader from './NavHeader';

function ProtectedRoute({ user, onLogout, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <NavHeader onLogout={onLogout}></NavHeader>
      {children}
    </>
  );
}

export default ProtectedRoute;
