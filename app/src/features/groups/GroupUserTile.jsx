import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
} from '@mui/material';

const GroupUserTile = ({ user, userLog }) => {
  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    const d = new Date(isoString);
    if (isNaN(d)) return 'N/A';
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(
      d.getDate()
    ).padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <ListItem
      sx={{
        bgcolor: 'background.paper',
        mb: 1,
        borderRadius: 2,
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        alignItems: 'center', 
      }}
    >
      <ListItemAvatar sx={{ mr: 2 }}>
        <Avatar alt={user.username} src={user.picture || ''}>
          {user.username ? user.username[0].toUpperCase() : '?'}
        </Avatar>
      </ListItemAvatar>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 2,
          alignItems: 'center',
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" whiteSpace="nowrap">
          {user.username}
        </Typography>

        <Typography variant="body2" color="text.primary" whiteSpace="nowrap">
          <strong>Log:</strong> {userLog?.title || 'No log found'}
        </Typography>

        <Typography variant="body2" color="text.primary" whiteSpace="nowrap">
          <strong>Date:</strong> {formatDate(userLog?.timeStamp)}
        </Typography>

        <Typography variant="body2" color="text.primary" whiteSpace="nowrap">
          <strong>Partner:</strong> {userLog?.partnerName || 'no partner'}
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          whiteSpace="nowrap"
          sx={{ mr: 2 }}
        >
          <strong>Check-ins:</strong> {userLog?.checkInCount ?? 0}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default GroupUserTile;
