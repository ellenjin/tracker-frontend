// Purpose: Container for login and signup forms; handles switching between forms.
// Events: On submit (login or signup), trigger auth POST request.
// Imports: LoginForm, SignupForm.
// Routes: POST /api/auth/login, POST /api/auth/signup.
// State: user
import LoginForm from './LoginForm';
import SignUpBtn from './SignUpBtn';
import { getOneUserApi } from '../../requests/userApi';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage({ onLogin }) {
  // Need to find user, and set state for currentUser to that user (if valid)
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = await getOneUserApi(username);
    if (userData) {
      onLogin(userData);
      navigate('/HomeDashboard');
    } else {
      setError('User does not exist');
    }
  };

  return (
    <>
      <h1>Welcome to Accountability Tracker!</h1>
      <LoginForm
        username={username}
        setUsername={setUsername}
        onSubmit={handleLogin}
        setError={setError}
      ></LoginForm>
      <SignUpBtn></SignUpBtn>
      {error && <p>{error}</p>}
    </>
  );
}
export default AuthPage;
