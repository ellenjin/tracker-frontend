import { useState } from 'react';
import { deleteUserApi } from '../../requests/userApi';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const DeleteAccountButton = ({ user, setCurrentUser }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteUserApi(user.id);
      setCurrentUser(null);
      setOpen(false);
    } catch (error) {
      console.error('Failed to delete account', error);
    }
  };

  return (
    <>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        Delete your account {user.username}
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAccountButton;
