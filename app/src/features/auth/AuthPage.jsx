import LoginForm from './LoginForm';
import SignUpBtn from './SignUpBtn';
import { getOneUserApi } from '../../requests/userApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import { useUser } from '../../contexts/UserContext';

function AuthPage() {
  const { setCurrentUser } = useUser();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = await getOneUserApi(username);
    if (userData) {
      setCurrentUser(userData);
      navigate('/HomeDashboard');
    } else {
      setError('Could not log in, please try again!');
    }
  };

  return (
    <div className="container auth-container">
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
