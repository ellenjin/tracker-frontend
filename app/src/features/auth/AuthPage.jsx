import LoginForm from './LoginForm';
import SignUpBtn from './SignUpBtn';
import { getOneUserApi } from '../../requests/userApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { Box, Typography, Alert } from '@mui/material';

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
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'background.paper',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Logger
      </Typography>
      <Typography variant="body1" gutterBottom>
        Let's stay on track together!
      </Typography>

      <LoginForm
        username={username}
        setUsername={setUsername}
        onSubmit={handleLogin}
        setError={setError}
      />

      <SignUpBtn />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}

export default AuthPage;
