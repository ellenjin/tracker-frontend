import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const SignUpBtn = () => {
  return (
    <Button
      component={RouterLink}
      to="/SignUpForm"
      variant="text"
      color="primary"
      sx={{ mt: 2 }}
      fullWidth
    >
      Not a user yet? Sign up here
    </Button>
  );
};

export default SignUpBtn;
