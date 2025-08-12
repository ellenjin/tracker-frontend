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

// import React, { useState } from 'react';
// import { createLogApi } from '../../requests/logApi';
// import { useNavigate } from 'react-router-dom';

// // Controlled inputs form and submit button that calls createLogApi(logData) from logApi.js
// const NewLogForm = ({ userId }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     frequencyCount: 0,
//     frequencyUnit: 'WEEK',
//     skillLevel: 'BEGINNER',
//     score: 0,
//     checkInCount: 0,
//     wantsPartner: false,
//     partnerName: '(not assigned)',
//     timeStamp: new Date().toISOString(),
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       title: formData.title,
//       frequencyCount: Number(formData.frequencyCount),
//       frequencyUnit: formData.frequencyUnit,
//       skillLevel: formData.skillLevel,
//       score: Number(formData.score),
//       checkInCount: Number(formData.checkInCount),
//       wantsPartner: Boolean(formData.wantsPartner),
//       partnerName: formData.partnerName.trim() || null,
//       timeStamp: new Date().toISOString(),
//       group: formData.group?.id ? { id: formData.group.id } : null,
//       user: { id: userId },
//     };

//     console.log('payload ->', payload);

//     try {
//       const response = await createLogApi(payload);
//       alert('Log created!');
//       navigate(`/logs/${response.logId}`);
//     } catch (error) {
//       console.error('Failed to create log:', error);
//       alert('Something went wrong. Try Again.');
//     }
//   };

//   return (
//     <>
//       <label htmlFor="title">Log Title:</label>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Title"
//         />
//         <label htmlFor="frequencyCount">Frequency Count:</label>
//         <input
//           name="frequencyCount"
//           value={formData.frequencyCount}
//           onChange={handleChange}
//           placeholder="Frequency Count"
//           type="number"
//         />
//         <label htmlFor="frequencyUnit">times per a</label>
//         <select
//           name="frequencyUnit"
//           value={formData.frequencyUnit}
//           onChange={handleChange}
//         >
//           <option value="DAY">Day</option>
//           <option value="WEEK">Week</option>
//           <option value="MONTH">Month</option>
//         </select>

//         <label htmlFor="skillLevel">Skill Level:</label>
//         <select
//           name="skillLevel"
//           value={formData.skillLevel}
//           onChange={handleChange}
//         >
//           <option value="BEGINNER">Beginner</option>
//           <option value="INTERMEDIATE">Intermediate</option>
//           <option value="ADVANCED">Advanced</option>
//         </select>
//         {/* <label htmlFor="score">Starting Score:</label>
//         <input
//           name="score"
//           value={formData.score}
//           onChange={handleChange}
//           type="number"
//           placeholder="Score"
//         /> */}
//         <label>
//           <input
//             type="checkbox"
//             name="wantsPartner"
//             checked={formData.wantsPartner}
//             onChange={handleChange}
//           />
//           Looking for a partner?
//         </label>
//         {/* <label htmlFor="partnerName">
//           Or do you already have a partner in mind? Partner Name:
//         </label>
//         <input
//           name="partnerName"
//           value={formData.partnerName}
//           onChange={handleChange}
//           placeholder="Partner Name"
//         /> */}
//         <button type="submit"> Add Log </button>
//       </form>
//     </>
//   );
// };

// export default NewLogForm;
