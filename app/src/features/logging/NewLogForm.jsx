import React, { useState } from 'react';
import { createLogApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const NewLogForm = ({ userId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    frequencyCount: '',
    frequencyUnit: 'WEEK',
    skillLevel: 'BEGINNER',
    wantsPartner: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      frequencyCount: Number(formData.frequencyCount),
      frequencyUnit: formData.frequencyUnit,
      skillLevel: formData.skillLevel,
      score: 0, // or as needed
      checkInCount: 0,
      wantsPartner: Boolean(formData.wantsPartner),
      partnerName: null,
      timeStamp: new Date().toISOString(),
      group: null,
      user: { id: userId },
    };

    try {
      const response = await createLogApi(payload);
      alert('Log created!');
      navigate(`/logs/${response.logId}`);
    } catch (error) {
      console.error('Failed to create log:', error);
      alert('Something went wrong. Try Again.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        mx: 'auto',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6">New Log</Typography>

      <TextField
        required
        label="Log Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        required
        label="Frequency Count"
        name="frequencyCount"
        type="number"
        value={formData.frequencyCount}
        onChange={handleChange}
        inputProps={{ min: 0 }}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel id="frequency-unit-label">Frequency Unit</InputLabel>
        <Select
          labelId="frequency-unit-label"
          id="frequencyUnit"
          name="frequencyUnit"
          value={formData.frequencyUnit}
          label="Frequency Unit"
          onChange={handleChange}
        >
          <MenuItem value="DAY">Day</MenuItem>
          <MenuItem value="WEEK">Week</MenuItem>
          <MenuItem value="MONTH">Month</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="skill-level-label">Skill Level</InputLabel>
        <Select
          labelId="skill-level-label"
          id="skillLevel"
          name="skillLevel"
          value={formData.skillLevel}
          label="Skill Level"
          onChange={handleChange}
        >
          <MenuItem value="BEGINNER">Beginner</MenuItem>
          <MenuItem value="INTERMEDIATE">Intermediate</MenuItem>
          <MenuItem value="ADVANCED">Advanced</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.wantsPartner}
            onChange={handleChange}
            name="wantsPartner"
          />
        }
        label="Looking for a partner?"
      />

      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Add Log
      </Button>
    </Box>
  );
};

export default NewLogForm;

