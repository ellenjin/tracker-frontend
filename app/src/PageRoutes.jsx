/* Defines the Routes (for HashRouter). Can be used in other files.
 */

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './features/auth/AuthPage';
import HomeDashboard from './features/dashboard/HomeDashboard';
import GroupPage from './features/groups/GroupPage'; // rename to GroupPage
import SignUpForm from './features/auth/SignUpForm'; // rename to Signup Page
import ProfilePage from './features/profile/ProfilePage';

function PageRoutes({ currentUser, setCurrentUser }) {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage onLogin={setCurrentUser} />} />
      {/* If conditions of ProtectedRoute are met (user is logged in)-> dashboard */}
      <Route
        path="/HomeDashboard"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            <HomeDashboard currentUser={currentUser} />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/GroupPage"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            {currentUser && <GroupPage groupList={currentUser.groups} />}
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/ProfilePage"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            {currentUser && <ProfilePage user={currentUser} />}
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

export default PageRoutes;
