import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const LogHeader = ({ title, onCheckIn }) => {
  return (
    <Box sx={{ position: 'relative', mb: 4 }}>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1551970634-747846a548cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Log cover"
        sx={{
          width: '100%',
          height: { xs: 100, md: 150 }, 
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          color: '#fff',
          textShadow: '0 2px 8px rgba(0,0,0,0.7)',
        }}
      >

        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={onCheckIn}
          startIcon={<AddIcon />}
          sx={{
            borderRadius: 8,
            border: 4,
            px: 2.5,
            py: 1,
            boxShadow: '0px 4px 12px rgba(0,0,0,0.4)',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          Check-In
        </Button>
      </Box>
    </Box>
  );
};

export default LogHeader;
