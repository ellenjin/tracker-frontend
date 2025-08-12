import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const LogInfo = ({ log }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Frequency:</strong> {log.frequencyCount} / {log.frequencyUnit}
      </Typography>
      <Divider sx={{ my: 1 }} />

      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Skill Level:</strong> {log.skillLevel}
      </Typography>
      <Divider sx={{ my: 1 }} />

      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Check-Ins:</strong> {log.checkInCount}
      </Typography>
      <Divider sx={{ my: 1 }} />

      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Looking for Partner:</strong> {log.wantsPartner ? 'Yes' : 'No'}
      </Typography>
      <Divider sx={{ my: 1 }} />

      <Typography variant="body1">
        <strong>Partner Name:</strong> {log.partnerName}
      </Typography>
    </Box>
  );
};

export default LogInfo;
