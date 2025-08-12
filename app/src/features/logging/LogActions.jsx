// src/features/logging/LogActions.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const LogActions = ({ onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await onDelete();
      setOpen(false);
    } catch (error) {
      console.error('Failed to delete log:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: 4,
      }}
    >
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => setOpen(true)}
      >
        Delete Log
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Log</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this log? This action cannot be
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
    </Box>
  );
};

export default LogActions;
