// Purpose: Container for login and signup forms; handles switching between forms.
// Events: On submit (login or signup), trigger auth POST request.
// Imports: LoginForm, SignupForm.
// Routes: POST /api/auth/login, POST /api/auth/signup.
// State: user
import LoginForm from './LoginForm';
import { getOneUserApi } from '../../requests/userApi';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage({ onLogin }) {
  // Need to find user, and set state for currentUser to that user (if valid)
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = await getOneUserApi(username);
    if (userData) {
      onLogin(userData);
      navigate('/HomeDashboard');
    } // write in condition for if user doesn't exist
  };

  return (
    <>
      <h1>Welcome to Accountability Tracker!</h1>
      <LoginForm
        username={username}
        setUsername={setUsername}
        onSubmit={handleLogin}
      ></LoginForm>
    </>
  );
}
export default AuthPage;
