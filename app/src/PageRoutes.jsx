/* Defines the Routes (for HashRouter). Can be used in other files.
 */

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './features/auth/AuthPage';
import HomeDashboard from './features/dashboard/HomeDashboard';
import GroupDetails from './features/groups/GroupDetails'; // rename to GroupPage
import SignUpForm from './features/auth/SignUpForm'; // rename to Signup Page

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
      ></Route>
      <Route
        path="/GroupDetails"
        element={
          <ProtectedRoute user={currentUser}>
            <GroupDetails user={currentUser} />
          </ProtectedRoute>
        }
      ></Route>
      {/* Should probably add something here saying that we have to be 'signing up' to access page */}
      <Route
        path="/SignUpForm"
        element={
          <SignUpForm newUser={currentUser} onCreateUser={setCurrentUser} />
        }
      ></Route>
      {/* Not logged in (catch all) -> Default path (to login page) */}
      <Route path="*" element={<AuthPage onLogin={setCurrentUser} />} />
    </Routes>
  );
}

export default AppRoutes;
