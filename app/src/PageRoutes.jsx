/* Defines the Routes (for HashRouter). Can be used in other files.
 */
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './features/auth/AuthPage';
import HomeDashboard from './features/dashboard/HomeDashboard';
import GroupPage from './features/groups/GroupPage';
import SignUpForm from './features/auth/SignUpForm';
import ProfilePage from './features/profile/ProfilePage';
import LogList from './features/logging/LogList';
import LogDetails from './features/logging/LogDetails';
import GroupDetails from './features/groups/GroupDetails';
import { useUser } from './features/auth/UserContext';

function PageRoutes() {
  const { currentUser, setCurrentUser } = useUser();

  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route
        path="/HomeDashboard"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            <HomeDashboard user={currentUser} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/GroupPage"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            {currentUser && (
              <GroupPage
                groupList={currentUser.groups}
                userId={currentUser.id}
              />
            )}
          </ProtectedRoute>
        }
      />
      <Route
        path="/groups/:groupId"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            <GroupDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ProfilePage"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            {currentUser && (
              <ProfilePage user={currentUser} setCurrentUser={setCurrentUser} />
            )}
          </ProtectedRoute>
        }
      />
      <Route
        path="/SignUpForm"
        element={
          <SignUpForm newUser={currentUser} onCreateUser={setCurrentUser} />
        }
      />
      <Route path="*" element={<AuthPage />} />
      <Route
        path="/Logs"
        element={
          <ProtectedRoute
            user={currentUser}
            onLogout={() => setCurrentUser(null)}
          >
            {currentUser && <LogList userId={currentUser.id} />}
          </ProtectedRoute>
        }
      />
      <Route
        path="/Logs/:logId"
        element={
          <ProtectedRoute user={currentUser}>
            <LogDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default PageRoutes;

