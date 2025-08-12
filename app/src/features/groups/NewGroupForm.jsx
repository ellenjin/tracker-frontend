import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from '@mui/material';

const KDefaultGroupState = {
  groupName: '',
  groupPicture: '',
  groupDescription: '',
};

const NewGroupForm = ({ createGroup }) => {
  const [formData, setFormData] = useState(KDefaultGroupState);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createGroup(formData);
      setFormData(KDefaultGroupState);
      setShowForm(false);
    } catch (error) {
      console.error('Failed to create group:', error);
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Button
        variant="contained"
        onClick={() => setShowForm((prev) => !prev)}
        sx={{ mb: 2 }}
      >
        {showForm ? 'Hide New Group Form' : 'Create New Group!'}
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
              label="Name"
              id="groupName"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Description"
              id="description"
              name="groupDescription"
              value={formData.groupDescription}
              onChange={handleChange}
              required
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Create Group
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NewGroupForm;
