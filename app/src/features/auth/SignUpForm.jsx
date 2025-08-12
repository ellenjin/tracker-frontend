import { postUserApi } from '../../requests/userApi';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { useUser } from '../../contexts/UserContext';

function SignUpForm() {
  const { setCurrentUser, refreshUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataJson = Object.fromEntries(formData.entries());

    try {
      const newUser = await postUserApi(formDataJson);
      setCurrentUser(newUser);
      console.log(newUser);
      e.target.reset();
      refreshUser();

      navigate('/HomeDashboard');
    } catch (error) {
      alert('User could not be created! Please check your input.');
      console.error('Failed to create user', error);
    }
  };

  return (
    <Box
      component="form"
      method="post"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <TextField
        label="Username"
        name="username"
        variant="outlined"
        required
        fullWidth
        helperText="Username can only contain letters (aA-zZ)."
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        required
        fullWidth
        helperText="Make sure that your password is at least 15 characters long."
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        variant="outlined"
        required
        fullWidth
        placeholder="123-456-7890"
        slotProps={{ maxLength: 15 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUpForm;
