import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import MatchDropdown from './MatchDropdown';

const GroupActions = ({ onRemind, groupUsers, groupId, handleCheckIn, sx }) => {
  return (
    <Box sx={{ ...sx, textAlign: 'right' }}>
        {/* Check-In Section */}
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1, fontWeight: 'medium', color: 'common.white' }}
          >
            Have you checked in today?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCheckIn}
            startIcon={<AddIcon />}
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1.2,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
              fontSize: '0.875rem',
            }}
          >
            Check-In
          </Button>
        </Box>

        {/* Remind Friends Section */}
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1, fontWeight: 'medium', color: 'common.white' }}
          >
           
          </Typography>
          <Button
            variant="outlined"
            onClick={onRemind}
            startIcon={<SendIcon />}
            sx={{
              borderRadius: 2,
              borderColor: 'common.white',
              color: 'common.white',
              fontWeight: 'medium',
              fontSize: '0.875rem',
              '&:hover': {
                borderColor: 'secondary.main',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Remind
          </Button>
        </Box>

        {/* Match with a Partner Section */}
        <Box sx={{ minWidth: 240 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1, fontWeight: 'medium', color: 'common.white' }}
          >
            {/* Match with a partner */}
          </Typography>
          <MatchDropdown groupUsers={groupUsers} groupId={groupId} />
        </Box>

    </Box>
  );
};

export default GroupActions;
