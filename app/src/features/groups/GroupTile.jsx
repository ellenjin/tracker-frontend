import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const GroupTile = ({ id, name, description }) => {
  return (
    <Box sx={{ width: '100%', textAlign: 'left' }}>
      <Typography variant="h6" component="h3" noWrap>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" noWrap>
        {description}
      </Typography>
      <Divider varian="fullWidth" sx={{ mt: 1 }} />
    </Box>
  );
};

export default GroupTile;
