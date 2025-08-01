import { useState } from 'react';
import './App.css';
import AuthPage from './features/auth/AuthPage';
import GroupDetails from './features/groups/GroupDetails';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      {!currentUser ? (
        <AuthPage onLogin={setCurrentUser} />
      ) : (
        <h1>
          Welcome {currentUser.username}
          {/* Change ^ to redirect to the user home page once created */}
        </h1>
      )}
      <GroupDetails />
    </>
  );
}

export default App;
