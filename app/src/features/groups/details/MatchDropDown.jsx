import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const MatchDropdown = ({ groupUsers, groupId }) => {
  const matchOptions = groupUsers.filter((user) =>
    user.logs.some((log) => {
      return (
        log.group?.id === Number(groupId) &&
        log.wantsPartner &&
        !log.partnerName
      );
    })
  );

  const handleSelect = (event) => {
    const selectedUserId = event.target.value;
    console.log('Selected partner userId:', selectedUserId);
  };

  return (
    <FormControl
      fullWidth
      size="small"
      sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
    >
      <InputLabel sx={{ color: 'primary.main' }}>Select a partner</InputLabel>
      <Select
        label="Select a partner"
        onChange={handleSelect}
        defaultValue=""
        sx={{
          color: 'text.primary',
          fontWeight: 'medium',
          '& .MuiSelect-icon': { color: 'primary.main' },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {matchOptions.map((user) => {
          const log = user.logs.find(
            (log) => log.group?.id === Number(groupId)
          );
          return (
            <MenuItem key={user.id} value={user.id}>
              {user.username} ({log?.skillLevel || 'No skill set'})
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MatchDropdown;
