/* Defines the Routes (for HashRouter). Can be used in other files.
 */

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './features/auth/AuthPage';
import HomeDashboard from './features/dashboard/HomeDashboard';

function AppRoutes({ currentUser, setCurrentUser }) {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage onLogin={setCurrentUser} />} />
      {/* If conditions of ProtectedRoute are met (user is logged in)-> dashboard */}
      <Route
        path="/HomeDashboard"
        element={
          <ProtectedRoute user={currentUser}>
            <HomeDashboard currentUser={currentUser} />
          </ProtectedRoute>
        }
      />
      {/* Not logged in -> Default path (to login page) */}
      <Route path="*" element={<AuthPage onLogin={setCurrentUser} />} />
    </Routes>
  );
}

export default AppRoutes;
