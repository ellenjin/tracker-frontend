import { useState } from 'react';
import { Box, Button, TextField, Typography, Stack, Alert } from '@mui/material';

const KDefaultGroupState = {
  groupId: '',
};

const JoinGroupForm = ({ joinGroup }) => {
  const [formData, setFormData] = useState(KDefaultGroupState);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const result = await joinGroup(formData.groupId);

    if (!result?.success) {
      setError(result?.message || 'Failed to join group');
    } else {
      setFormData(KDefaultGroupState);
      setShowForm(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Button
        variant="contained"
        onClick={() => setShowForm((prev) => !prev)}
        sx={{ mb: 2 }}
      >
        {showForm ? 'Hide Join Group Form' : 'Join an existing group!'}
      </Button>

      {showForm && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{ maxWidth: 480 }}
        >
          <Stack spacing={2}>
            <TextField
              label="Group ID"
              id="groupId"
              name="groupId"
              value={formData.groupId}
              onChange={handleChange}
              required
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Join Group
            </Button>

            {error && (
              <Alert severity="error" variant="outlined">
                {error}
              </Alert>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default JoinGroupForm;

