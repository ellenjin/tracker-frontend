import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const LogEditForm = ({ log, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    frequencyCount: '',
    frequencyUnit: '',
    skillLevel: '',
    wantsPartner: false,
    partnerName: '',
  });

  useEffect(() => {
    if (log) {
      setFormData({
        title: log.title || '',
        frequencyCount: log.frequencyCount || '',
        frequencyUnit: log.frequencyUnit || 'DAY',
        skillLevel: log.skillLevel || 'BEGINNER',
        wantsPartner: log.wantsPartner || false,
        partnerName: log.partnerName || '',
      });
    }
  }, [log]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, mx: 'auto', mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
        Edit Log
      </Typography>

      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Frequency Count"
        name="frequencyCount"
        type="number"
        inputProps={{ min: 0 }}
        value={formData.frequencyCount}
        onChange={handleChange}
        fullWidth
        required
      />

      <FormControl fullWidth>
        <InputLabel id="frequency-unit-label">Frequency Unit</InputLabel>
        <Select
          labelId="frequency-unit-label"
          label="Frequency Unit"
          name="frequencyUnit"
          value={formData.frequencyUnit}
          onChange={handleChange}
          required
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
          label="Skill Level"
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          required
        >
          <MenuItem value="BEGINNER">Beginner</MenuItem>
          <MenuItem value="INTERMEDIATE">Intermediate</MenuItem>
          <MenuItem value="ADVANCED">Advanced</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            name="wantsPartner"
            checked={formData.wantsPartner}
            onChange={handleChange}
          />
        }
        label="Looking for Partner"
      />

      <TextField
        label="Partner Name"
        name="partnerName"
        value={formData.partnerName}
        onChange={handleChange}
        disabled={!formData.wantsPartner}
        fullWidth
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default LogEditForm;
