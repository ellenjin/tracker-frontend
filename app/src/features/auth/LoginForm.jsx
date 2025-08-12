import { Box, TextField, Button } from '@mui/material';

function LoginForm({ username, setUsername, onSubmit, setError }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let isAlphabetic = /^[A-Za-z]+$/.test(username);
    if (!username || !isAlphabetic) {
      setError('Please enter a valid username');
      return;
    }
    onSubmit();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
    >
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
