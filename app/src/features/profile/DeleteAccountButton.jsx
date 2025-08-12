import { deleteUserApi } from '../../requests/userApi';
import { Button } from '@mui/material';

const DeleteAccountButton = ({ user, setCurrentUser }) => {
  const handleClick = () => {
    const answer = window.confirm('Are you sure you want to delete your account?');
    if (answer) {
      deleteUserApi(user.id);
      setCurrentUser(null);
    }
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={handleClick}
      fullWidth
      sx={{ mt: 2 }}
    >
      Delete your account {user.username}
    </Button>
  );
};

export default DeleteAccountButton;
