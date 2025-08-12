import React from 'react';
import { Box, Typography } from '@mui/material';
import GroupActions from './GroupActions';

const GroupHeader = ({
  group,
  groupUsers,
  groupId,
  handleCheckIn,
  onRemind,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',  // prevent content overflow
        mb: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      {/* Cover photo */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={group.name}
        sx={{ width: '100%', height: { xs: 220, md: 300 }, objectFit: 'cover' }}
      />

      {/* Overlay box */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0, 0, 0, 0.55)',
          color: 'common.white',
          display: 'flex',
          flexDirection: 'row',    // always row, no stacking
          flexWrap: 'nowrap',      // no wrap
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 3, md: 6 },
          py: { xs: 3, md: 4 },
          minHeight: { xs: 220, md: 300 },
          overflow: 'hidden',
        }}
      >
        {/* Left side: Group Name + Description */}
        <Box
          sx={{
            flex: '1 1 60%',
            pr: 4,
            textAlign: 'left',
            whiteSpace: 'normal',
            overflowWrap: 'break-word', // prevent overflow breaking words
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textShadow: '0 0 6px rgba(0,0,0,0.7)',
              wordBreak: 'break-word',
            }}
          >
            {group.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              textShadow: '0 0 4px rgba(0,0,0,0.5)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {group.description}
          </Typography>
        </Box>

        {/* Right side: Group Actions */}
        <Box
          sx={{
            flex: '0 0 35%',
            pl: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <GroupActions
            groupUsers={groupUsers}
            groupId={groupId}
            handleCheckIn={handleCheckIn}
            onRemind={onRemind}
            sx={{ color: 'common.white', width: '100%' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GroupHeader;
