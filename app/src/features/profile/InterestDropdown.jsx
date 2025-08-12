import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from '@mui/material';

const InterestDropdown = ({ selectedInterests, onChange }) => {
  const interests = [
    'running',
    'cooking',
    'cleaning',
    'swimming',
    'meditating',
    'Vitamins',
    'reading',
    'journaling',
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updated;

    if (checked) {
      updated = [...selectedInterests, value];
    } else {
      updated = selectedInterests.filter((interest) => interest !== value);
    }

    onChange(updated);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Interests
      </Typography>
      <FormGroup row sx={{ gap: 2 }}>
        {interests.map((interest) => (
          <FormControlLabel
            key={interest}
            control={
              <Checkbox
                checked={selectedInterests.includes(interest)}
                onChange={handleCheckboxChange}
                value={interest}
                color="primary"
              />
            }
            label={interest.charAt(0).toUpperCase() + interest.slice(1)}
          />
        ))}
      </FormGroup>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Selected Interests: {selectedInterests.join(', ') || 'None'}
      </Typography>
    </Box>
  );
};

export default InterestDropdown;
