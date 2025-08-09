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

import './AuthPage.css';

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
    <div className="auth-container">
      <h1>Logger</h1>
      <p>Let's stay on track together!</p>
      <LoginForm
        username={username}
        setUsername={setUsername}
        onSubmit={handleLogin}
        setError={setError}
      ></LoginForm>
      <SignUpBtn></SignUpBtn>
      {error && (
        <div className="auth-error ${error ? '' : 'hidden}">{error || ''}</div>
      )}
    </div>
  );
}
export default AuthPage;
